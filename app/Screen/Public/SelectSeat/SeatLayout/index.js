import React from 'react'
import { ActivityIndicator, FlatList, ScrollView } from 'react-native'

import Row from './Row'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      seatList: [],
      selectedSeats: {
        '1-2': 1,
        '1-5': 2,
        '1-6': 1,
        '2-3': 2,
        '5-7': 2,
        '7-4': 1,
        '9-1': 2,
        '10-3': 1,
        '6-1': 2
      }
    }

    this.didFocus = this.didFocus.bind(this)
    this.onSelectSeat = this.onSelectSeat.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.renderSeatLayout = this.renderSeatLayout.bind(this)
  }

  componentDidMount () {
    this.didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      this.didFocus
    )
    const seatList = []
    for (let rowIndex = 0; rowIndex < 12; rowIndex++) {
      const cols = []
      for (let colIndex = 1; colIndex < 12; colIndex++) {
        cols.push(this.state.selectedSeats[rowIndex + '-' + colIndex] || 0)
      }
      seatList.push(cols)
    }
    this.setState({
      seatList
    })
  }
  componentWillUnmount () {
    this.didFocusSubscription.remove()
  }

  didFocus () {
    this.setState({
      loading: false
    })
  }
  onSelectSeat (rowIndex, colIndex) {
    const seatList = [ ...this.state.seatList ]
    if (seatList[rowIndex][colIndex] === 2) {
      return
    }
    seatList[rowIndex][colIndex] = seatList[rowIndex][colIndex] === 1 ? 0 : 1
    this.setState({ seatList })
  }

  renderItem ({ item, index }) {
    return <Row
      rowIndex={index}
      cols={item}
      layoutType={this.props.layoutType}
      onSelectSeat={this.onSelectSeat}
    />
  }
  renderSeatLayout () {
    return <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={this.state.seatList}
      renderItem={this.renderItem}
    />
  }
  render () {
    return <ScrollView
    >
      {this.state.loading ? <ActivityIndicator /> : this.renderSeatLayout()}
    </ScrollView>
  }
}
