import React from 'react'
import { StatusBar, TouchableOpacity, ImageBackground } from 'react-native'
import { Container, Header, Content, Icon, Text, View, Button } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Payment/Style'

export default class extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const totalAmount = this.props.navigation.getParam('totalAmt')
    return <Container>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#9013FE' animated barStyle='light-content' />
        <ImageBackground source={require('@Asset/images/menubg.png')} style={Style.navigationBar}>
          <View style={Style.navLeft}>
            <Button
              transparent onPress={() => {
                NavigationService.navigate('PublicReserve')
              }}
            >
              <Icon name='arrow-left' type='MaterialCommunityIcons' style={Style.navLeftIcon} />
            </Button>
          </View>
          <View style={Style.navMiddle}>
            <Text style={Style.navMiddleText}>Payment</Text>
          </View>
          <View style={Style.navRight} />
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <View style={Styles.paymentInfo}>
          <Text style={Styles.amountDesc}>Amount Payable</Text>
          <Text style={Styles.amount}>Pay $ {this.props.navigation.getParam('totalAmt')}</Text>
        </View>
        <View style={Styles.paymentDetails}>
          <Text style={Styles.amountDesc}>Other Payment Options</Text>
        </View>
        <View style={Styles.cardDetails}>
          <TouchableOpacity style={Styles.reserveForm} onPress={() => { NavigationService.navigate('PublicPaymentDetail', { data: totalAmount }) }}>
            <View style={Styles.cardPayment}>
              <Icon name='credit-card' type='FontAwesome' style={Styles.cardIcon} />
              <Text style={Styles.paymentMode}>Debit/Credit Card</Text>
            </View>
            <Icon name='keyboard-arrow-right' type='MaterialIcons' style={Styles.cardIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.reserveForm} onPress={() => { NavigationService.navigate('PublicPaymentDetail', { data: totalAmount }) }}>
            <View style={Styles.cardPayment}>
              <Icon name='credit-card' type='FontAwesome' style={Styles.cardIcon} />
              <Text style={Styles.paymentMode}>Net Banking</Text>
            </View>
            <Icon name='keyboard-arrow-right' type='MaterialIcons' style={Styles.cardIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.reserveForm} onPress={() => { NavigationService.navigate('PublicPaymentDetail', { data: totalAmount }) }}>
            <View style={Styles.cardPayment}>
              <Icon name='credit-card' type='FontAwesome' style={Styles.cardIcon} />
              <Text style={Styles.paymentMode}>UPI</Text>
            </View>
            <Icon name='keyboard-arrow-right' type='MaterialIcons' style={Styles.cardIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.reserveForm} onPress={() => { NavigationService.navigate('PublicPaymentDetail', { data: totalAmount }) }}>
            <View style={Styles.cardPayment}>
              <Icon name='credit-card' type='FontAwesome' style={Styles.cardIcon} />
              <Text style={Styles.paymentMode}>More Payment Options</Text>
            </View>
            <Icon name='keyboard-arrow-right' type='MaterialIcons' style={Styles.cardIcon} />
          </TouchableOpacity>
        </View>
      </Content>
           </Container>
  }
}
