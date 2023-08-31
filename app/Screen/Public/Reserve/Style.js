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
    reserveShow: {
        paddingTop: 30,
    },
    reserveForm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1
    },
    movieName: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
    },
    moviePlace: {
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        marginVertical: 5
    },
    movieTime: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        marginBottom: 15
    },
    boxOffice: {
        alignSelf: 'center'
    },
    movieSeats: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        alignSelf: 'center'
    },
    movieBox: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 10
    },
    paymentInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    paymentDesc: {
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
    },
    paymentDetail:{
        paddingHorizontal: 15,
        marginTop: 15,
        borderColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1
    },
    paymentTotal:{
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        marginBottom: 10
    },
    cardPayment:{
        flexDirection: 'row',
        paddingVertical: 15
    },
    paymentMode:{
        marginLeft: 10,
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12
    },
    cardIcon:{
        alignSelf: 'center',
        fontSize: 18,
        color: 'rgba(0,0,0,0.5)',
    },
    payBtn: {
        backgroundColor: '#4A90E2',
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    payBtnText:{
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14
    },
}