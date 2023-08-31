const React = require("react-native");
const { Platform } = React;

export default {

  /**-- Header --**/
  bg: {
    flex: 1,
    position: 'absolute',
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
    opacity: 0.1
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
    fontSize: 24,
    color: '#FFF'
  },

  /**-- Content --**/
  formLayout: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    padding: 30,
    zIndex: 3
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    fontSize: 36,
    color: '#FFF',
    marginBottom: 10
  },
  desc: {
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    fontSize: 12,
    color: '#FFF',
    marginBottom: 40
  },
  fRow: {
    flex: 1,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    flex: 1,
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#FFF'
  },
  inputText: {
    flex: 1,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    padding: 0,
    color: '#FFF',
    marginHorizontal: 5,
    borderBottomWidth: 1,
    textAlign: 'center',
    borderColor: 'rgba(255,255,255,0.3)'
  },
  send: {
    paddingTop: 50
  },
  sendBtn: {
    backgroundColor: '#9013FE',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20
  },
  sendBtnText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
    fontSize: 12
  },
  resend: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#FFF',
    marginVertical: 20,
    textAlign: 'right'
  }

}