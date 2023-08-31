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
    paymentInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.1)',
        padding: 15
    },

    amountDesc: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
    },
    amount: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
    },
    paymentDetails: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 10
    },
    cardDetails: {        
    },
    reserveForm: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1
    },
    cardPayment: {
        flexDirection: 'row',
        paddingVertical: 15
    },
    paymentMode: {
        marginLeft: 10,
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12
    },
    cardIcon: {
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