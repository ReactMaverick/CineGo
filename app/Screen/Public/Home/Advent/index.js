
import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, Image, ImageBackground, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, View, Tab, Tabs, ScrollableTab, ScrollView, TabHeading } from 'native-base'

import NavigationService from '@Service/Navigation'

import Styles from '@Screen/Public/Home/Style'
import EVENTLIST from '../EventList'

export default class extends React.Component {
    render() {
        return <View>
            <View style={Styles.movies}>
                <TouchableOpacity style={Styles.moviesRow}>
                    <Icon name="ios-options" type="Ionicons" style={Styles.moviesIcon} />
                    <Text style={Styles.moviesDesc}>Filters</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.moviesRow}>
                    <Icon name="place" type="MaterialIcons" style={Styles.moviesIcon} />
                    <Text style={Styles.moviesDesc}>Cinemas</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={EVENTLIST}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, separators }) => (
                    <View style={Styles.movieLayout}>
                        <View style={Styles.movieGroup}>
                            <Image source={{ uri: item.image }} style={Styles.movieImg} />
                        </View>
                        <View style={Styles.movieForm}>
                            <View>
                                <Text style={Styles.eventMonth}>{item.month}</Text>
                                <Text style={Styles.eventDate}>{item.date}</Text>
                                <Text style={Styles.eventDay}>{item.day}</Text>
                            </View>
                            <View>
                                <Text style={Styles.movieName}>{item.name}</Text>
                                <Text style={Styles.movieLang}>{item.language}</Text>
                            </View>
                            <TouchableOpacity style={Styles.eventBooking}>
                                <Text style={Styles.movieBooking}>Book</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.movieForm}>
                            <Text style={Styles.eventDescBorder}>{item.event}</Text>
                            <Text style={Styles.eventDesc}>{item.price}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    }
}
