import React from 'react'
import { Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import DrawerContent from '@Component/Menu/Left'

import PublicIntro from '@Screen/Public/Intro'
import PublicHome from '@Screen/Public/Home'
import PublicSearch from '@Screen/Public/Search'
import PublicSelectCity from '@Screen/Public/SelectCity'
import PublicDetail from '@Screen/Public/Detail'
import PublicBooking from '@Screen/Public/Booking'
import PublicSelectSeat from '@Screen/Public/SelectSeat'
import PublicReserve from '@Screen/Public/Reserve'
import PublicPaymentDetail from '@Screen/Public/PaymentDetail'
import PublicPayment from '@Screen/Public/Payment'
import PublicConfirmation from '@Screen/Public/Confirmation'
import PublicFilter from '@Screen/Public/Filter'
import PublicBuzz from '@Screen/Public/Buzz'
import PublicProfile from '@Screen/Public/Profile'
import PublicEditProfile from '@Screen/Public/EditProfile'
import PublicSettings from '@Screen/Public/Settings'
import PublicSignIn from '@Screen/Public/SignIn'
import PublicSignUp from '@Screen/Public/SignUp'
import PublicVerifyOtp from '@Screen/Public/VerifyOtp'
import PublicForgotPswd from '@Screen/Public/ForgotPswd'
import PublicEvents from '@Screen/Public/Events'
import PublicListing from '@Screen/Public/Listing'
import PublicAddons from '@Screen/Public/Addons'
import PublicChangePassword from '@Screen/Public/ChangePassword'

import NavigationService from '@Service/Navigation'

const deviceWidth = Dimensions.get('window').width

const Drawer = createDrawerNavigator(
  {
    PublicHome: {
      screen: PublicHome
    },
    PublicEvents: {
      screen: PublicEvents
    },
    PublicListing: {
      screen: PublicListing
    },
    PublicAddons: {
      screen: PublicAddons
    }
    
    
  },
  {
    contentComponent: DrawerContent,
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    headerMode: 'none',
    initialRouteName: 'PublicHome',
    drawerWidth: deviceWidth - 50
  }
)

const AppNav = createNativeStackNavigator(
  {
    PublicIntro: {
      screen: PublicIntro
    },
    PublicSelectCity: {
      screen: PublicSelectCity
    },
    PublicDetail: {
      screen: PublicDetail
    },
    PublicSearch: {
      screen: PublicSearch
    },
    PublicBooking: {
      screen: PublicBooking
    },
    PublicSelectSeat: {
      screen: PublicSelectSeat
    },
    PublicFilter: {
      screen: PublicFilter
    },
    PublicBuzz: {
      screen: PublicBuzz
    },
    PublicReserve: {
      screen: PublicReserve
    },
    PublicPaymentDetail: {
      screen: PublicPaymentDetail
    },
    PublicPayment: {
      screen: PublicPayment
    },
    PublicConfirmation: {
      screen: PublicConfirmation
    },
    PublicProfile: {
      screen: PublicProfile
    },
    PublicEditProfile: {
      screen: PublicEditProfile
    },
    PublicSettings: {
      screen: PublicSettings
    },
    PublicSignIn: {
      screen: PublicSignIn
    },
    PublicSignUp: {
      screen: PublicSignUp
    },
    PublicVerifyOtp: {
      screen: PublicVerifyOtp
    },
    PublicForgotPswd: {
      screen: PublicForgotPswd
    },
    PublicChangePassword: {
      screen: PublicChangePassword
    },
    


    Drawer: {
      screen: Drawer
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Drawer'
  }
)

const AppContainer = NavigationContainer(AppNav);

export default class App extends React.Component {
  render () {
    return (
      <AppContainer ref={(r) => { NavigationService.setTopLevelNavigator(r) }} />
    )
  }
}
