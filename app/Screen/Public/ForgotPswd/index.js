import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image } from 'react-native'
import { Container, Content, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/ForgotPswd/Style'

export default class extends React.Component {
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
              <Text style={Style.signMiddleDesc}>Forgot Password</Text>
            </View>
            <View style={Style.signMiddleText2}>              
              <Text style={Style.desc}></Text>
            </View>

            <View style={Styles.fRow}>
              <Text style={Styles.label}>Enter your e-mail Address</Text>
              <TextInput style={Styles.inputText} placeholder='johndoe@gmail.com ' placeholderTextColor='#000' />
            </View>

            <TouchableOpacity
              style={Styles.sendBtn} onPress={() => {
                navigation.navigate('Home')
              }}
            >
              <Text style={Styles.sendBtnText}>Send Password</Text>
            </TouchableOpacity>
          </View>

        </View>

      </Content>
           </Container>
  }
}
