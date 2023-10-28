import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image } from 'react-native'
import { Container, Content, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Style from '@Theme/Style'
import Styles from '@Screen/Public/VerifyOtp/Style'
import { CHECK_2FA_CODE } from '../../../api/ApiConfig';

export default class extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      nameError: false,
      checkCode: false,
      code: '',
      user_data: {},
    }
  }
  
  componentDidMount() {

    // const { navigation } = this.props;
    // this.focusListener = navigation.addListener('didFocus', () => {
      
    //   if(this.state.timeslot_id!="" && this.state.user_data.id!=undefined){
    //     this._release();
    //   }
     
    // });

    AsyncStorage.getItem('userDataTemp').then((value) => {
      var user_data = JSON.parse(value);
      this.setState({ user_data: user_data });
    })
    

  }
  _check2FACode = async (suppcode) => {
    await this.setState({ isLoading: true });    
    const { navigation } = this.props;
    if (suppcode!='') {
      fetch(CHECK_2FA_CODE+ '/' + suppcode, {
        method: "POST",
        headers: {
          'Authorization': 'Bearer ' + this.state.user_data.token,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log("2FA___2FA___2FA___2FA___2FA___2FA___2FA___2FA___2FA___",responseJson.message);
        if (responseJson.message=='2fa code is valid') {             
          this.setState(() => ({ nameError: responseJson.message}));
          setTimeout(() => {
            AsyncStorage.setItem('userData', JSON.stringify(this.state.user_data))
            navigation.navigate('PublicHome')
          }, 10000)          
        } else {
          this.setState(() => ({ nameError: responseJson.message}));
          this.setState(() => ({ checkCode: false}));          
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
  
  render () {
    const { navigation } = this.props;
	return <Container style={Style.bgMain}>
      <StatusBar backgroundColor='#151515' animated barStyle='light-content' />

      <Content contentContainerStyle={Style.layoutCenter}>
        <Image source={require('@Asset/images/login.jpeg')} imageStyle='cover' style={Styles.bgCover} />
        <View style={Styles.formLayout}>
          <View style={Styles.form}>
            <View style={Style.signMiddleText}>
              <Image source={require('@Asset/images/tats_logo.png')} style={Style.signMiddleLogo}/>
              <Text style={Style.signMiddleTextats}>Ticketsat.com</Text>
            </View>
            <View>
              <Text style={Style.signMiddleDesc}>2FA</Text>
            </View>
            <View style={Style.signMiddleText2}>              
              <Text style={Style.desc}></Text>
            </View>

            <View style={Styles.fRow}>
            <Text style={{color: 'red'}} style={Styles.resend} >{this.state.nameError}</Text>
        </View>
        <View style={Styles.fRow}>
            <TextInput onChangeText={(code) => this.setState({ code })} value={this.state.code} style={Styles.inputText} maxLength={6} placeholder='******' placeholderTextColor='#000' />
        </View>
        <View style={Styles.SignIn}>


            <TouchableOpacity
              style={Styles.sendBtn} onPress={() => {
                if(isNaN(this.state.code))
                {
                  // If the Given Value is Not Number Then It Will Return True and This Part Will Execute.
                  this.setState(() => ({ nameError: "* number required"}));
                  this.setState(() => ({ checkCode: false}));
                }                  
                if (this.state.code.trim() === "") {                  
                  this.setState(() => ({ nameError: "* required"}));
                  this.setState(() => ({ checkCode: false}));
                } 
                setTimeout(() => {
                  this.setState(() => ({ nameError: ""}));
                }, 20000)
                if (this.state.code.length != 6) {                  
                  this.setState(() => ({ nameError: "* 6 digits required"}));
                  this.setState(() => ({ checkCode: false}));
                } else this.setState(() => ({ checkCode: true}));
                if (this.state.checkCode) {
                  //console.log(this.state.checkCode);
                  this._check2FACode(this.state.code)
                }
              }}
            >
              <Text style={Styles.sendBtnText}>Verify</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              navigation.navigate('PublicSignIn')
            }}
            >
              <Text style={Styles.account}>Already have an account? Sign In</Text>
            </TouchableOpacity>
          </View>
      </View>
        </View>

      </Content>
    </Container>
  }
}
