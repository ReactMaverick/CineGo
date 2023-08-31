const React = require('react-native')
const { Platform, Dimensions } = React

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default {

  layout: {
    flex: 1
  },
  nav: {
    flex: 1
  },
  navProfile: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  bgImg: {
    position: 'absolute',
    width: '120%',
    height: 230
  },
  navImg: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },

  navMenu: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 5
  },
  navAvatar: {
    width: 64,
    height: 64,
    borderRadius: 37
  },
  navName: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
    marginTop: 10
  },

  profileItem: {
    marginTop: 10,
    marginBottom: 10
  },
  navBtn: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  
  navBtnIcon: {
    fontSize: 24,
    color: '#FFF'
  },
  navBtnLeft: {
    width: 30,
    marginRight: 20
  },
  navBtnText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)'
  },
  navHeader: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#242A38',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20
  },
  navFooter: {
    flex: 1
  },
  navFooterText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.5)'
  }

}
