import React from 'react';
import { connect } from 'react-redux';
import { StatusBar, TouchableOpacity, Image, ImageBackground, FlatList, Text, View } from 'react-native'
import { userDetails, logOut } from '../../redux/reducers/Customer'; // Replace 'path-to-your-customerReducer' with the actual path to your customerReducer

class MyComponent extends React.Component {
  handleUpdateState = () => {
    // Dispatch the 'userDetails' action with a payload
    this.props.userDetails({ someValue: 'new value' });
  };

  handleLogOut = () => {
    // Dispatch the 'logOut' action
    this.props.logOut();
  };

  render() {
    console.log('user-data=============> ', this.props.someValueFromState);
    
    return (
      <View>
        {/* <Text>{this.props.someValueFromState}</Text> */}
        <TouchableOpacity onPress={this.handleUpdateState}>
          <Text>Update State</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleLogOut}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  someValueFromState: state.userReducer.value, // Access the value from your Redux state
});

export default connect(mapStateToProps, { userDetails, logOut })(MyComponent);
