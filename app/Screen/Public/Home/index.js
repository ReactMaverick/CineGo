import React from 'react'
import { StatusBar, TouchableOpacity, Image, ImageBackground, FlatList, Text, View,RefreshControl } from 'react-native'
import { Container, Header, Content, Icon, Tab, Tabs, ScrollableTab } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from "react-native-loading-spinner-overlay";
import { useNavigation } from '@react-navigation/native';
import Style from '../../../Theme/Style'
import Styles from './Style'
import { EVENT_LIST } from '../../../api/ApiConfig';
import { FEATURED_LIST } from '../../../api/ApiConfig';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      refreshing: false,
      showListings: false,
      events: [],
      listings: [],
      featured: [],
      eventCategory: [],
      eventCategoryList: [],
      listingCategory: [],
      listingCategoryList: [],

    }
  }

  componentDidMount() {
    //AsyncStorage.clear();
    this._getEventDetails();
    this._getEventPageList();
    this._getFeaturedDetails();
  }

  _getFeaturedDetails = async () => {
    if(this.state.refreshing==false){
      await this.setState({ isLoading: true });
    }
    

    fetch(FEATURED_LIST, {
      method: "GET",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      var data = [];
      var eventCount = 1;
      console.log(responseJson.featured);          
      for (i = 0; i < responseJson.featured.length; i++) {
          data.push(responseJson.featured[i])
          eventCount++;
      }
      this.setState({ featured: data });
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
        this.setState({refreshing: false});
      });
  }
  
  _getEventDetails = async () => {
	if(this.state.refreshing==false){
      await this.setState({ isLoading: true });
    }
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
        if (lisingCount>1) this.setState({showListings: true});
		this.setState({ listings: listingData });
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
        this.setState({refreshing: false});
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

	_onRefresh = () => {
		this.setState({refreshing: true});
		this._getEventDetails();
		this._getEventPageList();
		this._getFeaturedDetails();
	}
	
	_renderListingTab(index) {
    if (this.state.showListings) {
		
    const { navigation } = this.props;
      return (
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
                              navigation.navigate('PublicDetail', { item: item, redirect: 'Home' })
                            }}
                          >

                            <EventImageBig ImageData={item.logo} />


                          </TouchableOpacity>
                          <View style={Styles.detail}>
								<View style={Styles.detailMain}>                        
									<Title description={item.name} />
									<View>
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
							</View><View style={Styles.detail}>
								<View style={Styles.detailMain}>                        
									<DescriptionList description={item.description} />
									<View>
									<View style={Styles.movieDate}>
									<DateFormat startDate={item.start_date} />
								</View>
								</View>
							</View>
							</View>
                        </View>
                      )}
                    />

                  </Tab>

          ))}



        </Tabs>
      </View>

    </Tab>
    );
    }
  }

  _renderListings(index) {
    const { navigation } = this.props;
    if (this.state.showListings) {
      return (
        <View style={Styles.entertainment}>
                <View style={Styles.caption}>
                  <Text style={Styles.captionDesc}>Listings</Text>
                  <TouchableOpacity style={Styles.captionBtn} onPress={() => { navigation.navigate('Listing') }}>
                    <Text style={Styles.captionDescAll}>VIEW ALL</Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={this.state.listings}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, separators }) => (
                    <View style={Styles.funGroup}>
						<TouchableOpacity onPress={() => {
                        navigation.navigate('PublicDetail', { item: item, redirect: 'Home' })
                      }}
                      >
                        {/* <Image source={{ uri: item.image }} style={Styles.funImg} /> */}
                        <Title description={item.name} />
						<EventImage ImageData={item.logo} />
						</TouchableOpacity>
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
						<Text style={Styles.movieBooking}>Grab Tickets</Text>
						</TouchableOpacity>
                    </View>
                  )}
                />
				
              </View>
    );
    }
  }
  
  render() {
    const { navigation } = this.props;
    var min = 1;
	var max = 100;
    var rand =  Math.floor(Math.random() * (max - min + 1)) + min;
    return <Container>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#00462D' animated barStyle='light-content' />
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

		<Content contentContainerStyle={Style.layoutDefault} refreshControl={
			<RefreshControl
				refreshing={this.state.refreshing}
				onRefresh={this._onRefresh}
			/>
		}>
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
                  data={this.state.featured}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, separators }) => (
                    <TouchableOpacity 
                    onPress={()=>{   
                      console.log("event",this.state.events);                  
                      if(item.type=='event'){
                        var event = this.state.events;
                        for(i=0;i<event.length;i++){
                          if(event[i].id==item.listing_id){
                            console.log( event[i]);
                            navigation.navigate('PublicDetail', { item: event[i], redirect: 'Home' })
                          }
                        }                       
                      }else{
                        var listings = this.state.listings;
                        for(i=0;i<listings.length;i++){
                          if(listings[i].id==item.listing_id){
                            navigation.navigate('PublicDetail', { item: listings[i], redirect: 'Home' })
                          }
                        } 
                       
                      }
                    }}
                      style={Styles.myShows}
                    >
                      <Image source={{ uri: item.url }} style={Styles.showImg} />
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
                  <TouchableOpacity style={Styles.captionBtn} onPress={() => { navigation.navigate('Events') }}>
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
                        navigation.navigate('PublicDetail', { item: item, redirect: 'Home' })
                      }}
                      >
                        {/* <Image source={{ uri: item.image }} style={Styles.funImg} /> */}
                        <Title description={item.name} />
						<EventImage ImageData={item.logo} />
						</TouchableOpacity>
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
						<Text style={Styles.movieBooking}>Grab Tickets</Text>
						</TouchableOpacity>
					  
                    </View>
                  )}
                />
              </View>
				{this._renderListings()}
              

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
                              navigation.navigate('PublicDetail', { item: item, redirect: 'Home' })
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
                              <Title description={item.name} />
                              {/* <Text style={Styles.movieLang}>{ item.description}</Text> */}
                              <Description description={item.description} />
                            </View>
                            
							</View>
							<View style={Styles.detail}>
								<View style={Styles.detailMain}>                        
									<Text style={Styles.detailInfo}>{rand}% of allocation remaining</Text>
									<View>
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
							</View>
                        </View>
                      )}
                    />

                  </Tab>

                ))}



              </Tabs>
            </View>
          </Tab>
			{this._renderListingTab()}

              </Tabs>

      </Content>

      <View style={Style.footerBg}>
        <View style={Style.fTab}>
          <TouchableOpacity
            style={Style.fIcons} onPress={() => {
              navigation.navigate('PublicHome')
            }}
          >
            <Icon name='home' type='FontAwesome' style={Style.iconActive} />
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
                  navigation.navigate('PublicBalances')
                }
            })
          }}>
            <Icon name='money' type='FontAwesome' style={Style.iconInactive} />
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

