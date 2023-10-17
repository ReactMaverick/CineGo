import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, ImageBackground, FlatList, TouchableHighlight } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Search/Style'

import SEARCH from './Search'
import TRENDING from './Trending'

export default class extends React.Component {
  render() {
    const { navigation } = this.props;
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
            <View style={Styles.search}>
              <TextInput placeholder='search for your city' placeholderTextColor='rgba(0,0,0,0.3)' style={Styles.searchCity} />
              <Icon name='search' type='MaterialIcons' style={Styles.searchIcon} />
            </View>
          </View>
          <View style={Style.navRight} />
        </ImageBackground>
      </Header>

      <Content ContainerStyle={Style.layoutDefault}>
        <FlatList
          data={SEARCH}
          horizontal
          style={{ backgroundColor: '#4A90E2' }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, separators }) => (
            <TouchableHighlight
              style={Styles.searchBtn} underlayColor='#4A90E2' onPress={() => {
                navigation.navigate('')
              }}
            >
              <Text style={Styles.searchList}>{item.list}</Text>
            </TouchableHighlight>
          )}
        />
        <View style={Styles.caption}>
          <Text style={Styles.captionDesc}>TRENDING SEARCHES</Text>
        </View>
        <FlatList
          data={TRENDING}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, separators }) => (
            <TouchableOpacity
              style={Styles.trends} onPress={() => {
                navigation.navigate('PublicDetail', {
                  item: item
                })
              }}
            >
              <Icon name='search' type='MaterialIcons' style={Styles.trendIcon} />
              <Text style={Styles.trendDesc}>{item.list}</Text>
            </TouchableOpacity>
          )}
        />
      </Content>
    </Container>
  }
}
