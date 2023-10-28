const React = require("react-native");
const { Platform } = React;

export default {

     // *** Header *** //
     navigation: {
        width: '100%'
    },
    navigationTransparent: {
        width: '100%',
        backgroundColor: 'transparent'
    },

    // *** Content *** //

    layoutDefault: {
        flexGrow: 1
    },
    layoutCenter: {
        flexGrow: 1,
        justifyContent: 'center'
    },

    // *** text header *** //
    navigationBar: {
        flex: 1,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: -10,
        backgroundColor: '#00462d',
    },
    nav: {

    },
    navLeft: {
        flex: 1.5,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    navMiddle: {
        flex: 7,
        alignItems: 'center'
    },
    navMiddleText: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 12,
        color: '#FFF',
		textTransform: 'uppercase',
    },	
    navMiddleLogo: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 6,
        color: '#FFF',
		textTransform: 'uppercase',
        position: 'absolute', 
		right: 40,		
        marginTop: -31,
    },
	navMiddleTextats: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 20,
        color: '#FFF',
		textTransform: 'uppercase',
        position: 'absolute', 
        marginTop: -15,
		left: -31,		
    },
    navRight: {
        flex: 1.5,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    navRightDesc: {
        flex: 3,
    },
    navRightText: {
        alignSelf: 'center',
        fontSize: 12,
        color: 'rgb(255,255,255)',
        fontFamily: "Montserrat-SemiBold"
    },
    navLeftIcon: {
        fontSize: 24,
        color: '#FFF'
    },
    navRightIcon: {
        fontSize: 20,
        color: '#FFF',
        paddingHorizontal: 5
    },
    navTextBig: {
        fontSize: 24,
        fontFamily: "Montserrat-SemiBold",
        color: '#000',
        paddingHorizontal: 10
    },
    navText: {
        fontSize: 24,
        fontFamily: "Montserrat-Regular",
        color: '#000',
        paddingHorizontal: 10
    },
    navTextSm: {
        fontSize: 16,
        fontFamily: "Montserrat-Regular",
        color: '#000',
        paddingHorizontal: 10
    },

    navText: {
        color: '#000',
        fontFamily: "Montserrat-Regular",
        fontSize: 12,
        alignItems: 'center',
        textAlign: 'center',
    },
    navBtn: {
        alignSelf: 'flex-start',
        marginLeft: -10,
    },
    signMiddleText: {               
        paddingBottom: 25,
    },	
    signMiddleText2: {        
        borderColor: '#000',
        borderBottomWidth: 1,        
        borderTopWidth: 1,        
        padding: 5,
        backgroundColor: '#000',
        marginBottom: 25,
        backgroundColor: '#00462d',
        opacity: 0.2
    },	
    signMiddleDesc: {     
        fontFamily: "Montserrat-SemiBold",
        fontSize: 20,
        color: '#000',
		textTransform: 'uppercase',
        position: 'absolute', 
        marginTop: 10,
        alignItems: 'center',
        alignSelf: 'center',
    },	
    signMiddleLogo: {
        alignSelf: 'center',
    },
	signMiddleTextats: {
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        fontSize: 36,
        color: '#00462d',
		textTransform: 'uppercase',
    },
    desc: {
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        fontSize: 26,
        color: '#fff',        
        opacity: 1
    },
    // *** footer *** //
    footerBg: {
        backgroundColor: '#000',
        borderColor: 'rgba(0,0,0,0.1)',
        borderTopWidth: 1
    },
    fTab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    fIcons: {
        backgroundColor: 'transparent',
    },
    fTabView: {
        flexDirection: 'row',

    },
    fIconsRow: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1

    },
    iconActive: {
        ...Platform.select({
            ios: {
                color: '#00a86b',
                fontSize: 24,
            },
            android: {
                color: '#00a86b',
                fontSize: 24,
                alignSelf: 'center'
            },
        }),
    },
    iconInactive: {
        ...Platform.select({
            ios: {
                fontSize: 24,
                color: '#999',
            },
            android: {
                fontSize: 24,
                alignSelf: 'center',
                color: '#999',
            },
        }),
    },
    fTabIcon: {
        ...Platform.select({
            ios: {
                fontSize: 24,
                color: 'rgba(0,0,0,0.5)',
                marginHorizontal: 5,
            },
            android: {
                fontSize: 18,
                alignSelf: 'center',
                color: 'rgba(0,0,0,0.5)',
                marginHorizontal: 5,
            },
        }),
    },
    fTabDesc: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.5)',
    },
    textActive: {
        fontSize: 12,
        color: '#00a86b'
    },
    textInactive: {
        fontSize: 12,
        color: '#999',
    },

}