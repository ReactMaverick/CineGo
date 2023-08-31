import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image } from 'react-native'
import { Container, Content, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/VerifyOtp/Style'

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
              <Text style={Styles.desc}>Enter OTP Number</Text>
            </View>

            <View style={Styles.fRow}>
              <TextInput style={Styles.inputText} placeholder='*' placeholderTextColor='#FFF' />
              <TextInput style={Styles.inputText} placeholder='*' placeholderTextColor='#FFF' />
              <TextInput style={Styles.inputText} placeholder='*' placeholderTextColor='#FFF' />
              <TextInput style={Styles.inputText} placeholder='*' placeholderTextColor='#FFF' />
            </View>

            <TouchableOpacity
              style={Styles.sendBtn} onPress={() => {
                NavigationService.navigate('PublicHome')
              }}
            >
              <Text style={Styles.sendBtnText}>Verify</Text>
            </TouchableOpacity>
            <Text style={Styles.resend}>Resend Code</Text>
          </View>
        </View>

      </Content>
    </Container>
  }
}
