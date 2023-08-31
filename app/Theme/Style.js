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
        marginHorizontal: -10
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
                color: '#4A90E2',
                fontSize: 24,
            },
            android: {
                color: '#4A90E2',
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
        color: '#4A90E2'
    },
    textInactive: {
        fontSize: 12,
        color: '#999',
    },

}