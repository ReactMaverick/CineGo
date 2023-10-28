const React = require('react-native')
const { Platform } = React

export default {
  /* -- Tab -- */
  tabStyle: {
    backgroundColor: '#111'
  },
  textStyle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(255,255,255,0.6)',	
	textTransform: 'uppercase',
  },
  activeTabStyle: {
    backgroundColor: '#111',
  },
  activeTextStyle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#FFF',
	textTransform: 'uppercase',
  },
  /* Shows */

  tabText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16
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
    color: '#000',
    backgroundColor: '#f2f2f2',
    padding: 5
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
    fontSize: 16,
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
    fontSize: 16,
	width: 150,
    fontFamily: 'Montserrat-SemiBold',
    color: 'rgba(0,0,0,0.8)',
    marginTop: 2,
    alignSelf: 'center',	
    justifyContent: 'center',
    alignItems: 'center',
  },
  evName: {
    fontSize: 16,
    alignSelf: 'center',	
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.7)'
  },
  funShowDesc: {
    width: 100,
    fontSize: 14,
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
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#FFF'
  },
  movieactiveTabStyle: {
    backgroundColor: '#999'
  },
  movieactiveTextStyle: {
    fontSize: 12,
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
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.7)'
  },
  funReviewColor: {
    alignSelf: 'center',
    fontSize: 16,
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
    fontSize: 16,
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
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: 'rgba(0,0,0,0.7)'
  },
  movieLang: {
    fontSize: 16,
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
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.5)',
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 0,
    padding: 5
  },
  ticketActive: {
        ...Platform.select({
            ios: {
                marginTop: 5,
				color: '#FFF',
                fontSize: 14,
            },
            android: {
                color: '#FFF',
                fontSize: 14,
                alignSelf: 'center'
            },
        }),
    },
  movieBooking: {
    backgroundColor: '#00a76b',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 3,
	textTransform: 'uppercase',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(255,255,255,1)',
    borderColor: '#000',
    borderWidth: 2,
  },
  movieBookingHome: {
    backgroundColor: '#00a76b',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
    paddingTop: 6,
	textTransform: 'uppercase',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(255,255,255,1)',
    borderColor: '#000',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
	marginTop: -10,
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
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.5)',
    paddingVertical: 10

  },
  filterDesc: {
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 5
  },
  movieInterest: {
    fontSize: 16,
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
    backgroundColor: '#00a76b',
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1
  },
  eventMonth: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: '#00a76b'
  },
  eventDate: {
    alignSelf: 'center',
    fontSize: 16,
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
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.7)',
    padding: 5,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1
  },
  eventDesc: {
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.7)'
  },
  
  
    detailImg: {
        width: '100%',
        height: 200,
    },
	
    detail: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
		flex: 4,
    },
    detailMain: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailTitle: {
        fontSize: 16,
        width: '60%',
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
    },
    detailDesc: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.5)'
    },
    detailTime: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
		color: '#00a76b'
    },
    detailInfo: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',	
		alignSelf: 'center',
    },
    detailLang: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(0,0,0,0.5)',
    },
    detailDimensRow: {
        flexDirection: 'row',
    },
    detailDimens: {
        fontFamily: 'Montserrat-Regular',
    },
  
  
  
  

}
