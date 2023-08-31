const React = require("react-native");
const { Platform } = React;

export default {
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navRightDesc: {
        padding: 10,
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(255,255,255,1)'
    },
    navLeftIcon: {
        padding: 10,
        color: 'rgba(255,255,255,1)'
    },
    detailImg: {
        width: '100%',
        height: 200,
        opacity: 0.9
    },
    detail: {
        padding: 15
    },
    detailMain: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailTitle: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(0,0,0,0.9)'
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    detailIcon: {
        color: 'rgb(250,0,56)',
        fontSize: 20
    },
    detailReview: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(0,0,0,0.7)',
        marginLeft: 5
    },
    detailVotes: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.7)',
        marginTop: 5
    },
    detailDesc: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.5)'
    },
    detailTime: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.5)',
        marginTop: 5
    },
    detailLang: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.5)',
        marginTop: 5
    },
    detailDimensRow: {
        flexDirection: 'row',
        marginVertical: 5
    },
    detailDimens: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.5)',
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        padding: 5,
        marginRight: 5
    },
    offer: {
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(0,0,0,0.7)',
        marginVertical: 10
    },
    offerDetail: {
        padding: 10,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1
    },
    offerDesc: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.7)'
    },
    offerprice: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.5)',
        marginTop: 5,
    },
    detailLikeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        borderRadius: 5,
        backgroundColor: '#FFF'
    },
    detailLike: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.5)',
        marginLeft: 5
    },
    detailLikeIcon: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: 20
    },
    bgImg: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.05)',
        padding: 15
    },
    movieDesc: {
        lineHeight: 20,
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.5)',
        paddingVertical: 10
    },
    castForm: {
        marginRight: 10,
        marginBottom: 15
    },
    castImg: {
        width: 80,
        height: 80,
        marginBottom: 5,
        borderRadius: 3
    },
    castName: {
        alignSelf: 'center',
        fontSize: 11,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.5)'
    },
    /* Recommended movies */
    caption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    captionDesc: {
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(0,0,0,0.8)',
        marginBottom: 5,
    },
    captionDescAll: {
        alignSelf: 'center',
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        color: 'rgb(24,0,150)'
    },
    funGroup: {
        padding: 5,
        marginHorizontal: 5,
        marginVertical: 10,
        backgroundColor: '#FFF',
        borderRadius: 5
    },
    funImg: {
        width: 150,
        height: 100,
        borderRadius: 3,
        marginBottom: 5
    },
    funDesc: {
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(0,0,0,0.8)',
        marginTop: 5
    },
    funRow: {
        flexDirection: 'row'
    },
    funIcon: {
        color: 'rgb(250,0,56)',
        fontSize: 16
    },
    funReview: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.7)',
        marginLeft: 5
    },
    /* Footer */
    ftrTab: {
        backgroundColor: '#4A90E2',
        alignItems: 'center'
    },
    ftrIcon: {
        fontSize: 24,
        color: 'rgba(255,255,255,1)'
    },
    ftrDesc: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(255,255,255,1)',
        marginHorizontal: 10
    },
    eventMonth: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
        color: '#4A90E2',
        alignSelf: 'center',
    },
    eventDate: {
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(0,0,0,0.7)',
        marginTop: 3
    },
    eventDay: {
        alignSelf: 'center',
        fontSize: 10,
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(0,0,0,0.7)',
        marginTop: 3
    },
    movieDate: {
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 15,
        paddingVertical: 3,
        width:80,
        alignItems:"center"
      },
}