import React from 'react'
import { StatusBar, TouchableOpacity, ImageBackground } from 'react-native'
import { Container, Header, Content, Icon, Text, Button, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Reserve/Style'

export default class extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { navigation } = this.props;
    // const total = this.props.navigation.getParam('ticket') + this.props.navigation.getParam('bite')
    const total = this.props.route.params.ticket+ this.props.route.params.bite;
    return <Container>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#9013FE' animated barStyle='light-content' />
        <ImageBackground source={require('@Asset/images/menubg.png')} style={Style.navigationBar}>
          <View style={Style.navLeft}>
            <Button
              transparent onPress={() => {
                navigation.navigate('PublicHome')
              }}
            >
              <Icon name='arrow-left' type='MaterialCommunityIcons' style={Style.navLeftIcon} />
            </Button>
          </View>
          <View style={Style.navMiddle}>
            <Text style={Style.navMiddleText}>Reservation</Text>
          </View>
          <View style={Style.navRight} />
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <View style={Styles.reserveShow}>
          <View style={Styles.reserveForm}>
            <View>
              <Text style={Styles.movieName}>Captain Marvel</Text>
              <Text style={Styles.moviePlace}>AGS Cinemas: Maduravoyal</Text>
              <Text style={Styles.movieTime}>Wed, 13 Mar,2019| 10:40pm</Text>
            </View>
            <View style={Styles.boxOffice}>
              <Text style={Styles.movieSeats}>4</Text>
              <Text style={Styles.movieBox}>Box Office</Text>
            </View>
          </View>
          <View style={Styles.paymentDetail}>
            <View style={Styles.paymentInfo}>
              <Text style={Styles.paymentDesc}>Sub-Total</Text>
              {/* <Text style={Styles.paymentDesc}>${this.props.navigation.getParam('ticket')}</Text> */}
              <Text style={Styles.paymentDesc}>${this.props.route.params.ticket}</Text>
            </View>
            <View style={Styles.paymentInfo}>
              <Text style={Styles.paymentDesc}>Bite-Total</Text>
              {/* <Text style={Styles.paymentDesc}>$ {this.props.navigation.getParam('bite')}</Text> */}
              <Text style={Styles.paymentDesc}>$ {this.props.route.params.bite}</Text>
            </View>
            <View style={Styles.paymentInfo}>
              <Text style={Styles.paymentTotal}>Total Payable Amount</Text>
              <Text style={Styles.paymentTotal}>$ {total}</Text>
            </View>
          </View>
          <View style={{ display: 'none' }}>
            <TouchableOpacity style={Styles.reserveForm} onPress={() => { navigation.navigate('PublicPaymentDetail') }}>
              <View style={Styles.cardPayment}>
                <Icon name='credit-card' type='FontAwesome' style={Styles.cardIcon} />
                <Text style={Styles.paymentMode}>Debit/Credit Card</Text>
              </View>
              <Icon name='keyboard-arrow-right' type='MaterialIcons' style={Styles.cardIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.reserveForm} onPress={() => { navigation.navigate('PublicPaymentDetail') }}>
              <View style={Styles.cardPayment}>
                <Icon name='credit-card' type='FontAwesome' style={Styles.cardIcon} />
                <Text style={Styles.paymentMode}>Net Banking</Text>
              </View>
              <Icon name='keyboard-arrow-right' type='MaterialIcons' style={Styles.cardIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.reserveForm} onPress={() => { navigation.navigate('PublicPaymentDetail') }}>
              <View style={Styles.cardPayment}>
                <Icon name='credit-card' type='FontAwesome' style={Styles.cardIcon} />
                <Text style={Styles.paymentMode}>UPI</Text>
              </View>
              <Icon name='keyboard-arrow-right' type='MaterialIcons' style={Styles.cardIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.reserveForm} onPress={() => { navigation.navigate('PublicPaymentDetail') }}>
              <View style={Styles.cardPayment}>
                <Icon name='credit-card' type='FontAwesome' style={Styles.cardIcon} />
                <Text style={Styles.paymentMode}>More Payment Options</Text>
              </View>
              <Icon name='keyboard-arrow-right' type='MaterialIcons' style={Styles.cardIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </Content>
      <TouchableOpacity style={Styles.payBtn} onPress={() => { navigation.navigate('PublicPayment', { totalAmt: total }) }}>
        <Text style={Styles.payBtnText}>Pay $ {total}</Text>
      </TouchableOpacity>
    </Container>
  }
}
