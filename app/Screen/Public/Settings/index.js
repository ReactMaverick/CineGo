import React from 'react'
import { StatusBar, Switch, ImageBackground } from 'react-native'
import { Container, Header, Content, Icon, Text, View, Button } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Settings/Style'

export default class extends React.Component {
  render () {
    return <Container>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#9013FE' animated barStyle='light-content' />
        <ImageBackground source={require('@Asset/images/menubg.png')} style={Style.navigationBar}>
          <View style={Style.navLeft}>
            <Button
              transparent onPress={() => {
                NavigationService.navigate('PublicProfile')
              }}
            >
              <Icon name='arrow-left' type='MaterialCommunityIcons' style={Style.navLeftIcon} />
            </Button>
          </View>
          <View style={Style.navMiddle}>
            <Text style={Style.navMiddleText}>Settings</Text>
          </View>
          <View style={Style.navRight} />
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <View>
          <Text style={Styles.settingsCaption}>TicketType</Text>
        </View>
        <View style={Styles.settings}>
          <View style={Styles.settingsInfo}>
            <View style={Styles.settingsView}>
              <Text style={Styles.settingsDesc}>M-Ticket</Text>
            </View>
            <Switch value style={Styles.conditionChange} />
          </View>
          <View style={Styles.settingsInfo}>
            <View style={Styles.settingsView}>
              <Text style={Styles.settingsDesc}>Box office pick up</Text>
            </View>
            <Switch value style={Styles.conditionChange} />
          </View>
        </View>
        <View>
          <Text style={Styles.settingsCaption}>Wish to see F&B while booking tickets?</Text>
        </View>
        <View style={Styles.settings}>
          <View style={Styles.settingsInfo}>
            <View style={Styles.settingsView}>
              <Text style={Styles.settingsDesc}>Food & Beverage</Text>
            </View>
            <Switch value style={Styles.conditionChange} />
          </View>
        </View>
        <View>
          <Text style={Styles.settingsCaption}>Settings</Text>
        </View>
        <View style={Styles.settings}>
          <View style={Styles.settingsInfo}>
            <View style={Styles.settingsView}>
              <Text style={Styles.settingsDesc}>Mobile notifications</Text>
            </View>
            <Switch value style={Styles.conditionChange} />
          </View>
          <View style={Styles.settingsInfo}>
            <View style={Styles.settingsView}>
              <Text style={Styles.settingsDesc}>WhatsApp notifications</Text>
            </View>
            <Switch value style={Styles.conditionChange} />
          </View>
        </View>
        <View>
          <Text style={Styles.settingsCaption}>Sign Out</Text>
        </View>
      </Content>
           </Container>
  }
}
