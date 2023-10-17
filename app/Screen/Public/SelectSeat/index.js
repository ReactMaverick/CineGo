import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, ScrollView, ImageBackground, FlatList, Dimensions, Alert } from 'react-native'
import { Container, Header, Content, Footer, Icon, Text, View, Card, Picker } from 'native-base'
import NavigationService from '@Service/Navigation'

import Modal from 'react-native-modalbox'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/SelectSeat/Style'
import SeatLayout from './SeatLayout'
import BITE from './Bite'
import { LIST_PRODUCT } from '../../../api/ApiConfig';
const { width: WIDTH } = Dimensions.get('window')
import Spinner from "react-native-loading-spinner-overlay";
export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      isDisabled: false,
      isOpen: false,
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
      isLoading: false,
      products: [],
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
      const grandTotal = seatNo * 150;
      this.setState({ grandTotal });
    } else {
      console.error('Invalid seat number');
    }
    this._getProducts();
  }

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
    var products = this.state.products;
    // console.log(products);
    var arr = value.split('_');
    products[arr[1]].price = products[arr[1]].variants[arr[0]].price;

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
    str = str + " - $" + list.price;
    return str;
  }

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


          {/* <FlatList
            data={this.state.data}
            extraData={
              {
                counter: this.state.counter,
                amount: this.state.amount,
                total: this.state.total
              }
            }
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, separators, index }) => {
              return <View style={Styles.modalRow}>
                <Image source={{ uri: item.image }} style={Styles.biteImg} />
                <View style={Styles.biteDesc}>
                  <Text style={Styles.biteName}>{item.name}</Text>
                  <Text style={Styles.bitePrice}>${item.price}</Text>
                  <View>
                    <View style={Styles.cartcolSpace}>
                      <View style={Styles.priceView}>
                        <TouchableOpacity
                          transparent style={Styles.cartBtn} onPress={() =>
                            this.setState({ counter: { ...this.state.counter, [index]: this.state.counter[index] + 1 } })}
                        >
                          <Icon name='plus' type='Entypo' style={Styles.addBtn} />
                        </TouchableOpacity>
                        <Text style={Styles.cartText}>{this.state.counter[index]}</Text>
                        <TouchableOpacity transparent style={Styles.cartBtn}>
                          <Icon name='minus' type='Entypo' style={Styles.addBtn} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={Styles.biteBtn} onPress={() => {
                    this.setState({ amount: item.price * this.state.counter[index], total: item.price * this.state.counter[index] + this.state.amount })
                    console.log('amt', this.state.total)
                  }}
                >
                  <Text style={Styles.biteAdd}>Add</Text>
                </TouchableOpacity>
              </View>
            }}
          /> */}

          {this.state.products.map((item, index) => (
            <Card style={{ margin: 10, width: WIDTH - 20 }}>
              <View style={{ flexDirection: "row", padding: 5 }}>
                <View style={{ flex: 1 }}>
                  <Image source={{ uri: "https://demo.ticketstake.com/img/default.jpg" }} style={{ width: 120, height: 132 }} />
                </View>
                <View style={{ flex: 2 }}>
                  <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                    <Text style={{ fontSize: 15, color: 'gray' }}>{item.title}</Text>
                    <View style={{ alignItems: 'flex-end', flex: 1 }}>
                      <Text style={{ marginRight: 10, fontSize: 15, color: 'gray', fontWeight: 'bold' }}>${item.price}</Text>
                    </View>

                  </View>

                  <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 15 }}>Options</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>
                      <TouchableOpacity onPress={() => { this._remove(index) }}>
                        <Icon name="minuscircleo" type='AntDesign' style={{ fontSize: 25 }} />
                      </TouchableOpacity>
                      <Text style={{ fontSize: 15, marginLeft: 10, marginRight: 10 }}>{item.initial_quantity}</Text>
                      <TouchableOpacity onPress={() => { this._add(index) }}>
                        <Icon name="pluscircleo" type='AntDesign' style={{ fontSize: 25 }} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>


                    <View style={{ borderColor: '#f2f2f2', borderWidth: 2, flex: 2, height: 50 }}>
                      <Picker
                        note
                        // mode="dropdown"
                        style={{ width: 170, }}
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                      >
                        {item.variants.map((list, key) => (

                          <Picker.Item label={this._customText(list)} value={key + '_' + index} />
                        ))}

                      </Picker>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', marginBottom: 10, top: 5 }}>

                      <TouchableOpacity style={{
                        justifyContent: 'center',
                        margin: 10
                      }} >
                        <Text style={{
                          color: 'rgba(0,0,0,0.7)',
                          fontFamily: 'Montserrat-Regular',
                          fontSize: 12,
                          paddingHorizontal: 10,
                          paddingVertical: 5,
                          borderColor: '#4A90E2',
                          borderWidth: 1,
                          borderRadius: 3
                        }}>Add</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Card>
          ))}

        </ScrollView>
        <TouchableOpacity onPress={() => this.refs.modal1.open()}>
          <Text style={Styles.doneBtn}>Pay $ {this.state.total}</Text>
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
          navigation.navigate('PublicReserve', { ticket: this.state.grandTotal, bite: this.state.total })
        }}
        >
          <Text style={Styles.doneBtn}>Done</Text>
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity onPress={() => this.refs.modalBite.open()}>
        <Footer style={Styles.ftrTab}>
          <Text style={Styles.ftrDesc}>Pay ${this.state.grandTotal}</Text>
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
