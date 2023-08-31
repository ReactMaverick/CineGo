import React, { Component } from 'react';
import { Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  View
} from 'native-base';
import Styles from './Style';
import NavigationService from './../../../Service/Navigation'

import * as MENU from './Menu'
import AsyncStorage from '@react-native-async-storage/async-storage';
const drawerImage = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
import { LOGOUT } from '../../../api/ApiConfig';
class MenuLeft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      isLogedIn: false,
      username: 'Guest'
    }

   
  }
  componentDidMount() {
   
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {

      AsyncStorage.getItem("userData").then((value) => {
        var user_data = JSON.parse(value);
        if (user_data == null) {
          this.setState({ isLogedIn: false });
        } else {
          this.setState({ username: user_data.username });
          this.setState({ isLogedIn: true });
        }
      })

    });

  }


  _logout = async () => {
    AsyncStorage.getItem("userData").then((value) => {
      var user_data = JSON.parse(value);


      fetch(LOGOUT, {
        method: "POST",
        headers: {
          'Authorization': 'Bearer ' + user_data.token,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({ isLogedIn: false });
          AsyncStorage.clear().then(()=>{
            this.renderMenuList = this.renderMenuList.bind(this)
          })
         
          NavigationService.closeDrawer()
        })
        .catch((error) => console.log(error))
        .finally(() => {
          // this.setState({ isLoading: false });
        });
    })

  }
  renderMenuList(menus) {
    return menus.map((menu) => {
      return <TouchableOpacity style={Styles.profileItem} underlayColor='transparent' onPress={() => {


        if (menu.route == "PublicSignOut") {
          this._logout();
        } else {
          NavigationService.closeDrawer()
          NavigationService.navigate(menu.route)
        }
      }}>
        <View style={Styles.navBtn}>
          <View style={Styles.navBtnLeft}>
            <Icon name={menu.icon} type={menu.type || 'FontAwesome'} style={Styles.navBtnIcon} />
          </View>
          <Text style={Styles.navBtnText}>{menu.name}</Text>
        </View>
        {
          menu.types &&
          <Right style={{ flex: 1 }}>
            <Badge>
              <Text
                style={Styles.badgeText}
              >{`${menu.types}`}</Text>
            </Badge>
          </Right>
        }
      </TouchableOpacity>
    })
  }
  render() {
    return (
      <Container>
        <Content
          bounces={false}
          contentContainerStyle={Styles.layout}
          render
        >
          <Image source={require('@Asset/images/loginbg.png')} resizeMode='cover' style={Styles.navImg} />
          <View style={Styles.nav}>
            <View style={Styles.navProfile}>
              <Image style={Styles.navAvatar} source={{ uri: 'https://demo.ticketstake.com/img/default.jpg' }} />
              <Text style={Styles.navName}>{this.state.username}</Text>
            </View>

            <View style={Styles.navMenu}>
              <ScrollView>
                {/* {this.renderMenuList(MENU.Data1)} */}
                {/* <Text style={Styles.navHeader}>Customer</Text> */}
                {this.state.isLogedIn == false ? this.renderMenuList(MENU.Data1) : this.renderMenuList(MENU.Data2)}
              </ScrollView>

            </View>

          </View>
        </Content>
      </Container>
    )
  }
}

export default MenuLeft