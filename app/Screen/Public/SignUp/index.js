import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image,AsyncStorage,Alert } from 'react-native'
import { Container, Content, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/SignUp/Style'
import {SIGNUP_API} from '../../../api/ApiConfig';
//import Spinner from "react-native-loading-spinner-overlay";
export default class extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isLoading:false,
      user_name:'',
      email:'',
      password:'',
      confpassword:'',
      f_name:''
    }
    
  }
  _signUp = async()=>{

    
    await this.setState({ isLoading: true })

    if (this.state.f_name == '') {
      Alert.alert(
          'Alert',
          'Name cannot be empty.',
          [
              {
                  text: 'OK',
                  onPress: () => this.setState({ isLoading: false })
              },
          ],
          { cancelable: false },
      );

  }else if (this.state.user_name == '') {
        Alert.alert(
            'Alert',
            'Name cannot be empty.',
            [
                {
                    text: 'OK',
                    onPress: () => this.setState({ isLoading: false })
                },
            ],
            { cancelable: false },
        );

    } else if (this.state.email == '') {
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

    } else if (this.state.password != this.state.confpassword) {
        Alert.alert(
            'Alert',
            'Confirm password do not match with password',
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
        'username': this.state.user_name,
        'password': this.state.password,
        'c_password': this.state.confpassword,
        'name': this.state.f_name
    };

    
      let formBody = [];
      for (let property in details) {
          let encodedKey = encodeURIComponent(property);
          let encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

        fetch(SIGNUP_API, {
            method: "POST",
            headers: {
              'Authorization': 'Bearer token',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        })
            .then((response) => response.json())
            .then((responseJson) => { 
              //console.log(responseJson);
              if(responseJson.success==true){
                //NavigationService.navigate('PublicVerifyOtp')
                Alert.alert(
                  'Alert',
                  responseJson.message,
                  [
                      {
                          text: 'OK',
                          onPress: () => NavigationService.navigate('PublicSignIn')
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
    return <Container style={Style.bgMain}>
      <StatusBar backgroundColor='#151515' animated barStyle='light-content' />

      <Content contentContainerStyle={Style.layoutCenter}>
        <Image source={require('@Asset/images/loginbg.png')} imageStyle='cover' style={Styles.bg} />
        <View style={Styles.formLayout}>
          <View style={Styles.form}>
            <View>
              <Text style={Styles.title}>cinegorntheme</Text>
              <Text style={Styles.desc}>Sign Up</Text>
            </View>
            <View style={Styles.fRow}>
              <Text style={Styles.label}>Name</Text>
              <View style={Styles.formRow}>
                <TextInput 
                style={Styles.inputText} 
                placeholder='johndoe' 
                placeholderTextColor='#666'
                onChangeText={(f_name) => this.setState({ f_name })}
                value={this.state.f_name}
                />
                <Icon name='user-o' type='FontAwesome' style={Styles.formIcon} />
              </View>
            </View>

            <View style={Styles.fRow}>
              <Text style={Styles.label}>User Name</Text>
              <View style={Styles.formRow}>
                <TextInput 
                style={Styles.inputText} 
                placeholder='User Name' 
                placeholderTextColor='#666'
                onChangeText={(user_name) => this.setState({ user_name })}
                value={this.state.user_name}
                />
                <Icon name='user-o' type='FontAwesome' style={Styles.formIcon} />
              </View>
            </View>

            <View style={Styles.fRow}>
              <Text style={Styles.label}>EMail ID</Text>
              <View style={Styles.formRow}>
                <TextInput 
                  style={Styles.inputText} 
                  placeholder='johndoe@gmail.com' 
                  placeholderTextColor='#666'
                  onChangeText={(email) => this.setState({ email })}
                  value={this.state.email}
                  keyboardType={'email-address'}
                   />
                <Icon name='mail-outline' type='MaterialIcons' style={Styles.formIcon} />
              </View>
            </View>
            <View style={Styles.fRow}>
              <Text style={Styles.label}>Password</Text>
              <View style={Styles.formRow}>
                <TextInput 
                style={Styles.inputText} 
                placeholder='********' 
                placeholderTextColor='#666'
                secureTextEntry={true} 
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
                />
                <Icon name='lock-outline' type='MaterialIcons' style={Styles.formIcon} />
              </View>
            </View>
            <View style={Styles.fRow}>
              <Text style={Styles.label}>Retype Password</Text>
              <View style={Styles.formRow}>
                <TextInput 
                style={Styles.inputText} 
                placeholder='********' 
                secureTextEntry={true} 
                placeholderTextColor='#666'
                onChangeText={(confpassword) => this.setState({ confpassword })}
                value={this.state.confpassword}
                />
                <Icon name='lock-outline' type='MaterialIcons' style={Styles.formIcon} />
              </View>
            </View>
          </View>
          <View style={Styles.SignIn}>
           

          <TouchableOpacity
              style={Styles.SignInBtn} onPress={() => {
               this._signUp()
              }}
            >
              <Text style={Styles.SignInBtnText}>SignUp</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              NavigationService.navigate('PublicSignIn')
            }}
            >
              <Text style={Styles.account}>Already have an account? SignIn</Text>
            </TouchableOpacity>
          </View>
        </View>

      </Content>
    </Container>
  }
}
