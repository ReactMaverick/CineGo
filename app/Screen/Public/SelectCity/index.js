import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, ImageBackground, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import CITY from './City'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/SelectCity/Style'

export default class extends React.Component {
  render () {
    return <Container>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#9013FE' animated barStyle='light-content' />
        <ImageBackground source={require('@Asset/images/menubg.png')} style={Style.navigationBar}>
          <View style={Style.navLeft}>
            <Button
              transparent onPress={() => {
                NavigationService.navigate('PublicHome')
              }}
            >
              <Icon name='arrow-left' type='MaterialCommunityIcons' style={Style.navLeftIcon} />
            </Button>
          </View>
          <View style={Style.navMiddle}>
            <Text style={Style.navMiddleText}>New York</Text>
          </View>
          <View style={Style.navRight} />
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <View style={Styles.search}>
          <Icon name='search' type='MaterialIcons' style={Styles.searchIcon} />
          <TextInput placeholder='search for your city' style={Styles.searchCity} />
        </View>

        <View style={Styles.caption}>
          <Text style={Styles.captionDesc}>Popular Cities</Text>
        </View>
        <FlatList
          data={CITY}
          numColumns={4}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, separators }) => (
            <TouchableOpacity
              style={Styles.selectCity} onPress={() => {
                NavigationService.navigate('PublicAds')
              }}
            >
              <Image source={item.image} resizeMode='cover' style={Styles.cityImg} />
              <Text style={Styles.cityCaption}>{item.city}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={Styles.caption}>
          <Text style={Styles.captionDesc}>Other Cities</Text>
        </View>
        <View>
          <Text style={Styles.cityList}>New Orleans</Text>
          <Text style={Styles.cityList}>Miami</Text>
          <Text style={Styles.cityList}>Detroit</Text>
          <Text style={Styles.cityList}>San Antonio</Text>
          <Text style={Styles.cityList}>Dallas</Text>
          <Text style={Styles.cityList}>Denver</Text>
          <Text style={Styles.cityList}>Phoenix</Text>
          <Text style={Styles.cityList}>Indianapolis</Text>
          <Text style={Styles.cityList}>Portland</Text>
        </View>
      </Content>
    </Container>
  }
}
