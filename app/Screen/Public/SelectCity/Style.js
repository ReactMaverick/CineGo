const React = require("react-native");
const { Platform } = React;

export default {
    /* Search */
    search: {
        flexDirection: 'row',
        margin: 15,
        borderRadius: 30,
        height: 40,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1
    },
    searchCity: {
        flex: 1
    },
    searchIcon: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'rgba(0,0,0,0.3)',
        marginLeft: 10
    },
    /* City */
    captionDesc: {
        color: 'rgba(0,0,0,0.7)',
        backgroundColor: 'rgba(0,0,0,0.1)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        padding: 10
    },
    selectCity: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        borderColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
        borderRightWidth: 1
    },
    cityImg: {
        marginBottom: 10,
    },
    cityCaption: {
        color: '#333',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        textAlign: 'center'
    },
    cityList:{
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: 'rgba(0,0,0,0.7)',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
}