import React from 'react'
import { StatusBar, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Icon, Text, View, Button } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Order/Style'
import { VIEW_ORDER } from '../../../api/ApiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
const urladdr = 'https://'
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      order_id: this.props.route.params.order_id,
      urladdress: urladdr,
      order: {},
      order_details: [],
      extra :[],
      orderDetailsObject:{}
    }
  }
  componentDidMount() {
    AsyncStorage.getItem('userData').then((value) => {
      var user_data = JSON.parse(value);
      this._getOrder(user_data, this.state.order_id);
    })
  }


  _getOrder = async (userData, order_id) => {

    fetch(VIEW_ORDER + "/" + order_id, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + userData.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }

    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({ order: responseJson.order[0] });
        this.setState({ order_details: responseJson.order_details });
        this.setState({ orderDetailsObject: responseJson.order_details[0] });
        
        this.setState({ extra: JSON.parse(responseJson.order[0].purchased) });
        var url = 'https://chart.googleapis.com/chart?chs=400x400&cht=qr&chl='+responseJson.order[0].ref;
        this.setState({ urladdress: url });

      })
      .catch((error) => console.log(error))
      .finally(() => {

      });
  }

  render() {    
    const { navigation } = this.props;
	return <Container>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#00462d' animated barStyle='light-content' />

        <ImageBackground source={require('@Asset/images/menubg.png')} style={Style.navigationBar}>
          <View style={Styles.navigation}>
            <Icon name='keyboard-arrow-left' type='MaterialIcons' style={Styles.navLeftIcon} onPress={() => {
              navigation.navigate('PublicOrders')
            }} />

          </View>
          <View style={Style.navMiddle}>
            <Text style={Style.navMiddleText}>Order</Text>
          </View>
          <View style={Style.navRight} />
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <View style={Styles.bgGrey}>

          <View style={Styles.movieList}>
            <TouchableOpacity style={Styles.profileRight}>
              <Text style={Styles.moviePlay}>Order Reference</Text> 
              <Text style={Styles.movieView}>{this.state.order.ref}</Text>
              <Image source={{ uri: this.state.urladdress }} style={Styles.profileImg} />
            </TouchableOpacity>
            <View style={Styles.movieList}>
          <Text style={Styles.moviePlay}>Event Details</Text>
          </View>
          <View style={Styles.confirmRow}>
              <Text style={Styles.movieView}>Event:</Text>
              <Text style={Styles.movieView}>{this.state.orderDetailsObject.event}</Text>
            </View>
            <View style={Styles.confirmRow}>
              <Text style={Styles.movieView}>Venue:</Text>
              <Text style={Styles.movieView}>{this.state.orderDetailsObject.venue}</Text>
            </View>
            <View style={Styles.confirmRow}>
              <Text style={Styles.movieView}>Time:</Text>
              <Text style={Styles.movieView}>{this.state.orderDetailsObject.start_time+"-"+this.state.orderDetailsObject.end_time}</Text>
            </View>
            <View style={Styles.confirmRow}>
              <Text style={Styles.movieView}>Amount Paid:</Text>
              <Text style={Styles.movieView}>{this.state.order.total}</Text>
            </View>

           
          </View>

          <View style={Styles.movieList}>
          <Text style={Styles.moviePlay}>Tickets</Text>
          </View>
          
          <View style={Styles.movieList}>
            {this.state.order_details.map((item, index) => (
          
            <View style={Styles.confirmRow}>
              <Text style={Styles.movieView}>{item.type} x {item.quantity}</Text>
              <Text style={Styles.movieView}>{item.sub_total}</Text>
            </View>
           

            ))}
          </View>

          <View style={Styles.movieList}>
          <Text style={Styles.moviePlay}>Extras</Text>
          </View>
          
          <View style={Styles.movieList}>
            {this.state.extra.map((item, index) => (
          
            <View style={Styles.confirmRow}>
              <Text style={Styles.movieView}>{item.Name} x {item.Quantity}</Text>
              <Text style={Styles.movieView}>$ {item.price}</Text>
            </View>
           

            ))}
          </View>
          <View style={{ flexDirection: 'row', flex: 1, height: 20 }}></View>

        </View>

      </Content >
      <View style={Style.footerBg}>
        <View style={Style.fTab}>
          <TouchableOpacity
            style={Style.fIcons} onPress={() => {
              navigation.navigate('PublicHome')
            }}
          >
            <Icon name='home' type='FontAwesome' style={Style.iconInactive} />
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.fIcons} onPress={() => {
              navigation.navigate('PublicEvents')
            }}
          >
            <Icon name='event' type='MaterialIcons' style={Style.iconInactive} />

          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            AsyncStorage.getItem("userData").then((value) => {
                var user_data = JSON.parse(value);
                if (user_data == null) {
                    navigation.navigate('PublicSignIn')
                } else {
                  navigation.navigate('PublicBalances')
                }
            })
          }}>
            <Icon name='money' type='FontAwesome' style={Style.iconInactive} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            AsyncStorage.getItem("userData").then((value) => {
                var user_data = JSON.parse(value);
                if (user_data == null) {
                    navigation.navigate('PublicSignIn')
                } else {
                  navigation.navigate('PublicOrders')
                }
            })
          }}>
            <Icon name='shopping-basket' type='FontAwesome' style={Style.iconActive} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            AsyncStorage.getItem("userData").then((value) => {
                var user_data = JSON.parse(value);
                if (user_data == null) {
                    navigation.navigate('PublicSignIn')
                } else {
                  navigation.navigate('PublicProfile')
                }
            })
          }}>
            <Icon name='user-o' type='FontAwesome' style={Style.iconInactive} />
          </TouchableOpacity>
        </View>
      </View>
    </Container >
  }
}
