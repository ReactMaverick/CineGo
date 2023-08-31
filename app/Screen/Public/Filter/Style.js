const React = require("react-native");
const { Platform } = React;

export default {
   
    /* City */
    caption:{
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.1)',
        padding: 15
    },
    captionDesc: {
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14
    },
    searchIcon:{
        alignSelf: 'center',
        color: 'rgba(0,0,0,0.5)',
        fontSize: 20
    },
    filterDesc:{
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        padding: 15,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    checkboxRow:{
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    checkboxDesc:{
        alignSelf: 'center',
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12
    },
}