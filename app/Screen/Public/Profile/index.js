import React from 'react'
import { StatusBar, TouchableOpacity, Image, ImageBackground, TextInput, Dimensions } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, View, Card } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Profile/Style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VIEW_PROFILE } from '../../../api/ApiConfig';
const { width: WIDTH } = Dimensions.get('window')
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      userDetails: {},
      f_name: '',
      email: ''

    }
  }
  componentDidMount() {
    AsyncStorage.getItem('userData').then((value) => {
      var user_data = JSON.parse(value);
      this._getUserData(user_data);
    })
  }

  _getUserData = async (userData) => {
    await this.setState({ isLoading: true });
    fetch(VIEW_PROFILE + "/" + userData.id, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + userData.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);

        this.setState({ f_name: responseJson.user.name });
        this.setState({ email: responseJson.user.email });
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
        <StatusBar backgroundColor='#9013FE' animated barStyle='light-content' />
        <ImageBackground source={require('@Asset/images/menubg.png')} style={Style.navigationBar}>
          <TouchableOpacity
            style={Styles.profileRight} onPress={() => {
              navigation.navigate('PublicHome')
            }}
          >
            {/* <Image source={{ uri: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={Styles.profileImg} /> */}
            <Icon name='keyboard-arrow-left' type='MaterialIcons' style={Style.navLeftIcon} />
            <Text style={Styles.profileNum}>Home</Text>
          </TouchableOpacity>
          <View style={Style.navMiddle} />
          <TouchableOpacity
            style={Style.navRight} onPress={() => {
              navigation.navigate('PublicEditProfile')
            }}
          >

            <Icon name='edit' type='MaterialIcons' style={Style.navRightIcon} />
          </TouchableOpacity>
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <Card >
          <View style={Styles.profile}>

            <View style={{ flexDirection: 'row', flex: 1, margin: 10 }}>
              <View style={{ flex: 1 }}>
                <Image source={{ uri: "https://www.ticketsat.com/images/default.jpg" }} style={{ width: 100, height: 100, borderRadius: 50 }} />
              </View>
              <View style={{ flex: 2, justifyContent: 'center' }}>
                <Text style={{ color: 'gray', fontFamily: 'Montserrat-SemiBold', fontSize: 12 }}>Name</Text>
                <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 12, fontWeight: 'bold' }}>{this.state.f_name}</Text>

              </View>
            </View>

            <View style={{ flexDirection: 'row', flex: 1, margin: 10 }}>
              <View style={{ width: 70, justifyContent: 'center' }}>
                <Icon name="email" type="MaterialCommunityIcons" style={{ fontSize: 40, color: 'gray' }} />
              </View>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'gray', fontFamily: 'Montserrat-SemiBold', fontSize: 12 }}>Email</Text>
                <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 12, fontWeight: 'bold' }}>{this.state.email}</Text>

              </View>
            </View>


            {/* <View style={Styles.profileMain}> */}
            {/* <TextInput placeholder='Name' 
            style={Styles.textInputDesc} 
            onChangeText={(f_name) => this.setState({ f_name })}
                value={this.state.f_name} /> */}

            {/* </View> */}
            {/* <TextInput placeholder='Mobile Number' style={Styles.textInputNum} /> */}

            {/* <TextInput placeholder='Email' 
          style={Styles.textInputDesc} 
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
          keyboardType={'email-address'}
          editable = {false}
          /> */}
            {/* 
<TextInput 
                style={Styles.textInputDesc} 
                placeholder='********' 
                placeholderTextColor='#666'
                secureTextEntry={true} 
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
                /> */}
          </View>
        </Card>

        <TouchableOpacity 
        onPress={()=>{ navigation.navigate('PublicChangePassword'); }}
              style={{backgroundColor:'#9013FE',height:60,width:WIDTH-20,alignItems:"center",margin:10,flexDirection:"row"}} 
            >
               <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{ fontSize: 40, color: '#fff' }} />
              <Text style={{color:'#fff',fontFamily:'Montserrat-SemiBold'}}>Change Password</Text>
        </TouchableOpacity>


        {/* <View style={Styles.profile}>
          <TouchableOpacity
            style={Styles.profileMain}onPress={() => {
              NavigationService.navigate('PublicSelectCity')
            }}
          >
            <Text style={Styles.profileLocation}>You are in New York</Text>
            <TouchableOpacity>
              <Text style={Styles.profileChange}>Change</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <Text style={Styles.profileDesc} onPress={() => { NavigationService.navigate('PublicSettings') }}>Settings</Text>
          <Text style={Styles.profileDesc}>Notifications</Text>
        </View> */}
      </Content>
      {/* <View style={Style.footerBg}>
        <View style={Style.fTab}>
          <TouchableOpacity
            style={Style.fIcons} onPress={() => {
              NavigationService.navigate('PublicHome')
            }}
          >
            <Icon name='home' type='FontAwesome' style={Style.iconInactive} />
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.fIcons} onPress={() => {
              NavigationService.navigate('PublicSearch')
            }}
          >
            <Icon name='search' type='MaterialIcons' style={Style.iconInactive} />

          </TouchableOpacity>
          <TouchableOpacity
            style={Style.fIcons} onPress={() => {
              NavigationService.navigate('PublicBooking')
            }}
          >
            <Icon name='headphones' type='MaterialCommunityIcons' style={Style.iconInactive} />
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.fIcons} onPress={() => {
              NavigationService.navigate('PublicBuzz')
            }}
          >
            <Icon name='flame' type='Octicons' style={Style.iconInactive} />
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.fIcons} onPress={() => {
              NavigationService.navigate('PublicProfile')
            }}
          >
            <Icon name='user-o' type='FontAwesome' style={Style.iconActive} />
          </TouchableOpacity>
        </View>
      </View>
          
           */}
    </Container>
  }
}
