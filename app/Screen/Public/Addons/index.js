import React from 'react'
import { StatusBar, TouchableOpacity, Image, ImageBackground, FlatList, ScrollView, Dimensions, Alert } from 'react-native'
import { Container, Header, Content, Icon, Text, View, Tab, Tabs, ScrollableTab, Card, Picker  } from 'native-base'
import Spinner from "react-native-loading-spinner-overlay";
import NavigationService from '@Service/Navigation'
const { width: WIDTH } = Dimensions.get('window')
import Style from '@Theme/Style'
import Styles from '@Screen/Public/Events/Style'
import { LIST_PRODUCT } from '../../../api/ApiConfig';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      products: [],

    }

  }
  componentDidMount() {
    this._getProducts();
  }

  _getProducts = async () => {
    await this.setState({ isLoading: true });
    fetch(LIST_PRODUCT, {
      method: "GET",
      headers: {
        // 'Authorization': 'Bearer ' + userData.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        var product = responseJson.products;
        for (i = 0; i < responseJson.products.length; i++) {
          product[i].initial_quantity = 1;
        }
        this.setState({ products: product });

      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }


  _setEvent = async (item) => {
    this.setState({ events: this.state.eventCategory[item] });
    this.setState({ selectedItem: item });
  }
  onValueChange(value) {
    var products = this.state.products;
    // console.log(products);
    var arr = value.split('_');
    products[arr[1]].price = products[arr[1]].variants[arr[0]].price;

    this.setState({ products: products });
  }
  _add(index) {
    var products = this.state.products;
    var quantity = products[index].quantity;
    var initial_quantity = products[index].initial_quantity + 1;
    if (initial_quantity > quantity) {
      Alert.alert("Warning", "Please try again");
    } else {
      products[index].initial_quantity = initial_quantity;
      this.setState({ products: products });
    }
  }
  _remove(index) {
    var products = this.state.products;
    var initial_quantity = products[index].initial_quantity - 1;
    if (initial_quantity == 0) {
      Alert.alert("Warning", "Please try again");
    } else {
      products[index].initial_quantity = initial_quantity;
      this.setState({ products: products });
    }
  }
  _customText(list) {
    //console.log(list.price);
    var str = '';
    for (i = 0; i < list.options.length; i++) {
      str = str + list.options[i].value + ' | ';
    }
    str = str.trim();
    str = str.slice(0, - 1);
    str = str + " - $" + list.price;
    return str;
  }
  render() {
    const { navigation } = this.props;
    return <Container>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#9013FE' animated barStyle='light-content' />
        <Spinner visible={this.state.isLoading} />
        <ImageBackground source={require('@Asset/images/menubg.png')} style={Style.navigationBar}>
          <View style={Style.navLeft}>
            <TouchableOpacity onPress={() => {
              navigation.openDrawer()
            }}
            >
              <Image source={require('@Asset/images/menu.png')} />
            </TouchableOpacity>
          </View>
          <View style={Style.navMiddle}>
            <Text style={Style.navMiddleText}>Products</Text>
          </View>
          <View style={Style.navRight} />
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ marginTop: 10, alignItems: 'center' }} >
          {this.state.products.map((item, index) => (
            <Card style={{ margin: 10, width: WIDTH - 20 }}>
              <View style={{ flexDirection: "row", padding: 5 }}>
                <View style={{ flex: 1 }}>
                  <Image source={{ uri: "https://demo.ticketstake.com/img/default.jpg" }} style={{ width: 120, height: 132 }} />
                </View>
                <View style={{ flex: 2 }}>
                  <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                    <Text style={{ fontSize: 15, color: 'gray' }}>{item.title}</Text>
                    <View style={{ alignItems: 'flex-end', flex: 1 }}>
                      <Text style={{ marginRight: 10, fontSize: 15, color: 'gray', fontWeight: 'bold' }}>${item.price}</Text>
                    </View>

                  </View>

                  <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 15 }}>Options</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>
                      <TouchableOpacity onPress={() => { this._remove(index) }}>
                        <Icon name="minuscircleo" type='AntDesign' style={{ fontSize: 25 }} />
                      </TouchableOpacity>
                      <Text style={{ fontSize: 15, marginLeft: 10, marginRight: 10 }}>{item.initial_quantity}</Text>
                      <TouchableOpacity onPress={() => { this._add(index) }}>
                        <Icon name="pluscircleo" type='AntDesign' style={{ fontSize: 25 }} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>


                    <View style={{ borderColor: '#f2f2f2', borderWidth: 2, flex: 2, height: 50 }}>
                      <Picker
                        note
                        mode="dropdown"
                        style={{ width: 170, }}
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                      >
                        {item.variants.map((list, key) => (

                          <Picker.Item label={this._customText(list)} value={key + '_' + index} />
                        ))}

                      </Picker>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', marginBottom: 10, top: 5 }}>

                      <TouchableOpacity style={{
                        justifyContent: 'center',
                        margin: 10
                      }} >
                        <Text style={{
                          color: 'rgba(0,0,0,0.7)',
                          fontFamily: 'Montserrat-Regular',
                          fontSize: 12,
                          paddingHorizontal: 10,
                          paddingVertical: 5,
                          borderColor: '#4A90E2',
                          borderWidth: 1,
                          borderRadius: 3
                        }}>Add</Text>
                      </TouchableOpacity>


                    </View>

                  </View>




                </View>
              </View>
            </Card>
          ))}

        </ScrollView>
      </Content>

    </Container>
  }
}

// class OptionPicker extends React.Component{
//   render(){
//     var str = '';
//     for(i=0;i<this.props.option.length;i++){
//       if((this.props.option.length-1) != i ){
//         str = str + this.props.option[i].value;
//       }else{
//         str = str + this.props.option[i].value+' | ';
//       }
//     }
//     return(
//       <Picker.Item label={str} value={this.props.key + '_' + this.props.index} />
//       )

//   }
// }
