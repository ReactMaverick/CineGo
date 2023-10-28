import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, Alert } from 'react-native'
import { Container, Content, Icon, Text, View } from 'native-base'
import Spinner from "react-native-loading-spinner-overlay";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationService from '@Service/Navigation'
import { useDispatch, useSelector, connect } from 'react-redux';
import Style from '@Theme/Style'
import Styles from '@Screen/Public/SignIn/Style'
import { SIGNIN_API } from '../../../api/ApiConfig';
import { userDetails } from '../../../redux/reducers/Customer';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false
    }
  }
  _loginCheck = async () => {

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
          if (responseJson.success == true) {
            AsyncStorage.setItem('userData', JSON.stringify(responseJson.data));
            this.props.userDetails(JSON.stringify(responseJson.data));
            Alert.alert(
              'Alert',
              responseJson.message,
              [
                {
                  text: 'OK',
                  onPress: () => this.props.navigation.navigate('Home')
                },
              ],
              { cancelable: false },
            );

          } else {
            Alert.alert("Warning", responseJson.message);
          }


        })
        .catch((error) => console.log(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });

    }

  }
  render() {
    const { navigation } = this.props;
    return <Container style={Style.bgMain}>
    <StatusBar backgroundColor='#151515' animated barStyle='light-content' />
    <Spinner visible={this.state.isLoading} />
    <Content contentContainerStyle={Style.layoutCenter}>
      <Image source={require('@Asset/images/login.jpeg')} imageStyle='cover' style={Styles.bgCover} />
      <View style={Styles.formLayout}>
        <View style={Styles.form}>
          <View style={Style.signMiddleText}>
            <Image source={require('@Asset/images/tats_logo.png')} style={Style.signMiddleLogo}/>
            <Text style={Style.signMiddleTextats}>Ticketsat.com</Text>
          </View>
          <View>
            <Text style={Style.signMiddleDesc}>Sign In</Text>
          </View>
          <View style={Style.signMiddleText2}>              
            <Text style={Style.desc}></Text>
          </View>
          {this.state.displayErrorMessage == true ?
            <View style={{ backgroundColor: '#000', flex: 1, justifyContent: 'center', marginBottom: 10, borderRadius: 5, padding: 5 }}>
              {this.state.errorMsg.email ? <Text style={{ color: '#fff', marginLeft: 10 }}>*{this.state.errorMsg.email}</Text> : <View></View>}

              {this.state.errorMsg.password ? <Text style={{ color: '#fff', marginLeft: 10 }}>*{this.state.errorMsg.password}</Text> : <View></View>}

            </View>
            : <View></View>}
          <View style={Styles.fRow}>
            <Text style={Styles.label}>Your Email</Text>
            <View style={Styles.formRow}>
              <TextInput style={Styles.inputText} placeholder='johndoe@gmail.com' placeholderTextColor='#000'  
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
               placeholderTextColor='#000'
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
            <Text style={Styles.account}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Content>
  </Container>
  }
}
const mapStateToProps = (state) => ({
  someValueFromState: state.userReducer.value,
});

export default connect(mapStateToProps, { userDetails })(SignIn);

