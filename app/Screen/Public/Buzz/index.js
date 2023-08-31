import React from 'react'
import { StatusBar, TouchableOpacity, Image, ImageBackground, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import BUZZ from './Buzz'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Buzz/Style'

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
            <Text style={Style.navMiddleText}>Buzz</Text>
          </View>
          <View style={Style.navRight} />
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <Text style={Styles.trendCaption}>Discover what's trending in the world of entertainment</Text>
        <View style={Styles.movieBuzz}>
          <FlatList
            data={BUZZ}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, separators }) => (
              <View style={Styles.trend}>
                <TouchableOpacity
                  style={Styles.trendMain} onPress={() => {
                    NavigationService.navigate('PublicDetail')
                  }}
                >
                  <Image source={{ uri: item.image }} style={Styles.trendImg} />
                  <Text style={Styles.trendDesc}>{item.desc}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </Content>
    </Container>
  }
}
