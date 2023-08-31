const React = require("react-native");
const { Platform } = React;

export default {

    /* buzz */
    movieBuzz: {
        marginHorizontal: 10
    },
    trend: {
        flex: 1,
        marginBottom: 10,
        marginHorizontal: 5
    },
    trendCaption: {
        fontSize: 12,
        marginHorizontal: 15,
        marginVertical: 15,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(0,0,0,0.7)',
        padding: 5,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    trendImg: {
        flex: 1,
        width: '100%',
        height: 250,
        borderRadius: 5
    },
    trendDesc: {
        width: '100%',
        position: 'absolute',
        alignSelf: 'center',
        fontSize: 11,
        backgroundColor: '#000',
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFF',
        opacity: 0.8,
        bottom: 0,
        padding: 10
    },
}