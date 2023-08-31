const React = require("react-native");
const { Platform } = React;

export default {

    navLeft: {
        flexDirection: 'row',
        margin: 5
    },
    navLeftDesc: {
        alignSelf: 'center',
        color: '#4A90E2',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        marginHorizontal: 10
    },
    settings: {
    },
    settingsCaption:{
        fontSize: 12,
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        padding: 15,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    settingsInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1
    },
    settingsView: {
        flex: 6
    },
    settingsDesc: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Montserrat-Regular',
    },
    settingsList: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Montserrat-Regular',
        marginBottom: 10
    },
    conditionChange: {
        alignSelf: 'center',
    },
}