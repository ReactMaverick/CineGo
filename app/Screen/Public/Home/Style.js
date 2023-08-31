const React = require('react-native')
const { Platform } = React

export default {
  /* -- Tab -- */
  tabStyle: {
    backgroundColor: '#111'
  },
  textStyle: {
    fontSize: 8,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(255,255,255,0.6)'
  },
  activeTabStyle: {
    backgroundColor: '#111'
  },
  activeTextStyle: {
    fontSize: 8,
    fontFamily: 'Montserrat-Regular',
    color: '#FFF'
  },
  /* Shows */

  tabText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12
  },

  showBgMain: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  showBg: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200
  },
  myShows: {
    flex: 1
  },
  showImg: {
    width: 375,
    height: 200
  },
  showDesc: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: 'rgba(255,255,255,1)'
  },
  entertainment: {
    backgroundColor: '#f2f2f2',
    paddingTop: 20,
    paddingBottom: 10
  },
  caption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 5
  },
  captionDesc: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: 'rgba(0,0,0,0.8)'
  },
  captionBtn: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    paddingTop: 3,
    backgroundColor: '#CCC',
    borderRadius: 10
  },
  captionDescAll: {
    alignSelf: 'center',
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.5)'
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
  funShow: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.7)'
  },
  funShowDesc: {
    width: 100,
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.4)'
  },
  /* Movies */

  inBg: {
    backgroundColor: '#f0f0f0'
  },
  /* -- Tab -- */
  movietabStyle: {
    backgroundColor: '#999',
    borderColor: 'rgba(0,0,0,0.05)',
    borderWidth: 0
  },
  movietextStyle: {
    fontSize: 8,
    fontFamily: 'Montserrat-Regular',
    color: '#FFF'
  },
  movieactiveTabStyle: {
    backgroundColor: '#999'
  },
  movieactiveTextStyle: {
    fontSize: 8,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.5)'
  },
  movieLayout: {
    borderRadius: 5,
    backgroundColor: '#FFF',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  movieImg: {
    width: '100%',
    height: 200,
    borderRadius: 5
  },
  movies: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    margin: 15,
    backgroundColor: '#FFF',
    borderRadius: 5
  },
  moviesBtn: {
    borderRadius: 3,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0'
  },
  moviesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  moviesIcon: {
    alignSelf: 'center',
    color: 'rgba(0,0,0,0.5)',
    fontSize: 20
  },
  moviesDesc: {
    margin: 5,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.7)'
  },
  funReviewColor: {
    alignSelf: 'center',
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(255,255,255,1)',
    marginLeft: 5
  },
  movieLatest: {
    backgroundColor: 'rgb(72,231,101)',
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(255,255,255,1)',
    margin: 5,
    borderRadius: 3,
    paddingHorizontal: 10,
    position: 'absolute'
  },
  movieVoting: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0
  },
  movieReviews: {
    backgroundColor: '#000',
    opacity: 0.8,
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  movieVotes: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(255,255,255,1)'
  },
  movieForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 0
  },
  movieDate: {
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    paddingVertical: 3
  },
  movieCaption: {
    alignSelf: 'center'
  },
  movieName: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: 'rgba(0,0,0,0.7)'
  },
  movieLang: {
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.5)'
  },
  movieCast: {
    fontSize: 11,
    fontFamily: 'Montserrat-SemiBold',
    color: 'rgba(0,0,0,0.7)'
  },
  movieDimens: {
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.5)',
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 0,
    padding: 5
  },
  movieBooking: {
    backgroundColor: 'rgb(250,0,56)',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(255,255,255,1)'
  },
  /* ComingSoon */
  movieRelease: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  releaseFilter: {
    flexDirection: 'row'
  },
  releaseDate: {
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.5)',
    paddingVertical: 10

  },
  filterDesc: {
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 5
  },
  movieInterest: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.7)',
    marginLeft: 5
  },
  interestBtn: {
    alignSelf: 'center',
    flexDirection: 'row',
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 0,
    padding: 5
  },
  interestIcon: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.5)'
  },
  /* Events */
  /* -- Tab -- */
  eventtabStyle: {
    backgroundColor: '#FFF'
  },
  eventtextStyle: {
    fontSize: 8,
    fontFamily: 'Montserrat-Regular',
    color: '#000',
    padding: 10,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1
  },
  eventactiveTabStyle: {
    backgroundColor: '#FFF'
  },
  eventactiveTextStyle: {
    fontSize: 8,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(255,255,255,1)',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#4A90E2',
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1
  },
  eventMonth: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: '#4A90E2'
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
  eventBooking: {
    alignSelf: 'center'
  },
  eventDescBorder: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.7)',
    padding: 5,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1
  },
  eventDesc: {
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.7)'
  }

}
