const React = require("react-native");
const { Platform } = React;

export default {

    bg: {
        flex: 1,
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: '100%',
        zIndex: 1
    },
    bgCover: {
        flex: 1,
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        opacity: 0.2
    },
    bgLayout: {
        flex: 1,
        position: 'absolute',
        zIndex: 3,
        width: '100%',
        height: '100%'
    },
    backBtnView: {
        flexDirection: 'row',
        flex: 1,
        paddingTop: 15
    },
    backBtnIcon: {
        fontSize: 20,
        color: '#00462d'
    },
    formLayout: {
        width: '100%',
        justifyContent: 'space-around',
        padding: 30,
        zIndex: 3,
    },
    form: {
    },
    title: {
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        fontSize: 36,
        color: '#00462d',
        marginBottom: 10
    },
    desc: {
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        fontSize: 26,
        color: '#fff',        
        opacity: 1
    },
    fRow: {
        flex: 1,
        marginBottom: 15
    },
    formRow: {
        flex: 1,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)'
    },
    formIcon:{
        color: '#00462d',
        fontSize: 24,
        paddingHorizontal: 5
    },
    label: {
        flex: 1,
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: '#000',
		textTransform: 'uppercase',
    },
    inputText: {
        flex: 1,
		fontFamily: 'Montserrat-SemiBold',
		fontSize: 20,
		paddingVertical: 5,
		color: '#000',
		borderBottomWidth: 1,
		borderColor: 'rgba(255,255,255,0.1)'
    },
    SignInBtn: {
        backgroundColor: '#00a86b',
        paddingVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000'
    },
    SignInBtnText: {
        textAlign: 'center',
        paddingVertical: 10,
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFF',
        fontSize: 16
    },
    account: {
        flex: 1,
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 16,
        color: '#000'
    },
    forgot: {
        textAlign: 'right',
        color: 'rgba(255,255,255,1)',
        marginBottom: 20,
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: '#00462d'
    },
    or: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: '#00462d',
        marginVertical: 15,
    },
    smn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    smnBtn: {
        width: 100,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        backgroundColor: 'transparent'
    },
    smnIcon: {
        fontSize: 18
    },
    smnFacebook: {
        backgroundColor: '#3a559f'
    },
    smnTwitter: {
        backgroundColor: '#4faaf0'
    },
    smnGooglePlus: {
        backgroundColor: '#dd4b39'
    },
}