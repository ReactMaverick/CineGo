const React = require("react-native");
const { Platform } = React;

export default {

    navLeft: {
        flexDirection: 'row',
        margin: 5
    },
    paymentInput: {
        flex: 1,
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
    },
    applyCodeBtn: {
        color: '#FFF',
        fontFamily: 'Montserrat-SemiBold',
        borderColor: '#000',
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 6,
        fontSize: 20,
        marginTop: 5,
        backgroundColor: '#00462d'
    },
    modalDescAddons: {
        flex: 1,
        textAlign: 'center',
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        paddingHorizontal: 10,
        alignSelf: 'center'
    },
    navLeftDesc: {
        alignSelf: 'center',
        color: '#000',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        marginHorizontal: 10
    },
    navRight: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginHorizontal: 5
    },
    bgImg: {
        flexGrow: 1,
        backgroundColor: '#f7f7f7'
    },
    calender: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#FFF"
    },
    calenderDesc: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        padding: 15
    },
    locationIcon: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'rgba(0,0,0,0.2)',
        marginTop: 15,
        marginRight: 5
    },
    bookingVenueTimes: {
        backgroundColor: "#FFF",
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 5,
        padding: 15,
        elevation: 5,
        shadowOffset: { 
            width: 15,
            height: 15
        },
        shadowColor: 'rgba(0,0,0,0.04)',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        alignSelf: 'center',
        fontSize: 20,
        borderRadius: 16
    },
    bookingForm: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        marginBottom: 10,
        alignSelf: 'center',
		height: 410,
    },
    bookingTime: {
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: '#FFF',
        backgroundColor: '#000',       
        color: '#FFF',
        alignSelf: 'center',
        borderRadius: 16,
    },
    showTime: {
        color: '#FFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 10,        
        alignSelf: 'center',
        borderRadius: 16
    },
    /* Modal */
    modalForm: {
        marginTop: 0,
        paddingTop: 20,
        paddingHorizontal: 10,
        alignSelf: 'center'
    },
    modalFormNew: {
        paddingTop: 20,
        paddingHorizontal: 10,
        alignSelf: 'center'
    },
    modalRow: {
        flexDirection: 'row',
        padding: 20,
    },
    modalRowNew: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#000',
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    modalDescNew: {
        flexDirection: 'row',
        borderColor: '#000',
        marginTop: 20,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',
        backgroundColor: '#FFF',
        backgroundColor: '#f9f9f9',       
        color: 'rgba(0,0,0,0.7)',
        marginBottom: -20,
    },
    modalVenues: {
        flexDirection: 'row',
        borderColor: '#000',
        marginTop: 20,
    },
    closeIcon: {
        color: 'rgba(0,0,0,0.7)',
        fontSize: 28,
        alignSelf: 'center',
    },
    modalDesc: {
        flex: 1,
        textAlign: 'center',
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 22,
        alignItems: 'center',
    },
    modalPlease: {
        flex: 1,
        textAlign: 'center',
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 18,
        alignItems: 'center',
    },
    paymentMethods: {
        color: '#000',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        alignSelf: 'center',
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
    doneBtn: {
        color: '#fff',
        fontFamily: 'Montserrat-Regular',
        fontSize: 22,
        padding: 10,
        textAlign: 'center',
        marginVertical: 20,
        borderWidth: 1,        
        backgroundColor: '#000',     
        borderRadius: 16,
    },
    seatImg: {
        alignSelf: 'center',
        width: 72,
        height: 72,
        borderRadius: 36,
        marginVertical: 20
    },
    seatSelect: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FF0000',
        borderWidth: 1
    },
    seatNum: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        padding: 10
    },
    ticketPrice: {
       // flexDirection: 'row',
      
        // justifyContent: 'space-evenly',
        // paddingVertical: 20
    },
    scheme: {
        alignSelf: 'center',
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
    },
    price: {
        alignSelf: 'center',
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
    },
    available: {
        alignSelf: 'center',
        color: '#000',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
    },
    seatBtn: {
        backgroundColor: '#000',     
        borderRadius: 16,
        color: 'rgba(255,255,255,1)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        textAlign: 'center',
        padding: 10,   
    },
    addBtn: {
        color: '#FFF',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: '#000',
        borderWidth: 1,
        backgroundColor: '#00462d',        
        borderRadius: 16
    },
    ticketRow:{
        flexDirection:"row",                     
        margin:10,
        justifyContent:'center'
    },
    ticketType:{
        flex:1,
        color: '#000',
        fontWeight:'bold',
        fontFamily: 'Montserrat-Regular',
    },
    ticketDesc:{
        flex:1,
        color: '#000',
        fontWeight:'bold',
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
    },
    ticketPrice:{
        flex:1,
        color: '#000',
        fontFamily: 'Montserrat-Regular',
    },
    ticketPriceVal:{
        flex:2,
        color: '#000',
        fontFamily: 'Montserrat-Regular',
    },
    ticketQuantity:{
        flex:1,
        color: '#000',
        fontFamily: 'Montserrat-Regular',
    },
    inBg: {
        backgroundColor: '#f0f0f0'
      },
      eventtabStyle: {
        fontSize: 26,
        backgroundColor: '#FFF',
        backgroundColor: '#000',        
        color: '#FFF',
      },
      eventtextStyle: {
        fontFamily: 'Montserrat-Regular',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#FFF',
        backgroundColor: '#000',       
        color: '#FFF',
        fontSize: 26,
      },
      eventactiveTabStyle: {
        backgroundColor: '#FFF',
        backgroundColor: '#000',       
        color: '#FFF',
        fontSize: 26,
      },
      eventactiveTextStyle: {
        fontFamily: 'Montserrat-Regular',
        color: '#FFF',
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#000',
        borderColor: '#000',
        borderWidth: 1,
        fontSize: 26,
      },
}