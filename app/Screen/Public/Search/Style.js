const React = require("react-native");
const { Platform } = React;

export default {
    /* Search */
    search: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        borderRadius: 20,
        height: 30,
        backgroundColor: '#FFF',
        borderWidth: 0,
        paddingHorizontal: 15
    },
    searchCity: {
        flex: 1,
        fontFamily: 'Montserrat-Regular',
        fontSize: 11
    },
    searchIcon: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'rgba(0,0,0,0.5)',
        marginLeft: 10
    },
    /* City */
    searchBtn: {
        marginVertical: 15,
        
    },
    searchList: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 11,
        fontFamily: 'Montserrat-SemiBold',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginLeft: 10,
        backgroundColor: 'rgba(255,255,255,0.2)'
    },
    captionDesc: {
        color: 'rgba(0,0,0,0.7)',
        backgroundColor: 'rgba(0,0,0,0.1)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        padding: 15
    },
    trends: {
        flexDirection: 'row',
        padding: 15,
        borderColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1
    },
    trendIcon: {
        fontSize: 20,
        color: 'rgba(0,0,0,0.6)',
    },
    trendDesc: {
        color: 'rgba(0,0,0,0.7)',
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        marginLeft: 5
    },
}