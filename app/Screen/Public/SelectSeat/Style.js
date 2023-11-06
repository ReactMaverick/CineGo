const React = require("react-native");
const { Platform } = React;

export default {

    navLeft: {
        flexDirection: 'row'
    },
    navLeftIcon: {
        fontSize: 28,
        color: '#FFF',
        marginRight: 15,
        marginLeft: 10,
    },
    movieList: {
    },
    movieName: {
        color: '#FFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
    },
    moviePlace: {
        color: '#FFF',
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
    },
    navRight: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    rightDesc: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        marginHorizontal: 10
    },
    calender: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#FFF"
    },
    dateView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#FFF"
    },
    calenderDesc: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 22,
        padding: 15,        
        alignSelf: 'center',
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
    bookSeat: {
        marginHorizontal: 15,
    },
    /* Modal */
    modalForm: {
        paddingTop: 20,
        paddingHorizontal: 10,
        alignSelf: 'center'
    },
    biteImg: {
        width: 75,
        height: 100
    },
    biteName: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14
    },
    bitePrice: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5
    },
    biteDesc:{
        flex: 4,
        padding: 10
    },
    biteBtn:{
        justifyContent: 'center',
        margin: 10
    },
    biteAdd: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 3
    },
    cartcolSpace: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    priceView: {
        flexDirection: 'row',
        marginTop: 5
    },
    cartBtn: {
        padding: 10,
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 1
    },
    paymentMethods: {
        color: '#000',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        alignSelf: 'center',
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
    cartText: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: '#000',
        alignSelf: 'center',
        marginHorizontal: 5
    },
    trashIcon: {
        fontSize: 24,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0.4)',
        marginVertical: 15,
        marginRight: 15,
    },
    modalRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    modalDesc: {
        flex: 1,
        textAlign: 'center',
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        paddingHorizontal: 10,
        alignSelf: 'center'
    },
    venueDesc: {
        flex: 1,
        textAlign: 'center',
        fontSize: 22,
        paddingTop: 5,   
        alignSelf: 'center'
    },
    dateDesc: {
        flex: 1,
        textAlign: 'center',
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        padding: 5,   
        alignSelf: 'center'
    },
    seatingPlan: {
        flex: 1,
        textAlign: 'center',        
        borderWidth: 1,        
        backgroundColor: '#fff',     
        borderRadius: 16,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#00462d',
        margin: 5,
        marginTop: 0,
    },
    seatingPlanDesc:{
        flex: 4,
        padding: 10,
        alignSelf: 'center',
		textTransform: 'uppercase',
        fontSize: 22,
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
    closeIcon: {
        color: 'rgba(0,0,0,0.7)',
        fontSize: 28,
        alignSelf: 'center',
    },
    inputDesc: {
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        paddingTop: 20,
        paddingHorizontal: 5
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
    /* Footer */
    ftrTab: {
        backgroundColor: '#000',
        alignItems: 'center'
    },
    ftrDesc: {
        color: '#fff',
        fontFamily: 'Montserrat-Regular',
        fontSize: 22,
        fontFamily: 'Montserrat-Regular',
        marginHorizontal: 10
    },
}