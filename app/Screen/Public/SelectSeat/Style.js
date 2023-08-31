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
        fontSize: 12,
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
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        marginHorizontal: 10
    },
    calender: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#FFF"
    },
    calenderDesc: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        padding: 15
    },
    bookingTime: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginBottom: 10
    },
    showTime: {
        color: '#4A90E2',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 11,
        borderColor: '#4A90E2',
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        marginBottom: 20,
        borderRadius: 3
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
        fontSize: 12,
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
        fontSize: 12,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: '#4A90E2',
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
    addBtn: {
        position: 'absolute',
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        color: '#000',
    },
    cartText: {
        fontSize: 12,
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
        fontSize: 12,
        paddingHorizontal: 10,
        alignSelf: 'center'
    },
    closeIcon: {
        color: 'rgba(0,0,0,0.7)',
        fontSize: 24
    },
    inputDesc: {
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        paddingTop: 20,
        paddingHorizontal: 5
    },
    doneBtn: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        padding: 10,
        textAlign: 'center',
        marginVertical: 20,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1
    },
    /* Footer */
    ftrTab: {
        backgroundColor: '#000',
        alignItems: 'center'
    },
    ftrDesc: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color: '#4A90E2',
        marginHorizontal: 10
    },
}