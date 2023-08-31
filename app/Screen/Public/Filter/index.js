import React from 'react'
import { StatusBar, CheckBox, ImageBackground } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Filter/Style'

export default class extends React.Component {
  constructor () {
    super()
    this.state = {
      isDisabled: false,
      isOpen: false,
      checked: false,
      tamil: false,
      hindi: false,
      malayalam: false,
      telugu: false
    }
  }

  render () {
    return <Container>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#9013FE' animated barStyle='light-content' />
        <ImageBackground source={require('@Asset/images/menubg.png')} style={Style.navigationBar}>
          <View style={Style.navLeft}>
            <Button
              transparent onPress={() => {
                NavigationService.navigate('PublicBooking')
              }}
            >
              <Icon name='arrow-left' type='MaterialCommunityIcons' style={Style.navLeftIcon} />
            </Button>
          </View>
          <View style={Style.navMiddle}>
            <Text style={Style.navMiddleText}>Filter</Text>
          </View>
          <View style={Style.navRight} />
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <View style={Styles.caption}>
          <Icon name='sort' type='MaterialIcons' style={Styles.searchIcon} />
          <Text style={Styles.captionDesc}>Sort by</Text>
        </View>
        <View>
          <Text style={Styles.filterDesc}>Popularity</Text>
          <Text style={Styles.filterDesc}>Release Date</Text>
        </View>
        <View style={Styles.caption}>
          <Icon name='language' type='FontAwesome' style={Styles.searchIcon} />
          <Text style={Styles.captionDesc}>Language</Text>
        </View>
        <View style={Styles.checkboxRow}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() => this.setState({ checked: !this.state.checked })}
          />
          <Text style={Styles.checkboxDesc}>English</Text>
        </View>
        <View style={Styles.checkboxRow}>
          <CheckBox
            value={this.state.tamil}
            onValueChange={() => this.setState({ tamil: !this.state.tamil })}
          />
          <Text style={Styles.checkboxDesc}>Tamil</Text>
        </View>
        <View style={Styles.checkboxRow}>
          <CheckBox
            value={this.state.Hindi}
            onValueChange={() => this.setState({ Hindi: !this.state.Hindi })}
          />
          <Text style={Styles.checkboxDesc}>Hindi</Text>
        </View>
        <View style={Styles.checkboxRow}>
          <CheckBox
            value={this.state.malayalam}
            onValueChange={() => this.setState({ malayalam: !this.state.malayalam })}
          />
          <Text style={Styles.checkboxDesc}>Malayalam</Text>
        </View>
        <View style={Styles.checkboxRow}>
          <CheckBox
            value={this.state.telugu}
            onValueChange={() => this.setState({ telugu: !this.state.telugu })}
          />
          <Text style={Styles.checkboxDesc}>Telugu</Text>
        </View>

      </Content>
           </Container>
  }
}
