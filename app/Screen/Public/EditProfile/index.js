import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image,Alert } from 'react-native'
import { Container, Header, Content, Icon, Text, Radio, View } from 'native-base'
import Spinner from "react-native-loading-spinner-overlay";
import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/EditProfile/Style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VIEW_PROFILE,UPDATE_PROFILE } from '../../../api/ApiConfig';
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
      this.setState({userDetails:user_data});
     // console.log(this.state.userDetails);
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

  _updateProfile = async() =>{

          
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

    }else {
             
      let details = {
        'email': this.state.email,        
        'name': this.state.f_name       
    };

    
      let formBody = [];
      for (let property in details) {
          let encodedKey = encodeURIComponent(property);
          let encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

        fetch(UPDATE_PROFILE+'/'+this.state.userDetails.id, {
            method: "PUT",
            headers: {
              'Authorization': 'Bearer ' + this.state.userDetails.token,
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        })
            .then((response) => response.json())
            .then((responseJson) => { 
              // console.log(responseJson);
              // if(responseJson.success==true){
              
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
               
              // }else{
              //     Alert.alert("Warning",responseJson.message);
              // }
              
                
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
        <StatusBar backgroundColor='#000' animated barStyle='light-content' />
        <View style={Style.navigationBar}>
          <TouchableOpacity
            style={Styles.profileLeft} onPress={() => {
              navigation.navigate('PublicProfile')
            }}
          >
            <Icon name='keyboard-arrow-left' type='MaterialIcons' style={Style.navLeftIcon} />
            <Text style={Styles.profileNum}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.navRight} onPress={() => {
              this._updateProfile()
            //  NavigationService.navigate('PublicHome')
            }}
          >
            <Text style={Styles.rightDesc}>Update</Text>
          </TouchableOpacity>
        </View>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
      
        <View style={Styles.profile}>
        
          <TextInput placeholder='Name'
            
            style={Styles.textInputDesc}
            onChangeText={(f_name) => this.setState({ f_name })}
            value={this.state.f_name} />

        

          <TextInput placeholder='Email'
            style={Styles.textInputDesc}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            keyboardType={'email-address'}
           
          />

         
        </View>
       
      </Content>
    </Container>
  }
}
