import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, CheckBox, ImageBackground } from 'react-native'
import { Container, Header, Content, Icon, Text, View, Button } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/PaymentDetail/Style'
import { CHECKOUT } from '../../../api/ApiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      displayErrorMessage: false,
      errorMsg: {},
      venueIndex: this.props.route.params.venueIndex,
      payableAmount: this.props.route.params.payableAmount,
      item: this.props.route.params.item,
      ticketPrice: this.props.route.params.ticketPrice,
      user_data: {},
      cardHolderName: '',
      userAddress: '',
      cardNumber: '',
      expireYear: '',
      expireMonth: '',
      cvv: '',
    }
  }
  componentDidMount() {

    AsyncStorage.getItem('userData').then((value) => {
      var user_data = JSON.parse(value);
      this.setState({ user_data: user_data });
    })
  }
  _checkout = async (userData) => {



    let details = {
      'name': this.state.cardHolderName,
      'address': this.state.userAddress,
      'credit_card_number': this.state.cardNumber,
      'expiration_year': this.state.expireYear,
      'expiration_month': this.state.expireMonth,
      'cvc': this.state.cvv,
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

    fetch(CHECKOUT, {
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
  render() {
    const { navigation } = this.props;
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
            <Text style={Style.navMiddleText}>Card Details</Text>
          </View>
          <View style={Style.navRight} />
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <View style={Styles.paymentDetails}>
          <Text style={Styles.paymentMethods}>Please enter your card details below</Text>
        </View>
        <View style={Styles.paymentInfo}>

        {this.state.displayErrorMessage==true?
            <View style={{backgroundColor:'#000',flex:1,justifyContent:'center',margin:10,padding:5}}>
            
              {this.state.errorMsg.name?<Text style={{color:'#FFF',marginLeft:10}}>*{this.state.errorMsg.name}</Text>:<View></View>}
              {this.state.errorMsg.credit_card_number?<Text style={{color:'#FFF',marginLeft:10}}>*{this.state.errorMsg.credit_card_number}</Text>:<View></View>}
              {this.state.errorMsg.address?<Text style={{color:'#FFF',marginLeft:10}}>*{this.state.errorMsg.address}</Text>:<View></View>}

              {this.state.errorMsg.cvc?<Text style={{color:'#FFF',marginLeft:10}}>*{this.state.errorMsg.cvc}</Text>:<View></View>}

              {this.state.errorMsg.expiration_month?<Text style={{color:'#FFF',marginLeft:10}}>*{this.state.errorMsg.expiration_month}</Text>:<View></View>}

              {this.state.errorMsg.expiration_year?<Text style={{color:'#FFF',marginLeft:10}}>*{this.state.errorMsg.expiration_year}</Text>:<View></View>}
              
            </View>
            :<View></View>} 

          <TextInput placeholder='Card Holder Name' placeholderTextColor='#999' style={Styles.paymentInput} onChangeText={(cardHolderName) => this.setState({ cardHolderName })} value={this.state.cardHolderName} />
          <TextInput placeholder='Address' placeholderTextColor='#999' style={Styles.paymentInput} onChangeText={(userAddress) => this.setState({ userAddress })} value={this.state.userAddress} />
          <View>
            {/* <Text style={Styles.paymentTitle}>Card Number</Text> */}
            <TextInput placeholder='Credit Card Number' placeholderTextColor='#999' style={Styles.paymentInput} onChangeText={(cardNumber) => this.setState({ cardNumber })} value={this.state.cardNumber} />
          </View>
          <View style={Styles.paymentSection}>
            <TextInput placeholder='Expiry Year' placeholderTextColor='#999' style={Styles.paymentInput} onChangeText={(expireYear) => this.setState({ expireYear })} value={this.state.expireYear} />
            <TextInput placeholder='Expiry Month' placeholderTextColor='#999' style={Styles.paymentInput} onChangeText={(expireMonth) => this.setState({ expireMonth })} value={this.state.expireMonth} />
            <TextInput placeholder='CVC' placeholderTextColor='#999' style={Styles.paymentInput} onChangeText={(cvv) => this.setState({ cvv })} value={this.state.cvv} />
          </View>

          {/* <View style={Styles.paymentRow}>
            <CheckBox />
            <View style={Styles.paymentDetail}>
              <Text style={Styles.paymentDesc}>QuikPay</Text>
              <Text style={Styles.paymentCheck}>Save this card information to my BookMyTickets account and make faster payments</Text>
            </View>
          </View> */}
        </View>
      </Content>
      <TouchableOpacity style={Styles.payBtn} onPress={() => {
        //navigation.navigate('PublicConfirmation') 
        this._checkout(this.state.user_data)
      }}>
        <Text style={Styles.payBtnText}>Pay € {this.state.payableAmount}</Text>
      </TouchableOpacity>
    </Container>
  }
}
