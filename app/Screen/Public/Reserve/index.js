import React from 'react'
import { StatusBar, TouchableOpacity, ImageBackground } from 'react-native'
import { Container, Header, Content, Icon, Text, Button, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Reserve/Style'
import { CART_VIEW, CART_REMOVE } from '../../../api/ApiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: this.props.route.params.item,
      venueIndex: this.props.route.params.venueIndex,
      // ticketDetails: this.props.navigation.getParam('ticketPrice'),
      ticketPrice:[],
      total_amount: 0,
      cartData: [],
      userData: {},
      venueName: '',
      ticketTotalPrice: 0,
      totalTicket: 0
    }
  }
  componentDidMount() {
    
    var ticketPrice = this.props.route.params.ticketPrice;
    var ticketNewArr = [];
    var totalTicket = this.state.totalTicket;
    var ticketTotalPrice = this.state.ticketTotalPrice;
    for (i = 0; i < ticketPrice.length; i++) {
      if (ticketPrice[i].quantity != 0) {
        ticketNewArr.push(ticketPrice[i]);
        totalTicket = totalTicket+ticketPrice[i].prices_pax;
        ticketTotalPrice = ticketTotalPrice + ((parseFloat(ticketPrice[i].prices_price)+parseFloat(ticketPrice[i].prices_booking)) * parseInt(ticketPrice[i].quantity))

      }
    }
  
    this.setState({ ticketTotalPrice: ticketTotalPrice });
    this.setState({ totalTicket: totalTicket });
    this.setState({ ticketPrice: ticketNewArr });
    

    for (i = 0; i < this.state.item.venue.length; i++) {
      if (this.state.item.venue[i].id == this.state.venueIndex.venue_id) {
        this.setState({ venueName: this.state.item.venue[i].name });
      }
    }
    AsyncStorage.getItem('userData').then((value) => {
      var user_data = JSON.parse(value);
      this.setState({ user_data: user_data });
      this._getCart(this.state.venueIndex, user_data);

    })
  }

  _getCart = async (venueIndex, user_data) => {

    let details = {
      'userId': user_data.id,
      'venueId': venueIndex.venue_id,
    };


    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(CART_VIEW, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + user_data.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log("responseJson", responseJson);
        var total_amount = 0;
        if (responseJson['Items in Cart'] != undefined) {
          this.setState({ cartData: responseJson['Items in Cart'] });
          for (i = 0; i < responseJson['Items in Cart'].length; i++) {
            total_amount = total_amount + (parseFloat(responseJson['Items in Cart'][i].price) * parseInt(responseJson['Items in Cart'][i].Quantity));
          }

        }
        
        var new_total_amount = total_amount+ this.state.ticketTotalPrice;
        this.setState({ new_total_amount: new_total_amount.toFixed(2) });

        this.setState({ total_amount: total_amount.toFixed(2) });
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });

  }
  _removeItem = async (cartitem) => {


    let details = {
      'productId': cartitem.productID,
      'userId': this.state.user_data.id,
      'venueId': this.state.venueIndex.venue_id,
    };


    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(CART_REMOVE, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + this.state.user_data.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("responseJson", responseJson);
        this._getCart(this.state.venueIndex, this.state.user_data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });

  }

  render() {    
    const { navigation } = this.props;
    const total = this.props.route.params.ticket + this.props.route.params.bite
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
            <Text style={Style.navMiddleText}>Purchase Summary</Text>
          </View>
          <View style={Style.navRight} />
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>

        <View style={Styles.paymentDetail}>          
          <View style={Styles.modalRowNew}>
            <Text style={Styles.modalDesc}>Event Details</Text>
          </View>
          {/* <View style={Styles.paymentInfo}>
                <Text style={Styles.paymentDesc}>Sub-Total</Text>
                <Text style={Styles.paymentDesc}>€{this.props.navigation.getParam('ticket')}</Text>
              </View> */}
          {/* <View style={Styles.paymentInfo}>
                <Text style={Styles.paymentDesc}>Bite-Total</Text>
                <Text style={Styles.paymentDesc}>€ {this.props.navigation.getParam('bite')}</Text>
              </View> */}
          {<View style={Styles.paymentInfo}>
            <Text style={Styles.paymentDesc}>Event</Text>
            <Text style={Styles.paymentDesc}>{this.state.item.name}</Text>
          </View>}
          {<View style={Styles.paymentInfo}>
            <Text style={Styles.paymentDesc}>Venue</Text>
            <Text style={Styles.paymentDesc}>{this.state.venueName}</Text>
          </View>}
          {<View style={Styles.paymentInfo}>
            <Text style={Styles.paymentDesc}>Date</Text>
            {/* <Text style={Styles.paymentDesc}>01 April 2021</Text> */}
            <DateFormat startDate={this.state.item.start_date} />
          </View>}
          <View style={Styles.paymentInfo}>
            <Text style={Styles.paymentDesc}></Text>
            <Text style={Styles.paymentDesc}></Text>
          </View>
          <View style={Styles.modalRowNew}>
            <Text style={Styles.modalDesc}>Ticket Types</Text>
          </View>


          {this.state.ticketPrice.map((priceItem, key) => (
            <View style={Styles.paymentInfo}>
              <Text style={Styles.moviePlace}>{priceItem.name} ( € {parseFloat(priceItem.prices_price + priceItem.prices_booking).toFixed(2)} x {priceItem.quantity} )</Text>
              <Text style={Styles.moviePlace}>€ {parseFloat((priceItem.prices_price + priceItem.prices_booking) * priceItem.quantity).toFixed(2)}</Text>
            </View>
          ))}

          <View style={Styles.paymentInfo}>
            <Text style={Styles.paymentDesc}></Text>
            <Text style={Styles.paymentDesc}></Text>
          </View>
          <View style={Styles.modalRowNew}>
            <Text style={Styles.modalDesc}>Extras</Text>
          </View>
        </View>

        {this.state.cartData.map((cartItem, key) => (
          <View style={Styles.reserveForm}>
            <View style={Styles.firstBox} >
              <Text style={Styles.movieName}></Text>
              <Text style={Styles.movieTime}>{cartItem.Name}</Text>
            </View>
            <View style={Styles.boxOffice}>
              <Text style={Styles.movieSeats}>{"€" + parseFloat(cartItem.price).toFixed(2)} ( x {cartItem.Quantity} )</Text>
            </View>
            <View style={Styles.boxOffice}>
              <Text style={Styles.movieSeats}>{"€" + parseFloat(cartItem.Quantity * cartItem.price).toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={Styles.removeItem} onPress={() => { this._removeItem(cartItem) }}>
              <Icon name='delete' type='MaterialCommunityIcons' style={Styles.deleteBox} />
            </TouchableOpacity>
          </View>
        ))}
        <View style={Styles.paymentDetail}>
          {/* <View style={Styles.paymentInfo}>
              <Text style={Styles.paymentDesc}>Sub-Total</Text>
              <Text style={Styles.paymentDesc}>€{this.props.navigation.getParam('ticket')}</Text>
            </View> */}
          {/* <View style={Styles.paymentInfo}>
              <Text style={Styles.paymentDesc}>Bite-Total</Text>
              <Text style={Styles.paymentDesc}>€ {this.props.navigation.getParam('bite')}</Text>
            </View> */}

          <View style={Styles.paymentInfo}>
            <Text style={Styles.moviePlace}>Sub-total</Text>
            <Text style={Styles.moviePlace}>€ {this.state.total_amount}</Text>
          </View>
          <View style={Styles.paymentInfo}>
            <Text style={Styles.moviePlace}>Tickets</Text>
            <Text style={Styles.moviePlace}>€ {this.state.ticketTotalPrice.toFixed(2)}</Text>
          </View>
        </View>
        <View style={Styles.paymentDetail}><View style={Styles.paymentInfo}>
          <Text style={Styles.paymentTotal}>Total</Text>
          <Text style={Styles.paymentTotal}>€ {this.state.new_total_amount}</Text>
        </View>
          <View style={{ display: 'none' }}>
            <TouchableOpacity style={Styles.reserveForm} onPress={() => { navigation.navigate('PublicPaymentDetail', { venueIndex: this.state.venueIndex,item:this.state.item,ticketPrice:this.state.ticketPrice }) }}>
              <View style={Styles.cardPayment}>
                <Icon name='credit-card' type='FontAwesome' style={Styles.cardIcon} />
                <Text style={Styles.paymentMode}>Debit/Credit Card</Text>
              </View>
              <Icon name='keyboard-arrow-right' type='MaterialIcons' style={Styles.cardIcon} />
            </TouchableOpacity>
            {/* <TouchableOpacity style={Styles.reserveForm} onPress={() => { navigation.navigate('PublicPaymentDetail') }}>
              <View style={Styles.cardPayment}>
                <Icon name='credit-card' type='FontAwesome' style={Styles.cardIcon} />
                <Text style={Styles.paymentMode}>Net Banking</Text>
              </View>
              <Icon name='keyboard-arrow-right' type='MaterialIcons' style={Styles.cardIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.reserveForm} onPress={() => { navigation.navigate('PublicPaymentDetail') }}>
              <View style={Styles.cardPayment}>
                <Icon name='credit-card' type='FontAwesome' style={Styles.cardIcon} />
                <Text style={Styles.paymentMode}>UPI</Text>
              </View>
              <Icon name='keyboard-arrow-right' type='MaterialIcons' style={Styles.cardIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.reserveForm} onPress={() => { navigation.navigate('PublicPaymentDetail') }}>
              <View style={Styles.cardPayment}>
                <Icon name='credit-card' type='FontAwesome' style={Styles.cardIcon} />
                <Text style={Styles.paymentMode}>More Payment Options</Text>
              </View>
              <Icon name='keyboard-arrow-right' type='MaterialIcons' style={Styles.cardIcon} />
            </TouchableOpacity>*/}
          </View>
        </View>
      </Content>
      <TouchableOpacity style={Styles.payBtn} onPress={() => { navigation.navigate('PublicPayment', { totalAmt: this.state.total_amount, ticketTotalPrice: this.state.ticketTotalPrice, venueIndex: this.state.venueIndex,item:this.state.item,ticketPrice:this.state.ticketPrice }) }}>
        <Text style={Styles.payBtnText}>€ {this.state.new_total_amount} <Icon name='arrow-right' style={Styles.payBtnText} type='FontAwesome' /></Text>
      </TouchableOpacity>
    </Container>
  }
}


class DateFormat extends React.Component {

  render() {
    var startDate = this.props.startDate;
    var newDate = startDate.split("-");

    var monthArr = { '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'June', '07': 'July', '08': 'Aug', '09': 'Sept', '10': 'Oct', '11': 'Nov', '12': 'Dec' };
    var Day = newDate[2];
    var Month = monthArr[newDate[1]];
    var Year = newDate[0];
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={Styles.paymentDesc}>{Day} </Text>
        <Text style={Styles.paymentDesc}>{Month} </Text>
        <Text style={Styles.paymentDesc} >{Year}</Text>
      </View>
    )

  }

}


