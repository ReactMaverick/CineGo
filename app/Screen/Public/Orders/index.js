import React from 'react'
import { StatusBar, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Icon, Text, View, Button } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Orders/Style'
import { VIEW_ORDERS } from '../../../api/ApiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      displayData:true
    }
  }
  componentDidMount() {
    const { navigation } = this.props;
    /*
	this.focusListener = navigation.addListener('didFocus', () => {
      AsyncStorage.getItem('userData').then((value) => {
        var user_data = JSON.parse(value);
        this._getOrders(user_data);
      })
    });
	*/
	AsyncStorage.getItem('userData').then((value) => {
		var user_data = JSON.parse(value);
		this._getOrders(user_data);
	})
  }


  _getOrders = async (userData) => {

    fetch(VIEW_ORDERS, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + userData.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }

    })
      .then((response) => response.json())
      .then((responseJson) => {
       // console.log(responseJson);
        if (responseJson.orders.length != 0) {
          this.setState({ orders: responseJson.orders });
          this.setState({displayData:true});
        }else{
          this.setState({displayData:false});
        }
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
          <View style={Style.navLeft}>
            <TouchableOpacity onPress={() => {
              navigation.openDrawer()
            }}
            >
              <Image source={require('@Asset/images/menu.png')} />
            </TouchableOpacity>
          </View>
          <View style={Style.navMiddle}>
            <Text style={Style.navMiddleText}>Orders</Text>
          </View>
          <View style={Style.navRight} />
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <View style={Styles.bgGrey}>

{this.state.displayData==true ?
          this.state.orders.map((item, key) => (
            <TouchableOpacity style={Styles.movieDetails} onPress={() => {
              navigation.navigate('PublicOrder', { order_id: item.id })
            }}>
              <View style={Styles.movieList}>
                <View style={Styles.confirmRow}>
                  <Text style={Styles.movieView}>Reference:</Text>
                  <Text style={Styles.movieRef}>{item.ref}</Text>
                  <Text style={Styles.movieView}>Tickets:</Text>
                  <Text style={Styles.movieView}>{item.total_tickets}</Text>
                  <Text style={Styles.movieView}>Extras:</Text>
                  <Text style={Styles.movieView}>{item.total_products}</Text>
                </View>
                <View style={Styles.confirmRow}>
                  <Text style={Styles.movieView}>Date:</Text>
                  <Text style={Styles.movieView}>{item.created_at.substring(0, 10)}</Text>
                  <Text style={Styles.movieView}>Time:</Text>
                  <Text style={Styles.movieView}>{item.created_at.substring(11)}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))

        : <View style={Styles.movieList}>
        <View style={Styles.confirmRow}>
          <Text style={Styles.movieView}>No order found</Text>         
        </View></View>}
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
