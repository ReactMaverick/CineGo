import React from 'react'
import { StatusBar, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native'
import { Container, Header, Content, Icon, Text, View, Button } from 'native-base'

import NavigationService from '@Service/Navigation'

import Modal from 'react-native-modalbox'
import CalendarStrip from 'react-native-calendar-strip'

import THEATRE from './Theatre'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Booking/Style'
const SeatNo = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

export default class extends React.Component {
  constructor () {
    super()
    this.state = {
      isDisabled: false,
      isOpen: false,
      name: '',
      isSelectNo: null,
      seatNo: ''
    }
  }

  render () {
    const { navigation } = this.props;
    return <Container>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#9013FE' animated barStyle='light-content' />
        <ImageBackground source={require('@Asset/images/menubg.png')} style={Style.navigationBar}>
          <View style={Style.navLeft}>
            <Button
              transparent onPress={() => {
                navigation.navigate('PublicDetail')
              }}
            >
              <Icon name='arrow-left' type='MaterialCommunityIcons' style={Style.navLeftIcon} />
            </Button>
          </View>
          <View style={Style.navMiddle}>
            <Text style={Style.navMiddleText}>Captain Marvel</Text>
          </View>
          <View style={Style.navRight}>
            <Button
              transparent onPress={() => {
                navigation.navigate('PublicFilter')
              }}
            >
              <Icon name='ios-options' type='Ionicons' style={Style.navLeftIcon} />
            </Button>
          </View>
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <View style={Styles.bgImg}>
          <View style={Styles.calender}>
            <Text style={Styles.calenderDesc}>Tomorrow, 10Mar</Text>
            <Text style={Styles.calenderDesc}>Tamil 2D</Text>
          </View>
          <CalendarStrip
            calendarAnimation={{ type: 'sequence', duration: 30 }}
            daySelectionAnimation={{ type: 'background', duration: 300, highlightColor: '#4A90E2' }}
            style={{ height: 100, paddingBottom: 10 }}
            highlightColor={{ backgroundColor: '#FF0000' }}
            calendarHeaderStyle={{ color: '#000' }}
            calen
            calendarColor='#FFF'
            dateNumberStyle={{ color: '#000' }}
            dateNameStyle={{ color: '#000' }}
            iconContainer={{ flex: 0.1 }}
          />
          <FlatList
            data={THEATRE}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, separators }) => (
              <View style={Styles.bookingForm}>
                <View style={Styles.calender}>
                  <Text style={Styles.bookingPlace}>{item.theatreName}</Text>
                  <Icon name='info-outline' type='MaterialIcons' style={Styles.locationIcon} />
                </View>
                <View style={Styles.bookingTime}>
                  {item.sessionA === '' ? null : <Text style={Styles.showTime} onPress={() => this.setState({ name: item.theatreName }, () => this.refs.modal1.open())}>{item.sessionA}</Text>}
                  {item.sessionB === '' ? null : <Text style={Styles.showTime} onPress={() => this.setState({ name: item.theatreName }, () => this.refs.modal1.open())}>{item.sessionB}</Text>}
                  {item.sessionC === '' ? null : <Text style={Styles.showTime} onPress={() => this.setState({ name: item.theatreName }, () => this.refs.modal1.open())}>{item.sessionC}</Text>}
                  {item.sessionD === '' ? null : <Text style={Styles.showTime} onPress={() => this.setState({ name: item.theatreName }, () => this.refs.modal1.open())}>{item.sessionD}</Text>}
                </View>
              </View>
            )}
          />
        </View>

      </Content>
      <Modal
        ref='modal1'
        isOpen={this.state.isOpen}
        onClosed={() =>
          this.setState({
            isOpen: false
          })}
        isDisabled={this.state.isDisabled}
        style={Styles.modalForm}
      >
        <View style={Styles.modalRow}>
          <Icon name='close' type='MaterialIcons' style={Styles.closeIcon} onPress={() => this.refs.modal1.close()} />
          <Text style={Styles.modalDesc}>How many seats?</Text>
        </View>
        <View>
          <Image source={{ uri: 'https://images.pexels.com/photos/257385/pexels-photo-257385.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' }} style={Styles.seatImg} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <FlatList
            data={SeatNo}
            extraData={{
              isSelectNo: this.state.isSelectNo
            }}
            horizontal
            renderItem={({ item, index }) => {
              return <TouchableOpacity onPress={() => this.setState({ isSelectNo: index, seatNo: item })}>
                <Text style={[Styles.seatNum, { backgroundColor: this.state.isSelectNo === index ? 'red' : '#fff' }]}>{item}</Text>
                     </TouchableOpacity>
            }}
          />

        </View>
        <View style={Styles.ticketPrice}>
          <View>
            <Text style={Styles.scheme}>Diamond</Text>
            <Text style={Styles.price}>$ 190.78</Text>
            <Text style={Styles.available}>Available</Text>
          </View>
          <View>
            <Text style={Styles.scheme}>Pearl</Text>
            <Text style={Styles.price}>$ 60.12</Text>
            <Text style={Styles.available}>Available</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {
          navigation.navigate('PublicSelectSeat', { data: this.state.name, seat: this.state.seatNo })
        }}
        >
          <Text style={Styles.seatBtn}>Select Seats</Text>
        </TouchableOpacity>
      </Modal>
           </Container>
  }
}