class EventImage extends React.Component {

  render() {
    //console.log(this.props.ImageData)
    if (this.props.ImageData != null) {
      return (
        <Image source={{ uri: this.props.ImageData.url }} style={Styles.funImg} />
      )
    } else {
      return (
        <Image source={{ uri: "https://www.ticketsat.com/img/default.jpg" }} style={Styles.funImg} />
      )
    }
  }

}


class EventImageBig extends React.Component {

  render() {
    //console.log(this.props.ImageData)
    if (this.props.ImageData != null) {
      return (
        <Image source={{ uri: this.props.ImageData.url }} style={Styles.movieImg} />
      )
    } else {
      return (
        <Image source={{ uri: "https://www.ticketsat.com/img/default.jpg" }} style={Styles.movieImg} />
      )
    }
  }

}



class Description extends React.Component {

  render() {
    // console.log(this.props.description)
    var description = this.props.description.substring(0, 90);
    return (
      <Text style={[Styles.movieLang, { width: 260 }]}>{description}</Text>
    )
  }

}
class Title extends React.Component {

  render() {
    // console.log(this.props.description)
    var title = this.props.description.substring(0, 20);
    return (
      <Text style={[Styles.evName]}>{title}</Text>
    )
  }

}
class DescriptionList extends React.Component {

  render() {
    // console.log(this.props.description)
    var description = this.props.description.substring(0, 95);
    return (
      <Text style={[Styles.movieLang, { width: '70%' }]}>{description}...</Text>
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
