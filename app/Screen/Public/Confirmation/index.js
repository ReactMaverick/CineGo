import React from 'react'
import { StatusBar, Image, ImageBackground } from 'react-native'
import { Container, Header, Content, Icon, Text, View, Button } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Confirmation/Style'

export default class extends React.Component {
  render () {
    const { navigation } = this.props;
    return <Container>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#9013FE' animated barStyle='light-content' />
        <ImageBackground source={require('@Asset/images/menubg.png')} style={Style.navigationBar}>
          <View style={Style.navLeft}>
            <Button
              transparent onPress={() => {
                navigation.navigate('PublicPayment')
              }}
            >
              <Icon name='close' type='MaterialIcons' style={Style.navLeftIcon} />
            </Button>
          </View>
          <View style={Style.navMiddle}>
            <Text style={Style.navMiddleText}>Confirmation</Text>
          </View>
          <View style={Style.navRight} />
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <View style={Styles.bgGrey}>

          <View style={Styles.movieDetails}>
            <View style={Styles.movieList}>
              <View style={Styles.confirmRow}>
                <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/8/85/Captain_Marvel_poster.jpg' }} style={Styles.movieImg} />
                <View>
                  <Text style={Styles.movieName}>Captain Marvel</Text>
                  <View style={Styles.confirmRow}>
                    <View style={Styles.confirmRow}>
                      <Icon name='star-border' type='MaterialIcons' style={Styles.movieIcon} />
                      <Text style={Styles.movieView}>7.5</Text>
                    </View>
                    <View style={Styles.confirmRow}>
                      <Icon name='access-time' type='MaterialIcons' style={Styles.movieIcon} />
                      <Text style={Styles.movieView}>2h 50min</Text>
                    </View>
                  </View>
                  <View style={Styles.confirmRow}>
                    <Text style={Styles.movieReview}>Thriller</Text>
                    <Text style={Styles.movieReview}>Action</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={Styles.movieList}>
              <Text style={Styles.movieDesc}>Screen</Text>
              <Text style={Styles.moviePlay}>AGS: Cinemas Central Park, New York</Text>
            </View>
            <View style={Styles.movieList}>
              <Text style={Styles.movieDesc}>Seat</Text>
              <Text style={Styles.moviePlay}>ARow: A1,A2</Text>
            </View>
            <View style={Styles.movieList}>
              <Text style={Styles.movieDesc}>Date & Time</Text>
              <Text style={Styles.moviePlay}>Friday,15 Mar,2019-10:35pm</Text>
            </View>
            <View style={Styles.confirmRow}>
              <View style={Styles.movieList}>
                <Text style={Styles.movieDesc}>TicketID</Text>
                <Text style={Styles.moviePlay}>PVR 9876 0000 111</Text>
              </View>
              <View style={Styles.ticketPrice}>
                <Text style={Styles.movieDesc}>Price</Text>
                <Text style={Styles.moviePlay}>$ 454.36</Text>
              </View>
            </View>
            <View style={Styles.bar}>
              <View style={Styles.barDivider}>
                <View style={Styles.barCircle} />
                <View style={Styles.barCircle} />
                <View style={Styles.barCircle} />
                <View style={Styles.barCircle} />
                <View style={Styles.barCircle} />
                <View style={Styles.barCircle} />
                <View style={Styles.barCircle} />
                <View style={Styles.barCircle} />
                <View style={Styles.barCircle} />
                <View style={Styles.barCircle} />
                <View style={Styles.barCircle} />
                <View style={Styles.barCircle} />
                <View style={Styles.barCircle} />
                <View style={Styles.barCircle} />
              </View>
              <View style={Styles.barCode}>
                <Image source={{ uri: 'https://www.sageintelligence.com/wp-content/uploads/2017/08/Image-1-3.png' }} resizeMode='contain' style={Styles.barCodeImg} />
              </View>
            </View>
          </View>
        </View>
      </Content>
      <Text style={Styles.successBtn}>Payment SuccessFull</Text>
    </Container>
  }
}
