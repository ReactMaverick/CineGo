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
    bgGrey: {
        backgroundColor: '#FFF'
    },
    movieDetails: {
        margin: 10,
        backgroundColor: '#FFF',
        elevation: 10,
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOpacity: 0.1,
        shadowRadius: 5
    },
    movieImg: {
        width: 84,
        height: 84,
        marginRight: 5,
        borderRadius: 3
    },
    movieName: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        marginHorizontal: 10
    },
    movieIcon: {
        alignSelf: 'center',
        color: 'rgba(0,0,0,0.5)',
        fontSize: 18,
        marginHorizontal: 5,
    },
    movieView: {
        alignSelf: 'center',
        marginHorizontal: 5,
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        marginVertical: 10
    },
    movieRef: {
        alignSelf: 'center',
        marginHorizontal: 5,
        color: '#00a86b',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        marginVertical: 10
    },
    confirmRow: {
        flexDirection: 'row',
    },
    movieReview: {
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 11,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        borderRadius: 3,
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 1
    },
    movieList: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    movieDesc: {
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
    },
    moviePlay: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        marginTop: 10
    },
    ticketPrice: {
        marginLeft: 40,
        marginTop: 20
    },
    successBtn: {
        textAlign: 'center',
        backgroundColor: '#4A90E2',
        color: '#FFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        padding: 15
    },
    bar: {
        width: '100%',
        marginTop: 10
    },
    barDivider: {
        paddingTop: 15,
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    barCircle: {
        width: 20,
        height: 5,
        borderRadius: 10,
        backgroundColor: '#CCC'
    },
    barCode: {
        width: '100%',
        marginVertical: 15
    },
    barCodeImg: {
        height: 120,
        width: '100%'
    },


}