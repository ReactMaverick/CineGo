import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image } from 'react-native'
import { Container, Content, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/ForgotPswd/Style'

export default class extends React.Component {
  render () {
    return <Container style={Style.bgMain}>
      <StatusBar backgroundColor='#151515' animated barStyle='light-content' />

      <Content contentContainerStyle={Style.layoutCenter}>
        <Image source={require('@Asset/images/loginbg.png')} imageStyle='cover' style={Styles.bg} />
        <View style={Styles.formLayout}>
          <View style={Styles.form}>
            <View>
              <Text style={Styles.title}>CineGo</Text>
              <Text style={Styles.desc}>Forgot Password</Text>
            </View>

            <View style={Styles.fRow}>
              <Text style={Styles.label}>Enter your e-mail Address</Text>
              <TextInput style={Styles.inputText} placeholder='johndoe@gmail.com ' placeholderTextColor='#999' />
            </View>

            <TouchableOpacity
              style={Styles.sendBtn} onPress={() => {
                NavigationService.navigate('PublicSignIn')
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
