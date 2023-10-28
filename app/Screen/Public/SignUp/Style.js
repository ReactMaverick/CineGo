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
    color: '#000'
  },
  formLayout: {
    flex: 1,
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
    color: '#000',
    marginBottom: 10
  },
  desc: {
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginBottom: 40
  },
  fRow: {
    flex: 1,
    marginBottom: 10
  },
  formRow: {
    flex: 1,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)'
  },
  formIcon: {
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
    padding: 0,
    color: '#000'
  },
  SignIn: {
    marginTop: 10
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
}
