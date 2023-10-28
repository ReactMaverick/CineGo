import React from 'react'
import { StatusBar, TouchableOpacity, Image, ImageBackground, FlatList } from 'react-native'
import { Container, Header, Content, Icon, Text, View, Tab, Tabs, ScrollableTab } from 'native-base'
import Spinner from "react-native-loading-spinner-overlay";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Events/Style'
import {EVENT_LIST} from '../../../api/ApiConfig';
export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventCategory:[],
      eventCategoryList:[]
    }
  }
  componentDidMount(){
    this._getEventDetails();
  }

  _getEventDetails = async () =>{
    
    await this.setState({ isLoading: true });
    fetch(EVENT_LIST, {
      method: "GET",
      headers: {      
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
      //  console.log(responseJson);
      var eventCat = this.state.eventCategory;
      var eventList = [];
        for(i=0;i<responseJson.data.length;i++){
          if(responseJson.data[i].type=="listing" && responseJson.data[i].active==0){
            for(cat=0;cat<responseJson.data[i].categories.length;cat++){
           
              if(eventList.indexOf(responseJson.data[i].categories[cat].name) == -1){
               eventList.push(responseJson.data[i].categories[cat].name);
              }
              if(eventCat[responseJson.data[i].categories[cat].name]==undefined){
               eventCat[responseJson.data[i].categories[cat].name] =[];
              }
             eventCat[responseJson.data[i].categories[cat].name].push(responseJson.data[i])
            }
          }
        }
        this.setState({eventCategory:eventCat});       
        this.setState({eventCategoryList:eventList});
      
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }


  render () {
    const { navigation } = this.props;
    return <Container>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#00462D' animated barStyle='light-content' />
        <Spinner visible={this.state.isLoading} />
        <ImageBackground source={require('@Asset/images/menubg.png')} style={Style.navigationBar}>
          <View style={Style.navLeft}>
            <Image source={require('@Asset/images/menu.png')} />
          </View>
          <View style={Style.navMiddle}>
            <TouchableOpacity onPress={() => {
			  navigation.navigate('Home')
			}}
			>
				<Text style={Style.navMiddleTextats}>Ticketsat.com</Text>
				<Image source={require('@Asset/images/tats_logo.png')} style={Style.navMiddleLogo}/>
			</TouchableOpacity>
          </View>
          <View style={Style.navRight} />
        </ImageBackground>
      </Header>
     
      <Content contentContainerStyle={Style.layoutDefault}>
      <View style={Styles.inBg}>
      <Tabs
                tabBarUnderlineStyle={{ backgroundColor: '#CCC' }}
                renderTabBar={() => <ScrollableTab style={{ backgroundColor: '#CCC', marginHorizontal: 20, marginVertical: 5 }} />}
              >

                {this.state.eventCategoryList.map((item1, index) => (
                  
                  <Tab
                    style={{ backgroundColor: 'transparent' }} heading={item1}
                    tabStyle={Styles.movietabStyle}
                    textStyle={Styles.movietextStyle}
                    activeTabStyle={Styles.movieactiveTabStyle}
                    activeTextStyle={Styles.movieactiveTextStyle}
                  >


                    <FlatList
                      data={this.state.eventCategory[item1]}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({ item, separators }) => (
                        <View style={Styles.movieLayout}>
                          <TouchableOpacity
                            style={Styles.movieGroup} onPress={() => {
                              navigation.navigate('PublicDetail', { item: item, redirect: 'Listing' })
                            }}
                          >

                            <EventImage ImageData={item.logo} />


                          </TouchableOpacity>
                          <View style={Styles.movieForm}>
                            <View style={Styles.movieDate}>

                              <DateFormat startDate={item.start_date} />
                              {/*<Text style={Styles.eventMonth}>{item.month}</Text>
                            <Text style={Styles.eventDate}>{item.date}</Text>
                            <Text style={Styles.eventDay}>{item.day}</Text> */}
                            </View>
                            <View >
                              <Text style={Styles.movieName}>{item.name}</Text>
                              {/* <Text style={Styles.movieLang}>{ item.description}</Text> */}
                              <Description description={item.description} />
                            </View>
                            <TouchableOpacity style={Styles.eventBooking} onPress={() => {
                                    AsyncStorage.getItem("userData").then((value) => {
                                        var user_data = JSON.parse(value);
                                        if (user_data == null) {
                                            navigation.navigate('PublicSignIn', { item: item })
                                        } else {
                                            navigation.navigate('PublicBooking', { item: item })
                                        }
                                    })
                                  }}>
                                <Text style={Styles.movieBooking}>Tickets</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      )}
                    />

                  </Tab>

                ))}



              </Tabs>
        </View>
            
     </Content>
	 <View style={Style.footerBg}>
        <View style={Style.fTab}>
          <TouchableOpacity
            style={Style.fIcons} onPress={() => {
              navigation.navigate('Home')
            }}
          >
            <Icon name='home' type='FontAwesome' style={Style.iconInactive} />
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.fIcons} onPress={() => {
              navigation.navigate('PublicEvents')
            }}
          >
            <Icon name='event' type='MaterialIcons' style={Style.iconInactive} />

          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            AsyncStorage.getItem("userData").then((value) => {
                var user_data = JSON.parse(value);
                if (user_data == null) {
                    navigation.navigate('PublicSignIn')
                } else {
                  navigation.navigate('Listing')
                }
            })
          }}>
            <Icon name="list" type='Entypo' style={Style.iconActive} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            AsyncStorage.getItem("userData").then((value) => {
                var user_data = JSON.parse(value);
                if (user_data == null) {
                    navigation.navigate('PublicSignIn')
                } else {
                  navigation.navigate('PublicOrders')
                }
            })
          }}>
            <Icon name='shopping-basket' type='FontAwesome' style={Style.iconInactive} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            AsyncStorage.getItem("userData").then((value) => {
                var user_data = JSON.parse(value);
                if (user_data == null) {
                    navigation.navigate('PublicSignIn')
                } else {
                  navigation.navigate('PublicProfile')
                }
            })
          }}>
            <Icon name='user-o' type='FontAwesome' style={Style.iconInactive} />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  }
}

 class EventImage extends React.Component{
 
  render(){
    //console.log(this.props.ImageData)
    if(this.props.ImageData!=null){
      return(
        <Image source={{ uri: this.props.ImageData.url }} style={Styles.movieImg} />
        )
     }else{
      return(
        <Image source={{ uri: "https://www.ticketsat.com/img/default.jpg" }} style={Styles.movieImg} />
        )
     }
  }
   
}



class Description extends React.Component{
 
  render(){
  //  console.log(this.props.description)
    var description  = this.props.description.substring(0,70);
    return(
    <Text style={[Styles.movieLang,{width:170}]}>{description}</Text>
      )
  }
   
}


class DateFormat extends React.Component{
 
  render(){
   var startDate = this.props.startDate;
   var newDate = startDate.split("-");
  
   var monthArr = {'01':'Jan','02':'Feb','03':'Mar','04':'Apr','05':'May','06':'June','07':'July','08':'Aug','09':'Sept','10':'Oct','11':'Nov','12':'Dec'};
   var Day = newDate[2];
   var Month = monthArr[ newDate[1]];
   var Year = newDate[0];
   return(
     <View>
        <Text style={Styles.eventDate}>{Day}</Text>
   <Text style={[Styles.eventMonth,{textAlign:'center'}]}>{Month}</Text>
        <Text style={Styles.eventDate}>{Year}</Text>
     </View>
   )
   
  }
   
}