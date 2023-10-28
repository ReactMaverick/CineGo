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
        paddingTop: 30
    },
    paymentTitle: {
        paddingHorizontal: 20,
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        marginBottom: 15
    },
    paymentInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        marginVertical: 5,
        paddingHorizontal: 20,
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
    },
    paymentSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    paymentRow: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    paymentDetail: {
        alignSelf: 'center'
    },
    paymentDesc: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        marginTop: 5,
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
    paymentCheck:{
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        marginTop: 5
    },
    modalRowNew: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#000',
        margin: 10,
        marginTop: 3,
        marginBottom: 0,
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
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#000', 
    },
    payBtnText:{
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 22, 
    },
}