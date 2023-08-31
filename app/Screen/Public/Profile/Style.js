const React = require("react-native");
const { Platform } = React;

export default {

    profileRight: {
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 15
    },
    profileNum: {
        alignSelf: 'center',
        color: '#FFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        marginHorizontal: 10
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginVertical: 5
    },
    profileMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    profileLocation: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12
    },
    profileChange:{
        color: '#FFF',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
    },
    profileDesc:{
        padding: 20,
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },

}