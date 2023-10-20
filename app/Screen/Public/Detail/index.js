import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, Share, ImageBackground, Linking } from 'react-native'
import { Container, Header, Footer, Content, Button, Icon, Text, Title, View, Item } from 'native-base'

import NavigationService from '@Service/Navigation'

import CAST from './Cast'
import FUN from './Fun'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Detail/Style'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RELEASE_ALL } from '../../../api/ApiConfig';
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.route.params.item,
            redirect: this.props.route.params.redirect
        };
    }
    componentDidMount() {
		/*
        console.log("ROUTE ITEM: ",this.props.route.params.item);
        AsyncStorage.clear();
        AsyncStorage.getItem('userData').then((value) => {
            console.log("userD::::::",JSON.parse(value));
        })
          
        */
        
	}
	
	onShare = () => {
        Share.share({
            message:
                'Fancy some tickets for '+this.state.item.name+'. Get them on the Ticketsat.com mobile app',
        })
    }
    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
    }
    _goBack() {
        if (this.state.redirect == "Home") {
            navigation.navigate('PublicHome')
        } if (this.state.redirect == "Event") {
            navigation.navigate('PublicEvents')
        }
        if (this.state.redirect == "Listing") {
            navigation.navigate('PublicListing')
        }
    }


    _releaseAll = async () => {

    
        fetch(RELEASE_ALL, {
          method: "POST",
          headers: {
            // 'Authorization': 'Bearer ' + this.state.user_data.token,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then((response) => response.json())
          .then((responseJson) => {
          //  console.log("responseJson", responseJson);
        
    
          })
          .catch((error) => console.log(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
    
      }
    


    // _setVenue = async (venue) => {
    //     this.setState({ venueIndex: venue });
    // }
    render() {
        const { navigation } = this.props;
		var imgUrl = "https://rest.ticketstake.com/img/default.jpg";
        if (this.state.item.logo != null) {
            imgUrl = this.state.item.logo.url;
        }
        return <Container>
            <StatusBar backgroundColor="#00462d" animated barStyle="light-content" />
            <ImageBackground source={{ uri: imgUrl }} style={Styles.detailImg} >
                <View style={Styles.navigation}>
                <Icon name='arrow-left' type='FontAwesome' style={Styles.navLeftIcon} onPress={() => {
                        this.state.redirect=="Home"? navigation.navigate('PublicHome'):navigation.navigate('PublicEvents')
                        //this._goBack();
                    }} />
                    
                    <Text style={Styles.navRightDesc} onPress={this.onShare}>Share</Text>
                </View>
            </ImageBackground>
            <Content contentContainerStyle={Style.layoutDefault}>
                <View style={Styles.detail}>
                    <View style={Styles.detailMain}>                        
                        <View>
                            <View style={Styles.movieDate}>
                                <DateFormat startDate={this.state.item.start_date} />
                            </View>
                        </View>
                        <Text style={Styles.detailTitle}>{this.state.item.name}</Text>
                        <View>
                            {this.state.item.categories.map((mapItem, key) => (
                                <Text key={key} style={Styles.detailDimens}>{mapItem.name}</Text>
                            ))}
                            <View style={Styles.smn}>
                                <TouchableOpacity style={[Styles.smnBtn, Styles.smnFacebook]}>
                                    <Icon name='facebook' type='FontAwesome' style={Styles.smnIcon} onPress={() => {
                                        Linking.openURL(this.state.item.facebook)
                                    }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={[Styles.smnBtn, Styles.smnTwitter]}>
                                    <Icon name='twitter' type='FontAwesome' style={Styles.smnIcon} onPress={() => {
                                        Linking.openURL(this.state.item.twitter)
                                    }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={[Styles.smnBtn, Styles.smnChrome]}>
                                    <Icon name='chrome' type='FontAwesome' style={Styles.smnIcon} onPress={() => {
                                        Linking.openURL(this.state.item.other)
                                    }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* <Text style={Styles.detailDesc}>{this.state.item.start_date+" "+this.state.item.start_time}</Text> */}
                    {/* <Text style={Styles.detailTime}>2h 18 min | Crime,Suspense,Thriller</Text>
                    <Text style={Styles.detailLang}>English, Tamil & Hindi</Text> */}
                    
                    {/* <View>
                        <Text style={Styles.offer}>Venue</Text>

                        {this.state.item.venue.map((item, index) => (
                            <TouchableOpacity style={[this.state.venueIndex == index ? Styles.offerDetailActive : Styles.offerDetail, { marginBottom: 10 }]} onPress={() => { this._setVenue(index) }}>
                                <Text style={Styles.offerDesc}>{item.name + "," + item.address + "," + item.city + "," + item.county + "," + item.country}</Text>
                            </TouchableOpacity>
                        ))}

                    </View> */}
                </View>
                <View style={Styles.bgImg}>
                    {/* <View style={Styles.detailMain}>
                        <View>
                            <View style={Styles.detailRow}>
                                <Icon name="thumb-up" type="MaterialIcons" style={Styles.detailIcon} />
                                <Text style={Styles.detailReview}>219k</Text>
                            </View>
                            <Text style={Styles.detailVotes}>Interested</Text>
                        </View>
                        <TouchableOpacity style={Styles.detailLikeRow}>
                            <Icon name="thumb-up" type="MaterialIcons" style={Styles.detailLikeIcon} />
                            <Text style={Styles.detailLike}>Interested</Text>
                        </TouchableOpacity>
                    </View> */}
                    <View>
                        <Text style={Styles.movieDesc}>{this.state.item.description}</Text>
                    </View>
                    {/* <View>
                        <Text style={Styles.offer}>Cast</Text>
                    </View> */}
                    {/* <FlatList
                        data={CAST}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, separators }) => (
                            <View style={Styles.castForm}>
                                <Image source={{ uri: item.image }} style={Styles.castImg} />
                                <Text style={Styles.castName}>{item.name}</Text>
                            </View>
                        )}
                    /> */}
                    {/* <View style={Styles.caption}>
                        <Text style={Styles.captionDesc}>Recommended Movies</Text>
                        <Text style={Styles.captionDescAll}>View All</Text>
                    </View> */}
                    {/* <FlatList
                        data={FUN}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, separators }) => (
                            <TouchableOpacity style={Styles.funGroup} onPress={() => { navigation.navigate('PublicBuzz') }}>
                                <Image source={{ uri: item.image }} style={Styles.funImg} />
                                <Text style={Styles.funDesc}>{item.desc}</Text>
                                <View style={Styles.funRow}>
                                    <Icon name="favorite" type="MaterialIcons" style={Styles.funIcon} />
                                    <Text style={Styles.funReview}>61%</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    /> */}

                </View>
            </Content>
            <TouchableOpacity onPress={() => {
                AsyncStorage.getItem("userData").then((value) => {
                    this._releaseAll();
                    var user_data = JSON.parse(value);
                    if (user_data == null) {
                        navigation.navigate('PublicSignIn', { item: this.state.item })
                    } else {
                        navigation.navigate('PublicBooking', { item: this.state.item })
                    }
                })

            }}>
                <Footer style={Styles.ftrTab}>
                    <Icon name="ticket" type="Entypo" style={Styles.ftrIcon} />
                    <Text style={Styles.ftrDesc}>Book Tickets</Text>
                    <Icon name="md-arrow-forward" type="Ionicons" style={Styles.ftrIcon} />
                </Footer>
            </TouchableOpacity>

        </Container >
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
