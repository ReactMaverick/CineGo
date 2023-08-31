import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, CheckBox, ImageBackground } from 'react-native'
import { Container, Header, Content, Icon, Text, View, Button } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/PaymentDetail/Style'

export default class extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <Container>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#9013FE' animated barStyle='light-content' />
        <ImageBackground source={require('@Asset/images/menubg.png')} style={Style.navigationBar}>
          <View style={Style.navLeft}>
            <Button
              transparent onPress={() => {
                NavigationService.navigate('PublicPayment')
              }}
            >
              <Icon name='arrow-left' type='MaterialCommunityIcons' style={Style.navLeftIcon} />
            </Button>
          </View>
          <View style={Style.navMiddle}>
            <Text style={Style.navMiddleText}>Enter Your Card Details</Text>
          </View>
          <View style={Style.navRight} />
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <View style={Styles.paymentInfo}>
          <View>
            <Text style={Styles.paymentTitle}>Card Number</Text>
            <TextInput placeholder='Card Number' placeholderTextColor='#999' style={Styles.paymentInput} />
          </View>
          <View style={Styles.paymentSection}>
            <TextInput placeholder='Expiry Date' placeholderTextColor='#999' style={Styles.paymentInput} />
            <TextInput placeholder='CVV' placeholderTextColor='#999' style={Styles.paymentInput} />
          </View>
          <TextInput placeholder='Card Holder Name' placeholderTextColor='#999' style={Styles.paymentInput} />
          <View style={Styles.paymentRow}>
            <CheckBox />
            <View style={Styles.paymentDetail}>
              <Text style={Styles.paymentDesc}>QuikPay</Text>
              <Text style={Styles.paymentCheck}>Save this card information to my BookMyTickets account and make faster payments</Text>
            </View>
          </View>
        </View>
      </Content>
      <TouchableOpacity style={Styles.payBtn} onPress={() => { NavigationService.navigate('PublicConfirmation') }}>
        <Text style={Styles.payBtnText}>Pay $ {this.props.navigation.getParam('data')}</Text>
      </TouchableOpacity>
           </Container>
  }
}
