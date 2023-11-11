import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, ScrollView, ImageBackground, FlatList, Dimensions, Alert } from 'react-native'
import { Container, Header, Content, Footer, Icon, Text, View, Card, Button } from 'native-base'
import NavigationService from '@Service/Navigation'

import Modal from 'react-native-modalbox'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/SelectSeat/Style'
import SeatLayout from './SeatLayout'
import BITE from './Bite'
import { LIST_PRODUCT, CART_ADD, TIMESLOT, CART_VIEW, RESERVE, RELEASE, TIMESLOT_BY_EVENT, PROMO_CODE } from '../../../api/ApiConfig';
const { width: WIDTH } = Dimensions.get('window')
import Spinner from "react-native-loading-spinner-overlay";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisabled: false,
      data: BITE,
      isSelect: false,
      amount: 1,
      grandTotal: '',
      total: '',
      counter: {
        0: 1,
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 1,
        6: 1
      },
      ticketPrice: this.props.route.params.ticketPrice,
      total_amount: 0,
      totalTicketAmount: 0,
      venueIndex: this.props.route.params.venueIndex,
      isLoading: false,
      products: [],
      item: this.props.route.params.item,
      isModalOpen: false,
      addFunds: [],
      addIndex: '',
      searchText: [],
      tempData: [],
      user_data: {},
      selectedVariantOptions: {},
      displayErrorMessage: false,
      isOpen: false,
      name: '',
      isSelectNo: 0,
      seatNo: 0,
      timeSlot: [],
      dates: [],
      final_arr: [],
      venueName: '',
      timeslot_id: '',
      totalTicketAmount: 0,
      mycode: '',
      showTheThing: true,
    }
  }

  // componentDidMount() {
  //   // const seatNo = this.props.navigation.getParam('seat')
  //   const seatNo: this.props.route.params.seat,
  //   this.setState({ grandTotal: seatNo * 150 })
  //   this._getProducts();
  // }
  componentDidMount() {
    const seatNo = this.props.route.params.seat;
    if (!isNaN(seatNo)) {
      const grandTotal = seatNo * 13;
      this.setState({ grandTotal });
    } else {
      console.error('Invalid seat number');
    }
    AsyncStorage.getItem('userData').then((value) => {
      var user_data = JSON.parse(value);

      this.setState({ user_data: user_data });

    })
    this._getProducts();
    this._getTimeSlot(this.state.item.id);
  }
  openModal = () => {
    this.setState({ isModalOpen: true });
    this.setState({
      isOpen: false
    })
    console.log("click");
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };


  _getProducts = async () => {
    await this.setState({ isLoading: true });
    fetch(LIST_PRODUCT, {
      method: "GET",
      headers: {
        // 'Authorization': 'Bearer ' + userData.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        var product = responseJson.products;
        for (i = 0; i < responseJson.products.length; i++) {
          product[i].initial_quantity = 1;
          product[i].price = product[i].variants[0].price;
        }
        this.setState({ products: product });

      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  _setSelectedVariantOptions = (variant, variant_option) => {
    var tempSelectedVariantOptions = this.state.selectedVariantOptions;
    tempSelectedVariantOptions[variant] = variant_option;
    this.setState({ selectedVariantOptions: tempSelectedVariantOptions });
  }
  _getPriceByEvent = async (venueIndex) => {
    //venueIndex.venue_id
    // console.log("venueIndex",venueIndex.times);
    let details = {
      'event': this.state.item.id
    };


    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(TIMESLOT_BY_EVENT, {
      method: "POST",
      headers: {
        // 'Authorization': 'Bearer ' + userData.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
      .then((response) => response.json())
      .then((responseJson) => {

        var price = [];
        if (responseJson.prices.length != 0) {
          for (i = 0; i < responseJson.prices.length; i++) {
            if (responseJson.prices[i].venue_id == venueIndex.venue_id && responseJson.prices[i].prices_plan == venueIndex.times) {
              responseJson.prices[i].quantity = 0;
              price.push(responseJson.prices[i]);
            }
          }
        }

        this.setState({ ticketPrice: price });
        // console.log("price", this.state.ticketPrice);
      })
      .catch((error) => console.log(error))
      .finally(() => {

      });
  }
  _getTimeSlot = async (id) => {


    let details = {
      'event': id
    };


    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(TIMESLOT, {
      method: "POST",
      headers: {
        // 'Authorization': 'Bearer ' + userData.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("dates and times______" + responseJson.data.length);
        if (responseJson.data.length != 0) {

          var newArr = [];
          var dates = [];
          var groupByVenu = [];
          for (i = 0; i < responseJson.data.length; i++) {
            if (!dates.includes(responseJson.data[i].date)) {
              dates.push(responseJson.data[i].date);
            }
            if (newArr[responseJson.data[i].date] == undefined) {
              newArr[responseJson.data[i].date] = [];
            }
            newArr[responseJson.data[i].date].push(responseJson.data[i]);

          }
          // console.log(newArr);
          // console.log(dates);
          var final_arr = [];
          var dt = 0;
          var x = 0;
          var a = 0;
          for (dt = 0; dt < dates.length; dt++) {
            var arObj = newArr[dates[dt]];
            final_arr[dates[dt]] = [];
            for (x = 0; x < arObj.length; x++) {
              var venue_name = "";

              for (a = 0; a < this.state.item.venue.length; a++) {
                if (this.state.item.venue[a].id == arObj[x].venue_id) {
                  venue_name = this.state.item.venue[a].name;
                  if (final_arr[dates[dt]][venue_name] == undefined) {
                    final_arr[dates[dt]][venue_name] = [];
                  }
                  final_arr[dates[dt]][venue_name].push(arObj[x]);
                }
              }

            }
          }
          // console.log(final_arr);
          this.setState({ venueName: venue_name });
          this.setState({ final_arr: final_arr });
          this.setState({ timeSlot: newArr });
          this.setState({ dates: dates });

          // console.log(dates);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {

      });
  }
  _setEvent = async (item) => {
    this.setState({ events: this.state.eventCategory[item] });
    this.setState({ selectedItem: item });
  }
  onValueChange(list) {
    var products = this.state.products;
    this._setSelectedVariantOptions(products[this.state.addIndex].title.replace(" ", "_"), list.options[0].value)
    products[this.state.addIndex].price = list.price;
    products[this.state.addIndex].variants_id = list.options[0].variant_id;
    this.setState({ products: products });
    this.setState({ isModalOpen: false });
  }
  _add(index) {
    var products = this.state.products;
    var quantity = products[index].quantity;
    var initial_quantity = products[index].initial_quantity + 1;
    if (initial_quantity > quantity) {
      Alert.alert("Warning", "Please try again");
    } else {
      products[index].initial_quantity = initial_quantity;
      this.setState({ products: products });
    }
  }
  _remove(index) {
    var products = this.state.products;
    var initial_quantity = products[index].initial_quantity - 1;
    if (initial_quantity == 0) {
      Alert.alert("Warning", "Please try again");
    } else {
      products[index].initial_quantity = initial_quantity;
      this.setState({ products: products });
    }
  }
  _customText(list) {
    //console.log(list.price);
    var str = '';
    for (i = 0; i < list.options.length; i++) {
      str = str + list.options[i].value + ' | ';
    }
    str = str.trim();
    str = str.slice(0, - 1);
    str = str + " - €" + list.price;
    return str;
  }
  _customText2(list) {
    //console.log(list.price);
    var str = '';
    for (i = 0; i < list.options.length; i++) {
      str = str + list.options[i].value + ' ';
    }
    return str;
  }
  extraAndTicketAmount() {
    var total = parseFloat(this.state.total_amount) + parseFloat(this.state.totalTicketAmount) + parseFloat(this.state.grandTotal);
    return total.toFixed(2);
  }
  _addProductTocart = async (product) => {

    await this.setState({ isLoading: true });

    let details = {
      'productId': product.variants_id,
      'venueId': this.state.venueIndex.venue_id,
      'quantity': product.initial_quantity
    };


    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(CART_ADD, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + this.state.user_data.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this._getCart(this.state.venueIndex);

      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
  _getCart = async (venueIndex) => {
    let details = {
      'userId': this.state.user_data.id,
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
        'Authorization': 'Bearer ' + this.state.user_data.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("responseJson", responseJson);
        var total_amount = 0;
        if (responseJson['Items in Cart'] != undefined) {
          for (i = 0; i < responseJson['Items in Cart'].length; i++) {
            total_amount = total_amount + (parseFloat(responseJson['Items in Cart'][i].price) * parseInt(responseJson['Items in Cart'][i].Quantity));
          }

        }
        this.setState({ total_amount: total_amount.toFixed(2) });
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });

  }
  _getPromoPrices = async (id, code) => {
    await this.setState({ isLoading: true });
    if (code != '') {
      fetch(PROMO_CODE + '/' + id + '/' + code, {
        //fetch(PROMO_CODE+ '/' + id + '/DDHHDEKH', {
        method: "GET",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then((response) => response.json())
        .then((responseJson) => {
          var promo_prices = responseJson.prices;
          var price = [];
          if (responseJson.message) {
            this._getPriceByEvent(this.state.venueIndex);
            this.setState({ displayErrorMessage: true });
            this.setState({ errorMsg: responseJson.message });
            //alert(responseJson.message) 

            if (this.state.venueIndex.orig_max_tickets != this.state.venueIndex.max_tickets) {
              if (this.state.venueIndex.orig_max_tickets != 'undefined') {
                // promo has been reset
                if (this.state.venueIndex.orig_max_tickets) {
                  this.state.venueIndex.max_tickets = this.state.venueIndex.orig_max_tickets;
                }
              }
            }
          } else {
            this.state.venueIndex.orig_max_tickets = this.state.venueIndex.max_tickets;
            this.state.venueIndex.max_tickets = responseJson.code.tickets;
            var allowed_tickets = responseJson.code.tickets;
            this.setState({ displayErrorMessage: true });
            this.setState({ errorMsg: 'You can purchase a max. of ' + allowed_tickets + ' tickets with code "' + code + '"' });
            setTimeout(() => {
              this.setState({ displayErrorMessage: false })
              this.setState({ errorMsg: {} })
            }, 10000)
            //alert('You can purchase a max. of '+allowed_tickets+' tickets with code "'+code+'"')
            if (responseJson.prices.length != 0) {
              for (i = 0; i < responseJson.prices.length; i++) {
                if (responseJson.prices[i].venue_id == this.state.venueIndex.venue_id && responseJson.prices[i].prices_plan == this.state.venueIndex.times && responseJson.code.tickets >= responseJson.prices[i].prices_pax) {
                  responseJson.prices[i].quantity = 0;
                  price.push(responseJson.prices[i]);
                }
              }
            }
            this.setState({ ticketPrice: price });
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }
  _setupTimeslot(venue, item) {

    for (i = 0; i < venue.length; i++) {
      if (item[venue[i].name] != undefined) {
        return (
          <View style={Styles.bookingForm}>
            <View style={Styles.calender}>
              <Text style={Styles.bookingVenueTimes}>{venue[i].name}</Text>
            </View>

            {item[venue[i].name].map((item, key) => (

              <TouchableOpacity key={key} style={Styles.bookingTime} onPress={() => { this._checkSeatingStatus(item) }}>
                <Text style={Styles.showTime}>{item.start_time + "-" + item.end_time}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )
      }
    }
  }
  _reserve = async () => {

    var timeSlot = this.state.timeslot_id;
    var totalAmount = this.state.isSelectNo;
    var userId = this.state.user_data.id;

    fetch(RESERVE + '/' + timeSlot + '/' + totalAmount + '/' + userId, {
      method: "POST",
      headers: {
        // 'Authorization': 'Bearer ' + this.state.user_data.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("responseJson", responseJson);
        if (responseJson.success == true) {
          //Alert.alert("Success",totalAmount+" "+responseJson.message);
        } else {
          Alert.alert("Warning", responseJson.message);
        }

      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });

  }


  _release = async (timeslot_id) => {

    var timeSlot = timeslot_id;

    var userId = this.state.user_data.id;

    fetch(RELEASE + '/' + timeSlot + '/' + userId, {
      method: "POST",
      headers: {
        // 'Authorization': 'Bearer ' + this.state.user_data.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log("release ", responseJson);
        // if(responseJson.success==true){
        //   Alert.alert("Success",totalAmount+" "+responseJson.message);
        // }

      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });

  }
  _removeTicketPrice = async (key) => {
    var ticket_price = this.state.ticketPrice;
    var total_amount = 0;
    var totalTicket = 0;
    if (ticket_price[key].quantity != 0) {
      ticket_price[key].quantity = ticket_price[key].quantity - 1;
      this.setState({ ticketPrice: ticket_price });

      for (i = 0; i < ticket_price.length; i++) {

        if (ticket_price[i].quantity != 0) {
          total_amount = total_amount + ((parseFloat(ticket_price[i].prices_price) + parseFloat(ticket_price[i].prices_booking)) * parseInt(ticket_price[i].quantity))
          totalTicket = totalTicket + parseInt(ticket_price[i].prices_pax);
        }

      }

      this.setState({ isSelectNo: totalTicket });
      this.setState({ totalTicketAmount: parseFloat(total_amount) });
    }

  }
  _addTicketPrice = async (key) => {
    var ticket_price = this.state.ticketPrice;
    var maxTicket = this.state.venueIndex.max_tickets;
    var totalTicket = 0;
    var total_amount = 0;
    for (i = 0; i < ticket_price.length; i++) {
      if (ticket_price[i].quantity != 0) {
        totalTicket = totalTicket + (parseInt(ticket_price[i].prices_pax) * parseInt(ticket_price[i].quantity));
      }

    }
    totalTicket = totalTicket + parseInt(ticket_price[key].prices_pax);
    //console.log("Ticket",maxTicket+"  "+totalTicket);
    if (maxTicket >= totalTicket) {

      ticket_price[key].quantity = ticket_price[key].quantity + 1;
      this.setState({ ticketPrice: ticket_price });
      this.setState({ isSelectNo: totalTicket });
      for (i = 0; i < ticket_price.length; i++) {
        if (ticket_price[i].quantity != 0) {
          total_amount = total_amount + ((parseFloat(ticket_price[i].prices_price) + parseFloat(ticket_price[i].prices_booking)) * parseInt(ticket_price[i].quantity))
        }


      }
      //console.log(ticket_price);

      this.setState({ totalTicketAmount: parseFloat(total_amount) });
    } else {
      Alert.alert("Warning", "You can't add more than " + maxTicket + " tickets");
    }
  }
  _customSearch = search => {
    this.setState({ searchText: search }, () => {
      let data = this.state.tempData;
      let newData = [];
      if (this.state.searchText.length > 0) {
        newData = data.filter(function (item) {
          var str = '';
          for (i = 0; i < item.options.length; i++) {
            str = str + item.options[i].value
          }
          str = str.trim();
          str = str.slice(0, - 1);
          const itemData = str.toUpperCase();
          const textData = search.toUpperCase();
          return itemData.includes(textData);
        });
        this.setState({ addFunds: [...newData] });
      } else {
        this.setState({ addFunds: this.state.tempData });
      }
    });
  };

  render() {
    const { navigation } = this.props;
    // const name = this.props.navigation.getParam('data')
    const name = this.props.route.params.data;
    let layoutType = 0
    if (name === 'AGS Cinemas OMR: New York') {
      layoutType = 1
    } else if (name === 'AGS Cinemas OMR: New York') {
      layoutType = 2
    } else if (name === 'Carnival Cinemas EVP: New York') {
      layoutType = 3
    } else if (name === 'Inox National: New York') {
      layoutType = 4
    }

    return <Container>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#9013FE' animated barStyle='light-content' />
        <ImageBackground source={require('@Asset/images/menubg.png')} style={Style.navigationBar}>
          <TouchableOpacity
            style={Styles.navLeft} onPress={() => {
              navigation.navigate('PublicBooking')
            }}
          >
            <Icon name='arrow-left' type='MaterialCommunityIcons' style={Styles.navLeftIcon} />
            <View style={Styles.movieList}>
              <Text style={Styles.movieName}>Captain Marvel</Text>
              <Text style={Styles.moviePlace}>AGS Cinemas: New York</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.navRight} onPress={() => {
              navigation.navigate('PublicHome')
            }}
          >
            <Text style={Styles.rightDesc}>4 Tickets</Text>
          </TouchableOpacity>
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <View style={Styles.calender}>
          <Text style={Styles.calenderDesc}>Tomorrow,10Mar</Text>
          <Text style={Styles.calenderDesc}>Tamil 2D</Text>
        </View>

        <View style={Styles.bookingTime}>
          <Text style={Styles.showTime}>01:15PM</Text>
          <Text style={Styles.showTime}>04:05PM</Text>
          <Text style={Styles.showTime}>07:30PM</Text>
          <Text style={Styles.showTime}>10:25PM</Text>
        </View>

        <View style={Styles.bookSeat}>
          <ScrollView horizontal>
            {<SeatLayout layoutType={layoutType} navigation={this.props.navigation} />}
          </ScrollView>
        </View>

      </Content>
      <Modal
        ref='modalBite'
        isOpen={this.state.isOpen}
        onClosed={() =>
          this.setState({
            isOpen: false
          })}
        isDisabled={this.state.isDisabled}
        style={Styles.modalForm}
      >
        <View style={Styles.modalRow}>
          <Icon name='keyboard-arrow-left' type='MaterialIcons' style={Styles.closeIcon} onPress={() => this.refs.modalBite.close()} />
          <Text style={Styles.modalDesc}>Go to a Bite</Text>
        </View>
        <ScrollView>
          {this.state.products.map((item, index) => (
            <Card style={{ margin: 10, width: WIDTH - 20 }}>
              <View style={{ flexDirection: "row", padding: 0, backgroundColor: '#f9f9f9' }}>
                <View style={{ flex: 1 }}>
                  <Image source={{ uri: item.img }} style={{ width: 120, height: 132, marginLeft: 5, marginTop: 15 }} />
                </View>
                <View style={{ flex: 2 }}>
                  <View style={{ flexDirection: 'row', flex: 1, margin: 10 }}>
                    <Text style={{ fontSize: 18, color: '#000' }}>{item.title}</Text>
                    <View style={{ alignItems: 'flex-end', flex: 1 }}>
                      <Text style={{ marginRight: 10, fontSize: 18, color: '#000', fontWeight: 'bold' }}>€{item.price.toFixed(2)}</Text>
                    </View>

                  </View>

                  <View style={{ flexDirection: 'row', flex: 1, marginBottom: 5 }}>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 18, color: '#000', margin: 10, marginTop: 20 }}>Quantity</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10, marginTop: 20 }}>
                      <TouchableOpacity onPress={() => { this._remove(index) }}>
                        <Icon name="minuscircleo" type='AntDesign' style={{ fontSize: 25 }} />
                      </TouchableOpacity>
                      <Text style={{ fontSize: 18, marginLeft: 10, marginRight: 10 }}>{item.initial_quantity}</Text>
                      <TouchableOpacity onPress={() => { this._add(index) }}>
                        <Icon name="pluscircleo" type='AntDesign' style={{ fontSize: 25 }} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 5, marginTop: -5 }}>
                    <View style={{ borderColor: '#000', borderWidth: 1, flex: 2, height: 25, margin: 10, backgroundColor: '#f1f1f1', color: '#000' }}>
                      <View>
                        <TouchableOpacity onPress={() => { this.openModal(); this.setState({ addFunds: item.variants }); this.setState({ tempData: item.variants }); this.setState({ addIndex: index }) }}>
                          {
                            this.state.selectedVariantOptions[item.title.replace(" ", "_")] != undefined ? <Text>{this.state.selectedVariantOptions[item.title.replace(" ", "_")]}</Text> :
                              <View>{item.variants.map((list, key) => (
                                key === 0 ? (
                                  <View><Text key={key}>{this._customText2(list)}</Text></View>
                                ) : null
                              ))}</View>
                          }
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start', color: '#000', marginBottom: 10, top: 5 }}>

                      <TouchableOpacity

                        onPress={() => {
                          this._addProductTocart(item)
                        }}

                        style={{
                          justifyContent: 'center',
                          margin: 10
                        }} >
                        <Text style={Styles.addBtn}>Add</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Card>
          ))}

        </ScrollView>
        <TouchableOpacity onPress={() =>

          navigation.navigate('PublicReserve', { item: this.state.item, venueIndex: this.state.venueIndex, ticketPrice: this.state.ticketPrice })
        }>
          <Text style={Styles.doneBtn}>€ {this.extraAndTicketAmount()} <Icon name='arrow-right' style={Styles.doneBtn} type='FontAwesome' /></Text>
        </TouchableOpacity>
      </Modal>
      <Modal
        ref='modal1'
        isOpen={this.state.isOpen}
        onClosed={() =>
          this.setState({
            isOpen: false
          })}
        isDisabled={this.state.isDisabled}
        style={Styles.modalForm}
      >
        <View style={Styles.modalRow}>
          <Icon name='keyboard-arrow-left' type='MaterialIcons' style={Styles.closeIcon} onPress={() => this.refs.modal1.close()} />
          <Text style={Styles.modalDesc}>Confirm Details</Text>
        </View>
        <View>
          <TextInput placeholder='Email Address' style={Styles.inputDesc} />
          <TextInput placeholder='Phone' style={Styles.inputDesc} />
        </View>
        <TouchableOpacity onPress={() => {
          navigation.navigate('PublicReserve', { item: this.state.item, venueIndex: this.state.venueIndex, ticketPrice: this.state.ticketPrice, bite: this.state.total })
        }}
        >
          <Text style={Styles.doneBtn}>Done</Text>
        </TouchableOpacity>
      </Modal>
      {/* add ons modal */}

      <Modal
        isOpen={this.state.isModalOpen}
        onClosed={this.closeModal}
      >
        <View style={{ flex: 1, marginVertical: hp('2%'), marginHorizontal: wp('3%') }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput ref="mycode" placeholder='Search...' placeholderTextColor='#00462d' style={{ borderWidth: 1, borderColor: '#3a3a3a', borderRadius: 6, marginBottom: hp('2%'), width: wp('82%'), paddingHorizontal: wp('2%'), fontSize: 15 }}
              value={this.state.searchText}
              onChangeText={searchText => this._customSearch(searchText)} />
            <View style={{ width: wp('12%'), }}>
              <Button title="Close Modal" onPress={this.closeModal} style={{ width: wp('100%'), backgroundColor: 'transparent', elevation: 0 }}>
                <Icon name='close' type='MaterialIcons' style={{ fontSize: 28, color: '#000' }} />
              </Button>
            </View>
          </View>
          <ScrollView keyboardShouldPersistTaps='handled'>
            {/* Your modal content here */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <View style={{ width: wp('100%') }}>
                {this.state.addFunds.map((list, key) => (

                  <TouchableOpacity key={key} onPress={() => {
                    // this.onValueChange(key + '_' + this.state.addIndex)
                    this.onValueChange(list);
                  }}>
                    <Text style={{ fontSize: 20, borderBottomWidth: 1, borderColor: '#e2e2e2', paddingBottom: hp('2%'), marginBottom: hp('2%') }}>{this._customText(list)}</Text>
                  </TouchableOpacity>
                ))}

              </View>

            </View>
          </ScrollView>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => this.refs.modalBite.open()}>
        <Footer style={Styles.ftrTab}>
          <Text style={Styles.ftrDesc}>Pay ${this.extraAndTicketAmount()}</Text>
        </Footer>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => { NavigationService.navigate('PublicAddons') }}>
        <Footer style={Styles.ftrTab}>
          <Text style={Styles.ftrDesc}>Pay ${this.state.grandTotal}</Text>
        </Footer>
      </TouchableOpacity> */}
    </Container>
  }
}
