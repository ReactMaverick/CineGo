import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon, Text, View } from 'native-base'

class Col extends React.Component {
  constructor(props) {
    super(props)

    this.isEmptyCol = this.isEmptyCol.bind(this)
    this.onSelectSeat = this.onSelectSeat.bind(this)
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.item !== this.props.item
  }

  isEmptyCol() {
    const { layoutType, rowIndex, colIndex } = this.props
    // console.log(layoutType, rowIndex, colIndex)
    if (layoutType === 1) {
      return rowIndex > 1 && (colIndex === 5 || colIndex === 6)
    } else if (layoutType === 2) {
      return rowIndex > 1 && ((colIndex === 5 || colIndex === 6) || (rowIndex === 5))
    } else if (layoutType === 3) {
      return rowIndex > 1 && (colIndex === 5 || colIndex === 6 || (rowIndex === 3 || rowIndex === 6 || rowIndex === 9))
    } else if (layoutType === 4) {
      return rowIndex > 1 && ((colIndex === 6 || colIndex === 1 || colIndex === 10) || (rowIndex === 5))
    }
  }
  onSelectSeat() {
    this.props.onSelectSeat(this.props.rowIndex, this.props.colIndex)
  }
  render() {
    if (this.isEmptyCol()) {
      return <View style={{ borderWidth: 0, borderColor: '#000' }}>
        <Text style={{ color: '#FFF' }}>IDLE</Text>
      </View>
    }
    let color = '#CCC'
    if (this.props.item === 2) {
      color = '#E6CAC4'
    } else if (this.props.item === 1) {
      color = '#B9DEA0'
    }
    return <View style={{ marginHorizontal: 2, marginBottom: 3 }}>
      <TouchableOpacity
        onPress={this.onSelectSeat}
      >
        <Icon
          name='event-seat'
          type='MaterialIcons'
          style={{
            fontSize: 32,
            color
          }}
        />
        <Text style={{
          position: 'absolute',
          color: 'rgba(0,0,0,0.8)',
          fontSize: 10,
          fontFamily: 'Montserrat-SemiBold',
          alignSelf: 'center',
          marginTop: 3
        }}>{this.props.colIndex}</Text>
      </TouchableOpacity>
    </View>
  }
}

export default Col
