import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, ScrollView, ImageBackground, FlatList, Dimensions, Alert } from 'react-native'
import { Container, Header, Content, Footer, Icon, Text, View, Card, Picker } from 'native-base'

import Modal from 'react-native-modalbox'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/SelectSeat/Style'
//import SeatLayout from './SeatLayout'
//import BITE from './Bite'
import { LIST_PRODUCT,CART_ADD,CART_VIEW } from '../../../api/ApiConfig';
const { width: WIDTH } = Dimensions.get('window')
import Spinner from "react-native-loading-spinner-overlay";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisabled: false,
      isOpen: false,
      isSelect: false,
      amount: 1,
      grandTotal: '',
      user_data: {},
      total: '',
      category: '',
      counter: {
        0: 1,
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 1,
        6: 1
      },
      isLoading: false,
      products: [],
      total_amount:0,
      item: this.props.route.params.item,
      venueIndex: this.props.route.params.venueIndex, 
      seatNo: this.props.route.params.item.quantity,  
      ticketDetails: this.props.route.params.ticketPrice,
      ticketPrice:[],
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
        totalTicket = totalTicket+ticketPrice[i].quantity;
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
    this._getProducts();
    console.log("____TICKET #___"+totalTicket);
    console.log("____SEATS PRICE ___"+ticketTotalPrice);
    this.setState({ total_amount: ticketTotalPrice });
  }

  // componentDidMount() {

  // }

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
        }
       // console.log("products",product);
        this.setState({ products: product });

      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }


  _setEvent = async (item) => {
    this.setState({ events: this.state.eventCategory[item] });
    this.setState({ selectedItem: item });
  }
 
  onValueChange(value) {
    this.setState({
      selected: value
    });
    var products = this.state.products;
   // console.log("pro1==>>",products);
    var arr = value.split('_');
    products[arr[1]].price = products[arr[1]].variants[arr[0]].price;
    products[arr[1]].variants_id = products[arr[1]].variants[arr[0]].options[0].variant_id;
    
    this.setState({ products: products });
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
        // console.log("responseJson", responseJson);
        var total_amount = 0;
        if (responseJson['Items in Cart'] != undefined) {
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
  render() {
    const { navigation } = this.props;
    let layoutType = 0;
    return <Container>
    <Header style={Style.navigation}>
      <StatusBar backgroundColor='#00462d' animated barStyle='light-content' />
      <ImageBackground source={require('@Asset/images/menubg.png')} style={Style.navigationBar}>
        <TouchableOpacity
          style={Styles.navLeft} onPress={() => {
            navigation.navigate('PublicBooking')
          }}
        >
          <Icon name='arrow-left' type='MaterialCommunityIcons' style={Styles.navLeftIcon} />
          <View style={Styles.movieList}>
            <Text style={Styles.movieName}>{this.state.item.name}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.navRight} onPress={() => {
            navigation.navigate('PublicHome')
          }}
        >
          <Text style={Styles.rightDesc}>{this.state.totalTicket} Tickets</Text>
        </TouchableOpacity>
      </ImageBackground>
    </Header>

    <Content contentContainerStyle={Style.layoutDefault}>
      <View style={Styles.calender}>
      <Text style={Styles.venueDesc}>{this.state.venueName}</Text>
      </View>

      <View style={Styles.bookingTime}>
        <Text style={Styles.showTime}>{this.state.venueIndex.start_time+"-"+this.state.venueIndex.end_time}</Text>
      </View>

      <View style={Styles.seatingPlan}>
      <Text style={Styles.seatingPlanDesc}>Seating plan here</Text>
      </View>
      {
      /*<View style={Styles.bookSeat}>
        <ScrollView horizontal>
          <SeatLayout layoutType={layoutType} navigation={this.props.navigation} />
        </ScrollView>
        </View>
      */
      }
    

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
        <Text style={Styles.paymentMethods}>Extras @ {this.state.item.name} in {this.state.venueName}</Text>
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
                      <Text style={{ fontSize: 18, color: '#000', margin: 10, marginTop: 20 }}>Options</Text>
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

                  <View style={{ flex: 1, flexDirection: 'row', marginBottom: 5, marginTop: -5 }}>


                    <View style={{ borderColor: '#000', borderWidth: 1, flex: 2, height: 40, margin: 10, backgroundColor: '#f1f1f1',color: '#000' }}>
                      <Picker
                        note
                        // mode="dropdown"
                        style={{ width: 180, color: '#000', marginTop: -5}}
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                      >
                        {item.variants.map((list, key) => (

                          <Picker.Item label={this._customText(list)} value={key + '_' + index} />
                        ))}

                      </Picker>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', color: '#000', marginBottom: 10, top: 5 }}>

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
      <TouchableOpacity onPress={() => {
        navigation.navigate('PublicReserve', { item: this.state.item, venueIndex: this.state.venueIndex, ticketPrice: this.state.ticketPrice })
      }}
      >
        <Text style={Styles.doneBtn}>€ {this.state.new_total_amount} <Icon name='arrow-right' style={Styles.doneBtn} type='FontAwesome' /></Text>
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
        navigation.navigate('PublicReserve', { item: this.state.item, venueIndex: this.state.venueIndex, ticketPrice: this.state.ticketPrice })
      }}
      >
        <Text style={Styles.doneBtn}>Done</Text>
      </TouchableOpacity>
    </Modal>
    <TouchableOpacity onPress={() => this.refs.modalBite.open()}>
      <Footer style={Styles.ftrTab}>
        <Text style={Styles.ftrDesc}>€ {this.state.new_total_amount} <Icon name='arrow-right' style={Styles.doneBtn} type='FontAwesome' /></Text>
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