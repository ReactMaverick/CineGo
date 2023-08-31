import React from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerContent from '@Component/Menu/Left';

import PublicIntro from './app/Screen/Public/Intro';
import PublicHome from './app/Screen/Public/Home';
import PublicSearch from '@Screen/Public/Search';
import PublicSelectCity from '@Screen/Public/SelectCity';
import PublicDetail from '@Screen/Public/Detail';
import PublicBooking from '@Screen/Public/Booking';
import PublicSelectSeat from '@Screen/Public/SelectSeat';
import PublicReserve from '@Screen/Public/Reserve';
import PublicPaymentDetail from '@Screen/Public/PaymentDetail';
import PublicPayment from '@Screen/Public/Payment';
import PublicConfirmation from '@Screen/Public/Confirmation';
import PublicFilter from '@Screen/Public/Filter';
import PublicBuzz from '@Screen/Public/Buzz';
import PublicProfile from '@Screen/Public/Profile';
import PublicEditProfile from '@Screen/Public/EditProfile';
import PublicSettings from '@Screen/Public/Settings';
import PublicSignIn from '@Screen/Public/SignIn';
import PublicSignUp from '@Screen/Public/SignUp';
import PublicVerifyOtp from '@Screen/Public/VerifyOtp';
import PublicForgotPswd from '@Screen/Public/ForgotPswd';
import PublicEvents from '@Screen/Public/Events';
import PublicListing from '@Screen/Public/Listing';
import PublicAddons from '@Screen/Public/Addons';
import PublicChangePassword from '@Screen/Public/ChangePassword';

import NavigationService from '@Service/Navigation';

const deviceWidth = Dimensions.get('window').width;

// const Drawer = createDrawerNavigator(
//   {
//     PublicHome: {
//       screen: PublicHome,
//     },
//     PublicEvents: {
//       screen: PublicEvents,
//     },
//     PublicListing: {
//       screen: PublicListing,
//     },
//     PublicAddons: {
//       screen: PublicAddons,
//     },
//   },
//   {
//     contentComponent: DrawerContent,
//     contentOptions: {
//       activeTintColor: '#e91e63',
//     },
//     headerMode: 'none',
//     initialRouteName: 'PublicHome',
//     drawerWidth: deviceWidth - 50,
//   },
// );




const Stack = createNativeStackNavigator();
// const AppNav = createNativeStackNavigator(
//   {
//     PublicVerifyOtp: {
//       screen: PublicVerifyOtp,
//     },
//     PublicForgotPswd: {
//       screen: PublicForgotPswd,
//     },
//     PublicChangePassword: {
//       screen: PublicChangePassword,
//     },

//     Drawer: {
//       screen: Drawer,
//     },
//   },
//   {
//     headerMode: 'none',
//     initialRouteName: 'Drawer',
//   },
// );
function AppNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PublicIntro"
        component={PublicIntro}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="PublicSelectCity"
        component={PublicSelectCity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicDetail"
        component={PublicDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicSearch"
        component={PublicSearch}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicBooking"
        component={PublicBooking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicSelectSeat"
        component={PublicSelectSeat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicFilter"
        component={PublicFilter}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicBuzz"
        component={PublicBuzz}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicReserve"
        component={PublicReserve}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicPaymentDetail"
        component={PublicPaymentDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicPayment"
        component={PublicPayment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicConfirmation"
        component={PublicConfirmation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicProfile"
        component={PublicProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicEditProfile"
        component={PublicEditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicSettings"
        component={PublicSettings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicSignIn"
        component={PublicSignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicSignUp"
        component={PublicSignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicVerifyOtp"
        component={PublicVerifyOtp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicForgotPswd"
        component={PublicForgotPswd}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicChangePassword"
        component={PublicChangePassword}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}
// const AppContainer = NavigationContainer(AppNav);

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AppNav
        // ref={r => {
        //   NavigationService.setTopLevelNavigator(r);
        // }}
        />
      </NavigationContainer>
    );
  }
}
