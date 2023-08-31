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
    bookingForm: {
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
        shadowRadius: 5
    },
    bookingPlace: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
    },
    bookingTime: {
        flexDirection: 'row',
    },
    showTime: {
        color: '#4A90E2',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 11,
        borderColor: '#4A90E2',
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 3,
        marginRight: 10
    },
    /* Modal */
    modalForm: {
        marginTop: 200,
        paddingTop: 20,
        paddingHorizontal: 10,
        alignSelf: 'center'
    },
    modalRow: {
        flexDirection: 'row'
    },
    closeIcon: {
        color: 'rgba(0,0,0,0.7)',
        fontSize: 18
    },
    modalDesc: {
        flex: 1,
        textAlign: 'center',
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        paddingHorizontal: 10,
        alignItems: 'center'
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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 20
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
        color: '#4A90E2',
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
    },
    seatBtn: {
        backgroundColor: '#4A90E2',
        color: 'rgba(255,255,255,1)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        textAlign: 'center',
        padding: 10
    },
}