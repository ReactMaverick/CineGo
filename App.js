import React from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerContent from './app/Component/Menu/Left';

import PublicIntro from './app/Screen/Public/Intro';
import PublicHome from './app/Screen/Public/Home';
import PublicSearch from './app/Screen/Public/Search';
import PublicSelectCity from './app/Screen/Public/SelectCity';
import PublicDetail from './app/Screen/Public/Detail';
import PublicBooking from './app/Screen/Public/Booking';
import PublicSelectSeat from './app/Screen/Public/SelectSeat';
import PublicReserve from './app/Screen/Public/Reserve';
import PublicPaymentDetail from './app/Screen/Public/PaymentDetail';
import PublicPayment from './app/Screen/Public/Payment';
import PublicConfirmation from './app/Screen/Public/Confirmation';
import PublicFilter from './app/Screen/Public/Filter';
import PublicBuzz from './app/Screen/Public/Buzz';
import PublicProfile from './app/Screen/Public/Profile';
import PublicEditProfile from './app/Screen/Public/EditProfile';
import PublicSettings from './app/Screen/Public/Settings';
import PublicSignIn from './app/Screen/Public/SignIn';
import PublicSignUp from './app/Screen/Public/SignUp';
import PublicVerifyOtp from './app/Screen/Public/VerifyOtp';
import PublicForgotPswd from './app/Screen/Public/ForgotPswd';
import PublicEvents from './app/Screen/Public/Events';
import PublicListing from './app/Screen/Public/Listing';
import PublicAddons from './app/Screen/Public/Addons';
import PublicChangePassword from './app/Screen/Public/ChangePassword';


const deviceWidth = Dimensions.get('window').width;
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator 
    // initialRouteName="PublicHome"
    screenOptions={{
      headerShown: false,
      drawerType: deviceWidth.width >= 768 ? 'permanent' : 'front',
      drawerStyle: deviceWidth.width >= 768 ? null : {width: '80%'},
    }}
    contentComponent={DrawerContent}
    >
      <Drawer.Screen name="Home" component={PublicHome} />
      <Drawer.Screen name="Events" component={PublicEvents} />
      <Drawer.Screen name="Listing" component={PublicListing} />
      <Drawer.Screen name="Addons" component={PublicAddons} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function AppNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PublicIntro"
        component={PublicIntro}
        options={{headerShown: false}}
      />
      <Stack.Screen
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
      />
      <Stack.Screen
        name="PublicHome"
        component={MyDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicEvents"
        component={PublicEvents}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicListing"
        component={PublicListing}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AppNav/>
      </NavigationContainer>
    );
  }
}
