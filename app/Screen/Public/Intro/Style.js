const React = require("react-native");
const { Platform } = React;

export default {
    introImg: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    introView: {
        flex: 1,
        marginTop: 150
    },
    introText: {
        flex: 1,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 34,
        color: 'rgba(255,255,255,1)',
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    introBtn: {
        alignSelf: 'center',
        borderRadius: 3,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(255,255,255,1)',
        marginBottom: 50
    },
    introBtnText: {
        color: '#000',
        padding: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12
    },
}