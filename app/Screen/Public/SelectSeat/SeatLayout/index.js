import React from 'react'
import { ActivityIndicator, FlatList, ScrollView } from 'react-native'
import { useDispatch, useSelector, connect } from 'react-redux';
import Row from './Row'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isSeatList } from '../../../../redux/reducers/SeatReducer';
class SeatLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      seatList: [],
      selectedSeats: {
        // '1-2': 1,
        // '1-5': 2,
        // '1-6': 1,
        // '2-3': 2,
        // '5-7': 2,
        // '7-4': 1,
        // '9-1': 2,
        // '10-3': 1,
        // '6-1': 2,
      },
    };

    this.onSelectSeat = this.onSelectSeat.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.renderSeatLayout = this.renderSeatLayout.bind(this)
  }

  componentDidMount() {
    const seatList = []
    for (let rowIndex = 0; rowIndex < 12; rowIndex++) {
      const cols = []
      for (let colIndex = 0; colIndex < 12; colIndex++) {
        cols.push(this.state.selectedSeats[rowIndex + '-' + colIndex] || 0)
      }
      seatList.push(cols)
    }
    this.setState({
      seatList,
      loading: false
    })
  }
  onSelectSeat(rowIndex, colIndex) {
    const seatNumber = this.props.seatNo;
    const seatList = [...this.state.seatList]
    if (seatList[rowIndex][colIndex] === 2) {
      return
    }
    if (Object.keys(this.state.selectedSeats).length >= seatNumber) {
      return alert('You can only select ' + seatNumber + ' seats')
    }
    if (Object.keys(this.state.selectedSeats).length + 1 == seatNumber) {
      this.props.isSeatList(true);
    }
    const seatKey = rowIndex + '-' + colIndex
    const selectedSeats = { ...this.state.selectedSeats }
    if (selectedSeats[seatKey]) {
      delete selectedSeats[seatKey]
    } else {
      selectedSeats[seatKey] = 1
    }
    this.setState({ selectedSeats })
    seatList[rowIndex][colIndex] = seatList[rowIndex][colIndex] === 1 ? 0 : 1
    this.setState({ seatList })
  }
  renderItem({ item, index }) {
    return <Row
      rowIndex={index}
      cols={item}
      layoutType={this.props.layoutType}
      onSelectSeat={this.onSelectSeat}
    />
  }
  renderSeatLayout() {
    return <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={this.state.seatList}
      renderItem={this.renderItem}
    />
  }

  render() {
    return <ScrollView
    >
      {console.log(this.state.selectedSeats)}
      {this.state.loading ? <ActivityIndicator /> : this.renderSeatLayout()}
    </ScrollView>
  }
}

const mapStateToProps = (state) => ({
  state: state.seatReducer.value,
});

export default connect(mapStateToProps, { isSeatList })(SeatLayout);
