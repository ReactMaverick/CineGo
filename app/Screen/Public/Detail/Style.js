const React = require("react-native");
const { Platform } = React;

export default {
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navRightDesc: {
        padding: 5,
        backgroundColor: '#f0f0f0',
        alignItems:"center",
        borderWidth: 1,
        borderColor: '#00a86b',
        color: '#00462d',
        fontSize: 12,
        height: 27,
    },
    smn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    smnBtn: {
        width: 40,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        backgroundColor: 'transparent',
    },
    smnIcon: {
        fontSize: 14,
        color: '#FFF',
    },
    smnFacebook: {
        backgroundColor: '#3a559f',        
        borderWidth: 1,
        borderColor: '#00462d',
        color: '#00a86b',
    },
    smnTwitter: {
        backgroundColor: '#4faaf0',
        borderWidth: 1,
        borderColor: '#00462d',
        color: '#00a86b',
    },
    smnChrome: {
        backgroundColor: '#FBBC05',        
        borderWidth: 1,
        borderColor: '#00462d',
        color: '#00a86b',
    },
    navLeftIcon: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        alignItems:"center",
        borderWidth: 1,
        borderColor: '#00a86b',
        color: '#00a86b',
    },
    detailImg: {
        width: '100%',
        height: 200,
        opacity: 0.9
    },
    detail: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: '#00462d',
        borderBottomWidth: 1,
        borderRadius: 10,
    },
    detailMain: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailTitle: {
        fontSize: 16,
        width: 120,
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
        marginVertical: 5,
        marginTop: -15,
    },
    detailDimens: {
        fontFamily: 'Montserrat-Regular',
        padding: 5,
        marginRight: 5,
        fontSize: 18,
        marginTop: -7,
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
    offerDetailActive: {
        padding: 10,
        borderColor: 'blue',
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
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.5)',
        paddingVertical: 10,        
        marginTop: -15,
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
        backgroundColor: '#00a86b',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#000', 
    },
    ftrIcon: {
        fontSize: 24,
        color: 'rgba(255,255,255,1)'
    },
    ftrDesc: {
        fontSize: 22,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(255,255,255,1)',
        marginHorizontal: 10
    },
    eventMonth: {
        fontSize: 18,
        fontFamily: 'Montserrat-Regular',
        color: '#000',
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
        alignItems:"center",
        borderWidth: 1,
        borderColor: '#00a86b',  
        borderRadius: 5,
      },
}