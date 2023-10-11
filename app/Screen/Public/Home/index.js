import React from 'react'
import { StatusBar, TouchableOpacity, Image, ImageBackground, FlatList,Text, View } from 'react-native'
import { Container, Header, Content, Icon,  Tab, Tabs, ScrollableTab } from 'native-base'
import Spinner from "react-native-loading-spinner-overlay";
import NavigationService from '@Service/Navigation'

import SHOWS from './Shows'
// import FUN from './Fun'
// import EVENTS from './Events'
// import ACTIVITIES from './Activities'
// import SPORTS from './Sports'
// import MOVIES from './Movies'
// import MOVIESUP from './MoviesUp'
// import EVENTLIST from './EventList'

// import Advent from './Advent'

import Style from '../../../Theme/Style'
import Styles from './Style'
import { EVENT_LIST } from '../../../api/ApiConfig';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      events: [],
      listings: [],
      eventCategory: [],
      eventCategoryList: [],
      listingCategory: [],
      listingCategoryList: [],
      
    }
  }

  componentDidMount() {
    this._getEventDetails();
    this._getEventPageList();
    
  }

  _getEventDetails = async () => {

    await this.setState({ isLoading: true });
    fetch(EVENT_LIST, {
      method: "GET",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        var data = [];
        var eventCount = 1;
        for (i = 0; i < responseJson.data.length; i++) {
          if (eventCount <= 10) {
            if (responseJson.data[i].type == "event" && responseJson.data[i].active == 0) {
              data.push(responseJson.data[i])
              eventCount++;
            }
          }
        }
        this.setState({ events: data });


        var listingData = [];
        var lisingCount = 1;
        for (j = 0; j < responseJson.data.length; j++) {
          if (lisingCount <= 10) {
            if (responseJson.data[j].type == "listing" && responseJson.data[j].active == 0) {
              listingData.push(responseJson.data[j])
              lisingCount++;
            }
          }
        }
        this.setState({ listings: listingData });
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  _getEventPageList = async () => {


    // await this.setState({ isLoading: true });
    fetch(EVENT_LIST, {
      method: "GET",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //  console.log(responseJson);
        // var data = [];
        // var Listings = [];
        var eventCat = [];
        var eventList = [];
        var listingCat = [];
        var listingList = [];
        for (i = 0; i < responseJson.data.length; i++) {
          if (responseJson.data[i].type == "event" && responseJson.data[i].active == 0) {

            for (cat = 0; cat < responseJson.data[i].categories.length; cat++) {
              if (eventList.indexOf(responseJson.data[i].categories[cat].name) == -1) {
                eventList.push(responseJson.data[i].categories[cat].name);
              }

              if (eventCat[responseJson.data[i].categories[cat].name] == undefined) {
                eventCat[responseJson.data[i].categories[cat].name] = [];
              }
              eventCat[responseJson.data[i].categories[cat].name].push(responseJson.data[i])
            }
            // data.push(responseJson.data[i])
          }
          if (responseJson.data[i].type == "listing" && responseJson.data[i].active == 0) {
            for (cat = 0; cat < responseJson.data[i].categories.length; cat++) {
              if (listingList.indexOf(responseJson.data[i].categories[cat].name) == -1) {
                listingList.push(responseJson.data[i].categories[cat].name);
              }

              if (listingCat[responseJson.data[i].categories[cat].name] == undefined) {
                listingCat[responseJson.data[i].categories[cat].name] = [];
              }
              listingCat[responseJson.data[i].categories[cat].name].push(responseJson.data[i])
            }
          }
        }
        this.setState({ eventCategory: eventCat });
        this.setState({ eventCategoryList: eventList });
        this.setState({ listingCategory: listingCat });
        this.setState({ listingCategoryList: listingList });

        // this.setState({listings:Listings});
        // console.log(this.state.eventCategory);

      })
      .catch((error) => console.log(error))
      .finally(() => {
        //  this.setState({ isLoading: false });
      });
  }


  render() {
    return <Container>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#9013FE' animated barStyle='light-content' />
        <ImageBackground source={require('@Asset/images/menubg.png')} style={Style.navigationBar}>
          <View style={Style.navLeft}>
            <TouchableOpacity onPress={() => {
              NavigationService.openDrawer()
            }}
            >
              <Image source={require('@Asset/images/menu.png')} />
            </TouchableOpacity>
          </View>
          <View style={Style.navMiddle}>
            <Text style={Style.navMiddleText}>cinegorntheme</Text>
          </View>
          <View style={Style.navRight} />
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <Spinner visible={this.state.isLoading} />

        <Tabs
          initialPage={0}
          locked tabBarUnderlineStyle={{ backgroundColor: '#111' }}
          renderTabBar={() => <ScrollableTab style={{ backgroundColor: '#111' }} />}
        >
          <Tab
            heading='Home'
            tabStyle={Styles.tabStyle}
            textStyle={Styles.textStyle}
            activeTabStyle={Styles.activeTabStyle}
            activeTextStyle={Styles.activeTextStyle}
          >
            <View style={Style.layoutDefault}>
              <View>
                <FlatList
                  data={SHOWS}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, separators }) => (
                    // <TouchableOpacity
                    //   style={Styles.myShows} onPress={() => {
                    //     NavigationService.navigate('PublicDetail')
                    //   }}
                    // >
                    <TouchableOpacity
                      style={Styles.myShows}
                    >
                      <Image source={{ uri: item.image }} style={Styles.showImg} />
                      <View style={Styles.showBgMain} />
                      <View style={Styles.showBg}>
                        <Text style={Styles.showDesc}>{item.desc}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>


              <View style={Styles.entertainment}>
                <View style={Styles.caption}>
                  <Text style={Styles.captionDesc}>Events</Text>
                  <TouchableOpacity style={Styles.captionBtn} onPress={() => { NavigationService.navigate('PublicEvents') }}>
                    <Text style={Styles.captionDescAll}>VIEW ALL</Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={this.state.events}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, separators }) => (
                    <View style={Styles.funGroup}>
                      <TouchableOpacity onPress={() => {
                        NavigationService.navigate('PublicDetail', { item: item, redirect: 'Home' })
                      }}
                      >
                        {/* <Image source={{ uri: item.image }} style={Styles.funImg} /> */}
                        <EventImage ImageData={item.logo} />
                      </TouchableOpacity>
                      <Text style={Styles.funDesc}>{item.name}</Text>
                      <View style={Styles.funRow}>
                        <Icon name='favorite' type='MaterialIcons' style={Styles.funIcon} />
                        <Text style={Styles.funReview}>61%</Text>
                      </View>
                    </View>
                  )}
                />
              </View>

              <View style={Styles.entertainment}>
                <View style={Styles.caption}>
                  <Text style={Styles.captionDesc}>Listings</Text>
                  <TouchableOpacity style={Styles.captionBtn} onPress={() => { NavigationService.navigate('PublicListing') }}>
                    <Text style={Styles.captionDescAll}>VIEW ALL</Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={this.state.listings}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, separators }) => (
                    <TouchableOpacity
                      style={Styles.funGroup} onPress={() => {
                        NavigationService.navigate('PublicDetail', { item: item, redirect: 'Home' })
                      }}
                    >
                      {/* <Image source={{ uri: item.image }} style={Styles.funImg} /> */}
                      <EventImage ImageData={item.logo} />
                      <Text style={Styles.funDesc}>{item.name}</Text>
                      <View style={Styles.funRow}>
                        <Icon name='favorite' type='MaterialIcons' style={Styles.funIcon} />
                        <Text style={Styles.funReview}>61%</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>

            </View>
          </Tab>
          <Tab
            heading='Events'
            tabStyle={Styles.tabStyle}
            textStyle={Styles.textStyle}
            activeTabStyle={Styles.activeTabStyle}
            activeTextStyle={Styles.activeTextStyle}
          >

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
                    key={index}
                  >


                    <FlatList
                      data={this.state.eventCategory[item1]}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({ item, separators }) => (
                        <View style={Styles.movieLayout}>
                          <TouchableOpacity
                            style={Styles.movieGroup} onPress={() => {
                              NavigationService.navigate('PublicDetail', { item: item, redirect: 'Home' })
                            }}
                          >

                            <EventImageBig ImageData={item.logo} />


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
                            <TouchableOpacity style={Styles.eventBooking}>
                              <Text style={Styles.movieBooking}>Book</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={Styles.movieForm}>
                            <Text style={Styles.eventDescBorder}>{item.categories.length != 0 ? item.categories[0].name : ""}</Text>
                            <Text style={Styles.eventDesc}>{item.price != null ? item.price : ""}</Text>
                          </View>
                        </View>
                      )}
                    />

                  </Tab>

                ))}



              </Tabs>
            </View>
          </Tab>

          <Tab
            heading='Listings'
            tabStyle={Styles.tabStyle}
            textStyle={Styles.textStyle}
            activeTabStyle={Styles.activeTabStyle}
            activeTextStyle={Styles.activeTextStyle}
          >

            <View style={Styles.inBg}>
              <Tabs
                tabBarUnderlineStyle={{ backgroundColor: '#CCC' }}
                renderTabBar={() => <ScrollableTab style={{ backgroundColor: '#CCC', marginHorizontal: 20, marginVertical: 5 }} />}
              >

                {this.state.listingCategoryList.map((item1, index) => (

                  <Tab
                    style={{ backgroundColor: 'transparent' }} heading={item1}
                    tabStyle={Styles.movietabStyle}
                    textStyle={Styles.movietextStyle}
                    activeTabStyle={Styles.movieactiveTabStyle}
                    activeTextStyle={Styles.movieactiveTextStyle}
                  >


                    <FlatList
                      data={this.state.listingCategory[item1]}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({ item, separators }) => (
                        <View style={Styles.movieLayout}>
                          <TouchableOpacity
                            style={Styles.movieGroup} onPress={() => {
                              NavigationService.navigate('PublicDetail', { item: item, redirect: 'Home' })
                            }}
                          >

                            <EventImageBig ImageData={item.logo} />


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
                            <TouchableOpacity style={Styles.eventBooking}>
                              <Text style={Styles.movieBooking}>Book</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={Styles.movieForm}>
                            <Text style={Styles.eventDescBorder}>{item.categories.length != 0 ? item.categories[0].name : ""}</Text>
                            <Text style={Styles.eventDesc}>{item.price != null ? item.price : ""}</Text>
                          </View>
                        </View>
                      )}
                    />

                  </Tab>

                ))}



              </Tabs>
            </View>

          </Tab>
        </Tabs>
      </Content>

      <View style={Style.footerBg}>
        <View style={Style.fTab}>
          <TouchableOpacity
            style={Style.fIcons} onPress={() => {
              NavigationService.navigate('PublicHome')
            }}
          >
            <Icon name='home' type='FontAwesome' style={Style.iconActive} />
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.fIcons} onPress={() => {
              NavigationService.navigate('PublicSearch')
            }}
          >
            <Icon name='search' type='MaterialIcons' style={Style.iconInactive} />

          </TouchableOpacity>
          <TouchableOpacity
            style={Style.fIcons} onPress={() => {
              NavigationService.navigate('PublicBooking')
            }}
          >
            <Icon name='headphones' type='MaterialCommunityIcons' style={Style.iconInactive} />
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.fIcons} onPress={() => {
              NavigationService.navigate('PublicBuzz')
            }}
          >
            <Icon name='flame' type='Octicons' style={Style.iconInactive} />
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.fIcons} onPress={() => {
              NavigationService.navigate('PublicProfile')
            }}
          >
            <Icon name='user-o' type='FontAwesome' style={Style.iconInactive} />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  }
}

