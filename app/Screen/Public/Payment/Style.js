const React = require("react-native");
const { Platform } = React;

export default {

    navLeft: {
        flexDirection: 'row',
        margin: 5
    },
    navLeftDesc: {
        alignSelf: 'center',
        color: '#00a86b',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        marginHorizontal: 10
    },
    paymentInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#000',
        padding: 15,
    },

    amountDesc: {
        color: '#FFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 22,
		textTransform: 'uppercase',
    },
    amount: {
        color: '#FFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 22,
    },
    paymentMethods: {
        color: '#000',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
    },
    paymentDetails: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#00462d',
        borderTopWidth: 2,
        borderBottomWidth: 1,
        color: '#FFF',
        marginTop: 2,
    },
    coming: {
        marginTop: 3,
        marginLeft: 10,
        color: '#00462d',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        fontStyle: 'italic',
    },    
    paymentSoon: {
        
    },
    cardDetails: {        
    },
    reserveForm: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
    },
    cardPayment: {
        flexDirection: 'row',
        paddingVertical: 15
    },
    paymentMode: {
        marginLeft: 10,
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16
    },
    cardIcon: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'rgba(0,0,0,0.5)',
    },
    modalRowNew: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#000',
        margin: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    modalDesc: {
        flex: 1,
        textAlign: 'center',
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 22,
        alignItems: 'center',
    },
    payBtn: {
        backgroundColor: '#00a86b',
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