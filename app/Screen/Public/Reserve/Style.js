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
        fontSize: 18,
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
    firstBox:{
        flex:5
    },
    movieName: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
    },
    moviePlace: {
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        marginVertical: 5
    },
    movieTime: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        marginBottom: 15
    },
    boxOffice: {
        alignSelf: 'center',  
        justifyContent:'center',
         flex:4
    },
    removeItem:{
      
        alignSelf: 'center',
        flex:1,
        alignItems:'center'
    },
    deleteBox:{
        color:'#000',
        fontSize: 20,
    },
    movieSeats: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        alignSelf: 'center'
    },
    movieBox: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16
    },
    paymentInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    paymentDesc: {
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 18,
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
        fontSize: 18,
        marginBottom: 10,
		textTransform: 'uppercase',
    },
    cardPayment:{
        flexDirection: 'row',
        paddingVertical: 15
    },
    paymentMode:{
        marginLeft: 10,
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18
    },
    cardIcon:{
        alignSelf: 'center',
        fontSize: 22,
        color: 'rgba(0,0,0,0.5)',
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
        fontSize: 22
    },
    modalRowNew: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#000',
        marginTop: 0,
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
}