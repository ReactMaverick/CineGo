import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, Share, ImageBackground, FlatList } from 'react-native'
import { Container, Header, Footer, Content, Button, Icon, Text, Title, View, Item } from 'native-base'

import NavigationService from '@Service/Navigation'

import CAST from './Cast'
import FUN from './Fun'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Detail/Style'

export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            item: this.props.navigation.getParam('item'),
            redirect: this.props.navigation.getParam('redirect')
         
        }
        console.log(this.state.item);
    }
    onShare = () => {
        Share.share({
            message:
                'React Native | A framework for building native apps using React',
        })
    }
    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
    }
    _goBack(){
        if(this.state.redirect=="Home"){
            NavigationService.navigate('PublicHome')
        }if(this.state.redirect=="Event"){
            NavigationService.navigate('PublicEvents')
        }
        if(this.state.redirect=="Listing"){
            NavigationService.navigate('PublicListing')
        }
    }
    render() {
        var imgUrl ="https://demo.ticketstake.com/img/default.jpg";
        if(this.state.item.logo!=null){
            imgUrl = "https://demo.ticketstake.com"+this.state.item.logo.url;
        }
        return <Container>
            <StatusBar backgroundColor="#9013FE" animated barStyle="light-content" />
            <ImageBackground source={{ uri: imgUrl }} style={Styles.detailImg} >
                <View style={Styles.navigation}>
                    <Icon name='ios-arrow-back' type="Ionicons" style={Styles.navLeftIcon} onPress={() => {
                    //    this.state.redirect=="Home"? NavigationService.navigate('PublicHome'):NavigationService.navigate('PublicEvents')
                    this._goBack();
                    }} />
                    <Text style={Styles.navRightDesc} onPress={this.onShare}>SHARE</Text>
                </View>
            </ImageBackground>
            <Content contentContainerStyle={Style.layoutDefault}>
                <View style={Styles.detail}>
                    <View style={Styles.detailMain}>
                <Text style={Styles.detailTitle}>{this.state.item.name}</Text>
                        <View>
                            <View style={Styles.detailRow}>
                                <Icon name="favorite" type="MaterialIcons" style={Styles.detailIcon} />
                                <Text style={Styles.detailReview}>61%</Text>
                            </View>
                            <Text style={Styles.detailVotes}>3,145 votes</Text>
                        </View>
                    </View>
                    <View>
                    <View style={Styles.movieDate}>
                    <DateFormat startDate={this.state.item.start_date} />
                    </View>
                    </View>
                   
                {/* <Text style={Styles.detailDesc}>{this.state.item.start_date+" "+this.state.item.start_time}</Text> */}
                    {/* <Text style={Styles.detailTime}>2h 18 min | Crime,Suspense,Thriller</Text>
                    <Text style={Styles.detailLang}>English, Tamil & Hindi</Text> */}
                    <View style={Styles.detailDimensRow}>
                    {this.state.item.categories.map((mapItem, key) => (
                      <Text key={key} style={Styles.detailDimens}>{mapItem.name}</Text>
                    ))}
                        
                        {/* <Text style={Styles.detailDimens}>2D</Text> */}
                    </View>
                    {/* <View>
                        <Text style={Styles.offer}>Applicable Offers</Text>
                        <View style={Styles.offerDetail}>
                            <Text style={Styles.offerDesc}>Googlepay cashback offer</Text>
                            <Text style={Styles.offerprice}>Get rewards upto Rs.300</Text>
                        </View>
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
                            <TouchableOpacity style={Styles.funGroup} onPress={() => { NavigationService.navigate('PublicBuzz') }}>
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
            <TouchableOpacity onPress={() => { NavigationService.navigate('PublicBooking') }}>
                <Footer style={Styles.ftrTab}>
                    <Icon name="ticket" type="Entypo" style={Styles.ftrIcon} />
                    <Text style={Styles.ftrDesc}>Book Tickets</Text>
                    <Icon name="md-arrow-forward" type="Ionicons" style={Styles.ftrIcon} />
                </Footer>
            </TouchableOpacity>

        </Container >
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
  