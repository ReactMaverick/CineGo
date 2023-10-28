import React from 'react'
import { StatusBar, TouchableOpacity, ImageBackground } from 'react-native'
import { Container, Header, Content, Icon, Text, View, Button } from 'native-base'

import NavigationService from '@Service/Navigation'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { CRYPTO_CHECKOUT } from '../../../api/ApiConfig';
import Style from '@Theme/Style'
import Styles from '@Screen/Public/Payment/Style'

export default class extends React.Component {
	constructor (props) {
		super(props)
		this.state={
			displayErrorMessage: false,
			errorMsg: {},     
			venueIndex: this.props.route.params.venueIndex,
			item: this.props.route.params.item,
			ticketPrice: this.props.route.params.ticketPrice,      
			totalAmt: this.props.route.params.totalAmt,
			ticketTotalPrice: this.props.route.params.ticketTotalPrice,
			user_data: {},
			user: 0,
			username: 0,
			timeslot: 0,
		}
	}
	
	componentDidMount(){
		var totalAmt = parseFloat(this.state.totalAmt);
		var ticketTotalPrice = parseFloat(this.state.ticketTotalPrice);
		var payableAmount = totalAmt+ticketTotalPrice;
		this.setState({payableAmount:payableAmount.toFixed(2)})
		AsyncStorage.getItem('userData').then((value) => {
			var user_data = JSON.parse(value);
			this.setState({ user_data: user_data });
			this.setState({ user: user_data.id });
			this.setState({ username: user_data.username });
			this.setState({ timeslot: this.state.venueIndex.timeslot_id });
		})
	}
  
	_checkout = async (userData) => {
		let details = {
		  'name': this.state.username,
		  'method': 'promo',
		  'address': this.state.username,
		  'venueId': this.state.venueIndex.venue_id,
		  'timeslotId': this.state.venueIndex.timeslot_id,
		  'eventId': this.state.item.id,
		  'ticket_details':JSON.stringify(this.state.ticketPrice) 
		};
		console.log("details==>",details);

		//console.log(this.state.user_data);
		let formBody = [];
		for (let property in details) {
		  let encodedKey = encodeURIComponent(property);
		  let encodedValue = encodeURIComponent(details[property]);
		  formBody.push(encodedKey + "=" + encodedValue);
		}
		formBody = formBody.join("&");

		fetch(CRYPTO_CHECKOUT, {
		  method: "POST",
		  headers: {
			'Authorization': 'Bearer ' + userData.token,
			'Content-Type': 'application/x-www-form-urlencoded'
		  },
		  body: formBody
		})
		  .then((response) => response.json())
		  .then((responseJson) => {
			console.log("Checkout",responseJson);
		   // responseJson.order_id
			if (responseJson.order_reference != undefined) {
			 // navigation.navigate('PublicConfirmation',{data:responseJson}) 
			const { navigation } = this.props;	
			 navigation.navigate('PublicOrder', { order_id: responseJson.order_id })
			} else {
			  this.setState({ displayErrorMessage: true });
			  this.setState({ errorMsg: responseJson.errors });
			
			  setTimeout(() => {
				this.setState({ displayErrorMessage: false })
				this.setState({ errorMsg: {} })
			  }, 10000)
			}

		  })
		  .catch((error) => console.log(error))
		  .finally(() => {
			this.setState({ isLoading: false });
		  });
	  }
  
	render () {
		const { navigation } = this.props;
		const totalAmount = this.props.route.params.totalAmt
		return <Container>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#00462d' animated barStyle='light-content' />
        <ImageBackground source={require('@Asset/images/menubg.png')} style={Style.navigationBar}>
          <View style={Style.navLeft}>
            <Button
              transparent onPress={() => {
                navigation.navigate('PublicBooking')
              }}
            >
              <Icon name='arrow-left' type='MaterialCommunityIcons' style={Style.navLeftIcon} />
            </Button>
          </View>
          <View style={Style.navMiddle}>
            <Text style={Style.navMiddleText}>
				{ this.state.payableAmount!=0.00 ? 'Payment Methods' : 'Confirm Order' }
			</Text>
          </View>
          <View style={Style.navRight} />
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <View style={Styles.paymentInfo}>
          <Text style={Styles.amountDesc}>Total</Text>
          <Text style={Styles.amount}>€ {this.state.payableAmount}</Text>
        </View>
        <View style={Styles.paymentDetails}>
          <Text style={Styles.paymentMethods}>
			{ this.state.payableAmount!=0.00 ? 'Payment Methods' : 'Confirm Order' }
		  </Text>
        </View>
        { this.state.payableAmount!=0.00 ? 
			<View style={Styles.cardDetails}>
			<TouchableOpacity style={Styles.reserveForm} onPress={() => { navigation.navigate('PublicPaymentDetail', { payableAmount: this.state.payableAmount,venueIndex:this.state.venueIndex,item:this.state.item,ticketPrice:this.state.ticketPrice }) }}>
				<View style={Styles.cardPayment}>
				  <Icon name='credit-card' type='FontAwesome' style={Styles.cardIcon} />
				  <Text style={Styles.paymentMode}>Debit/Credit Card</Text>
				</View>
				<Icon name='keyboard-arrow-right' type='MaterialIcons' style={Styles.cardIcon} /> 
			</TouchableOpacity>			
        </View> : 
			<View style={Styles.cardDetails}>
			{this.state.displayErrorMessage==true?
            <View style={{backgroundColor:'#000',flex:1,justifyContent:'center',borderRadius:5,padding:5}}>
            
              {this.state.errorMsg.address?<Text style={{color:'#FFF',marginLeft:10}}>*{this.state.errorMsg.address}</Text>:<View></View>}

            
              
            </View>
            :<View></View>} 
			<TouchableOpacity style={Styles.reserveForm} onPress={() => { this._checkout(this.state.user_data); }}>
				<View style={Styles.cardPayment}>
				  <Icon name='ticket' type='FontAwesome' style={Styles.cardIcon} />
				  <Text style={Styles.paymentMode}>Click here to confirm order</Text>
				</View>
				<Icon name='keyboard-arrow-right' type='MaterialIcons' style={Styles.cardIcon} /> 
			</TouchableOpacity></View>			}
      </Content>
           </Container>
	}
}