class EventImage extends React.Component {

  render() {
    //console.log(this.props.ImageData)
    if (this.props.ImageData != null) {
      return (
        <Image source={{ uri: "https://demo.ticketstake.com" + this.props.ImageData.url }} style={Styles.funImg} />
      )
    } else {
      return (
        <Image source={{ uri: "https://demo.ticketstake.com/img/default.jpg" }} style={Styles.funImg} />
      )
    }
  }

}


class EventImageBig extends React.Component {

  render() {
    //console.log(this.props.ImageData)
    if (this.props.ImageData != null) {
      return (
        <Image source={{ uri: "https://demo.ticketstake.com" + this.props.ImageData.url }} style={Styles.movieImg} />
      )
    } else {
      return (
        <Image source={{ uri: "https://demo.ticketstake.com/img/default.jpg" }} style={Styles.movieImg} />
      )
    }
  }

}



class Description extends React.Component {

  render() {
    // console.log(this.props.description)
    var description = this.props.description.substring(0, 100);
    return (
      <Text style={[Styles.movieLang, { width: 150 }]}>{description}</Text>
    )
  }

}


class DateFormat extends React.Component {

  render() {
    var startDate = this.props.startDate;
    var newDate = startDate.split("-");

    var monthArr = { '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'June', '07': 'July', '08': 'Aug', '09': 'Sept', '10': 'Oct', '11': 'Nov', '12': 'Dec' };
    var Day = newDate[2];
    var Month = monthArr[newDate[1]];
    var Year = newDate[0];
    return (
      <View>
        <Text style={Styles.eventDate}>{Day}</Text>
        <Text style={[Styles.eventMonth, { textAlign: 'center' }]}>{Month}</Text>
        <Text style={Styles.eventDate}>{Year}</Text>
      </View>
    )

  }

}