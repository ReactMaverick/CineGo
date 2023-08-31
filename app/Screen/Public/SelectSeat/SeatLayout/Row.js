import React from 'react'
import { Text, View } from 'native-base'
import { FlatList } from 'react-native'

import Col from './Col'

class Row extends React.Component {
  constructor (props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
    this.renderCols = this.renderCols.bind(this)
  }

  shouldComponentUpdate (nextProps) {
    return true
  }

  renderItem ({ item, index }) {
    return <Col
      rowIndex={this.props.rowIndex}
      colIndex={index}
      item={item}
      layoutType={this.props.layoutType}
      selectedSeats={this.props.selectedSeats}
      onSelectSeat={this.props.onSelectSeat}
    />
  }
  renderCols () {
    return <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={this.props.cols}
      extraData={{
        cols: this.props.cols
      }}
      renderItem={this.renderItem}
      horizontal
    />
  }
  render () {
    return <View style={{ flexDirection: 'row' }}>
      <Text style={{
        fontSize: 10,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(0,0,0,0.7)',
        padding: 2,
        alignSelf: 'center'
      }}>
        {String.fromCharCode(66 + this.props.rowIndex - 1)}
      </Text>
      <View style={{ flexDirection: 'row' }}>{this.renderCols()}</View>
    </View>
  }
}

export default Row
