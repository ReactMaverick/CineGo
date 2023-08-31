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
        fontSize: 12,
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
    paymentCheck:{
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        marginTop: 5
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