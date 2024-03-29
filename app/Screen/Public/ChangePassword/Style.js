const React = require("react-native");
const { Platform } = React;

export default {

    profileLeft: {
        flexDirection: 'row',
        margin: 5
    },
    profileNum: {
        alignSelf: 'center',
        color: '#FFF',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        marginHorizontal: 10
    },
    navRight: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    rightDesc: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        marginHorizontal: 10
    },
    profileBg: {
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    profileImg: {
        width: 64,
        height: 64,
        borderRadius: 32,
        alignSelf: 'center',
        marginTop: 10
    },
    profileDesc: {
        color: 'rgba(0,0,0,0.7)',
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        alignSelf: 'center',
        marginVertical: 10
    },
    profileMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    textInputDesc: {
        flex: 1,
        marginHorizontal: 5,      
        fontSize: 22,
        color: '#000',
    },
    textInputNum: {
        flex: 1,
        marginHorizontal: 15,
        borderColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1
    },
    prfDesc:{
        color: 'rgba(0,0,0,0.5)',
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        marginHorizontal: 15,
        marginTop: 10,
    },
    radioBtn: {
        flexDirection: 'row',
        margin: 10,
    },
    radioDesc: {
        alignSelf: 'center',
        color: 'rgba(0,0,0,0.5)',
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        paddingHorizontal: 5
    },
}