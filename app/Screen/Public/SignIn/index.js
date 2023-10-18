import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image,Alert } from 'react-native'
import { Container, Content, Icon, Text, View } from 'native-base'
import Spinner from "react-native-loading-spinner-overlay";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/SignIn/Style'
import {SIGNIN_API} from '../../../api/ApiConfig';
export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      isLoading:false
    }
  }
  _loginCheck = async () =>{
          
    await this.setState({ isLoading: true })

    if (this.state.email == '') {
        Alert.alert(
            'Alert',
            'Email cannot be empty.',
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
            'Password cannot be empty.',
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
             
      let details = {
        'email': this.state.email,        
        'password': this.state.password        
    };

    
      let formBody = [];
      for (let property in details) {
          let encodedKey = encodeURIComponent(property);
          let encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

        fetch(SIGNIN_API, {
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
                AsyncStorage.setItem('userData',JSON.stringify(responseJson.data));
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
  render () {
    const { navigation } = this.props;
    return <Container style={Style.bgMain}>
      <StatusBar backgroundColor='#151515' animated barStyle='light-content' />
      <Spinner visible={this.state.isLoading} />
      <Content contentContainerStyle={Style.layoutCenter}>
        <Image source={require('@Asset/images/loginbg.png')} imageStyle='cover' style={Styles.bg} />
        <View style={Styles.formLayout}>
          <View style={Styles.form}>
            <View>
              <Text style={Styles.title}>cinegorntheme</Text>
              <Text style={Styles.desc}>Sign In</Text>
            </View>
            <View style={Styles.fRow}>
              <Text style={Styles.label}>Your Email</Text>
              <View style={Styles.formRow}>
                <TextInput style={Styles.inputText} placeholder='johndoe@gmail.com' placeholderTextColor='#999'  
                onChangeText={(email) => this.setState({ email })}
                                value={this.state.email}
                                keyboardType={'email-address'} />
                <Icon name='mail-outline' type='MaterialIcons' style={Styles.formIcon} />
              </View>
            </View>
            <View style={Styles.fRow}>
              <Text style={Styles.label}>Your Password</Text>
              <View style={Styles.formRow}>
                <TextInput style={Styles.inputText} 
                 secureTextEntry={true} 
                 placeholder='********' 
                 placeholderTextColor='#999'
                 onChangeText={(password) => this.setState({ password })}
                                value={this.state.password} />
                <Icon name='lock-outline' type='MaterialIcons' style={Styles.formIcon} />
              </View>
            </View>
            <Text style={Styles.forgot} onPress={() => { navigation.navigate('PublicForgotPswd') }}>Forgot your password?</Text>
          </View>
          <View style={Styles.SignIn}>
            <TouchableOpacity
              style={Styles.SignInBtn} onPress={() => {
               this._loginCheck()
              }}
            >
              <Text style={Styles.SignInBtnText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate('PublicSignUp')
            }}
            >
              <Text style={Styles.account}>Don't have an account? SignUp</Text>
            </TouchableOpacity>
          </View>
          <Text style={Styles.or}>OR</Text>
          <View style={Styles.smn}>
            <TouchableOpacity style={[Styles.smnBtn, Styles.smnFacebook]}>
              <Icon name='facebook' type='FontAwesome' style={Styles.smnIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={[Styles.smnBtn, Styles.smnTwitter]}>
              <Icon name='twitter' type='FontAwesome' style={Styles.smnIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={[Styles.smnBtn, Styles.smnGooglePlus]}>
              <Icon name='google-plus' type='FontAwesome' style={Styles.smnIcon} />
            </TouchableOpacity>
          </View>
        </View>

      </Content>
           </Container>
  }
}
