import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image,Alert } from 'react-native'
import { Container, Header, Content, Icon, Text, Radio, View } from 'native-base'
import Spinner from "react-native-loading-spinner-overlay";
import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/ChangePassword/Style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VIEW_PROFILE,CHANGE_PASSWORD } from '../../../api/ApiConfig';
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      userDetails: {},
      f_name: '',
      email: '',
      password:'',
      conf_password:'',
      old_password:''

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

  _updatePassword = async() =>{

          
    

    if (this.state.old_password == '') {
        Alert.alert(
            'Alert',
            'Old Password cannot be empty.',
            [
                {
                    text: 'OK',
                    onPress: () => this.setState({ isLoading: false })
                },
            ],
            { cancelable: false },
        );

    } else if (this.state.password == '') {
        Alert.alert(
            'Alert',
            'New Password cannot be empty.',
            [
                {
                    text: 'OK',
                    onPress: () => this.setState({ isLoading: false })
                },
            ],
            { cancelable: false },
        );

    }else if (this.state.conf_password == '') {
      Alert.alert(
          'Alert',
          'Confirm Password cannot be empty.',
          [
              {
                  text: 'OK',
                  onPress: () => this.setState({ isLoading: false })
              },
          ],
          { cancelable: false },
      );

  }else if (this.state.conf_password != this.state.password) {
    Alert.alert(
        'Alert',
        'Confirm Password should match with new password.',
        [
            {
                text: 'OK',
                onPress: () => this.setState({ isLoading: false })
            },
        ],
        { cancelable: false },
    );

}
     else {
      await this.setState({ isLoading: true })      
      let details = {
        'email': this.state.email,        
        'old_password': this.state.old_password,
        'new_password': this.state.password,
        'confirm_password': this.state.conf_password          
    };

    
      let formBody = [];
      for (let property in details) {
          let encodedKey = encodeURIComponent(property);
          let encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

        fetch(CHANGE_PASSWORD, {
            method: "POST",
            headers: {
              'Authorization': 'Bearer token',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        })
            .then((response) => response.json())
            .then((responseJson) => { 
              console.log(responseJson);
              if(responseJson.success==true){
               // AsyncStorage.setItem('userData',JSON.stringify(responseJson.data));
                Alert.alert(
                  'Alert',
                  responseJson.message,
                  [
                      {
                          text: 'OK',
                          onPress: () => navigation.navigate('PublicHome')
                      },
                  ],
                  { cancelable: false },
              );
               
              }else{
                  Alert.alert("Warning",responseJson.message);
              }
              
                
            })
            .catch((error) => console.log( error))
            .finally(() => {
                this.setState({ isLoading: false });
            });

    }
   
  }
  render() {
    const { navigation } = this.props;
    return <Container>
      <Header style={Style.navigation}>
        <Spinner visible={this.state.isLoading} />
        <StatusBar backgroundColor='#00462d' animated barStyle='light-content' />
        <View style={Style.navigationBar}>
          <TouchableOpacity
            style={Styles.profileLeft} onPress={() => {
              navigation.navigate('PublicProfile')
            }}
          >
            <Icon name='keyboard-arrow-left' type='MaterialIcons' style={Style.navLeftIcon} />
            <Text style={Styles.profileNum}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.navRight} onPress={() => {
              this._updatePassword()
            //  navigation.navigate('PublicHome')
            }}
          >
            <Text style={Styles.rightDesc}>Update Password</Text>
          </TouchableOpacity>
        </View>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        {/* <View style={Styles.profileBg}>
          <Image source={{ uri: 'https://www.w3schools.com/w3images/avatar6.png' }} style={Styles.profileImg} />
          <Text style={Styles.profileDesc}>Edit Photo</Text>
        </View> */}
        <View style={Styles.profile}>
          {/* <View style={Styles.profileMain}> */}
          <TextInput placeholder='Name'
            editable={false}
            style={Styles.textInputDesc}
            onChangeText={(f_name) => this.setState({ f_name })}
            value={this.state.f_name} />

          {/* </View> */}
          {/* <TextInput placeholder='Mobile Number' style={Styles.textInputNum} /> */}

          <TextInput placeholder='Email'
            style={Styles.textInputDesc}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            keyboardType={'email-address'}
            editable={false}
          />

          <TextInput
            style={Styles.textInputDesc}
            placeholder='Old Password'
            placeholderTextColor='#d1d1d1'
            secureTextEntry={true}
            onChangeText={(old_password) => this.setState({ old_password })}
            value={this.state.old_password}
          />

          <TextInput
            style={Styles.textInputDesc}
            placeholder='New Password'
            placeholderTextColor='#d1d1d1'
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />


          <TextInput
            style={Styles.textInputDesc}
            placeholder='Confirm Password'
            placeholderTextColor='#d1d1d1'
            secureTextEntry={true}
            onChangeText={(conf_password) => this.setState({ conf_password })}
            value={this.state.conf_password}
          />
        </View>
        {/* <View style={Styles.radioBtn}>
          <View style={Styles.radioBtn}>
            <Radio selected color='#FF0000' />
            <Text style={Styles.radioDesc}>Male</Text>
          </View>
          <View style={Styles.radioBtn}>
            <Radio selected={false} selectedColor='#5cb85c' />
            <Text style={Styles.radioDesc}>Female</Text>
          </View>
        </View> */}
        {/* <View>
          <TextInput placeholder='Birthday' style={Styles.textInputNum} />
          <Text style={Styles.prfDesc}>Married?</Text>
        </View> */}
        {/* <View style={Styles.radioBtn}>
          <View style={Styles.radioBtn}>
            <Radio selected color='#FF0000' />
            <Text style={Styles.radioDesc}>yes</Text>
          </View>
          <View style={Styles.radioBtn}>
            <Radio selected={false} selectedColor='#5cb85c' />
            <Text style={Styles.radioDesc}>No</Text>
          </View>
        </View> */}
      </Content>
    </Container>
  }
}
