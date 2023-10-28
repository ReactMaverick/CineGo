import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { Icon } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './app/Component/Menu/Left';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { store, persistor } from './app/redux/store';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from './app/api/ApiConfig';
import MyComponent from './app/Screen/Public/MyComponent';
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
import PublicOrder from './app/Screen/Public/Order';
import PublicOrders from './app/Screen/Public/Orders';
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
import { useNavigation } from '@react-navigation/native';
import { userDetails, logOut } from './app/redux/reducers/Customer';
const deviceWidth = Dimensions.get('window').width;
const Drawer = createDrawerNavigator();
function MyDrawer() {
  const userDetail = useSelector(state => state.userReducer.value);
  return (
    <Drawer.Navigator
      // initialRouteName="PublicHome"
      screenOptions={{
        headerShown: false,
        drawerType: deviceWidth.width >= 768 ? 'permanent' : 'front',
        drawerStyle: deviceWidth.width >= 768 ? null : { width: '80%' },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={PublicHome}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home" type='SimpleLineIcons' size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Events"
        component={PublicEvents}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="event" type='MaterialIcons' size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Listing"
        component={PublicListing}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="list" type='Entypo' size={size} color={color} />
          ),
        }}
      />


      <Drawer.Screen
        name={userDetail ? "Log Out" : "Sign In"}
        component={userDetail ? _logout : PublicSignIn}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="login" type='AntDesign' size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}


const _logout = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userDetail = useSelector(state => state.userReducer.value);
  console.log("userDetail", userDetail);

  useEffect(() => {
    fetch(LOGOUT, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + userDetail.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // Handle the server response, if needed
        // For example, set state or display a success message
        AsyncStorage.clear();
        console.log("Logout successful");
        dispatch(logOut());
        navigation.navigate('Home')
      })
      .catch((error) => {
        console.log("Error:", error);
      })
      .finally(() => {
        // 
      });
  })
  return (
    <></>
  )
}
const Stack = createNativeStackNavigator();
function AppNav() {
  return (
    <Stack.Navigator>      
      <Stack.Screen
        name="PublicHome"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicIntro"
        component={PublicIntro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicSelectCity"
        component={PublicSelectCity}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicOrder"
        component={PublicOrder}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicOrders"
        component={PublicOrders}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicDetail"
        component={PublicDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicSearch"
        component={PublicSearch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicBooking"
        component={PublicBooking}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicSelectSeat"
        component={PublicSelectSeat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicFilter"
        component={PublicFilter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicBuzz"
        component={PublicBuzz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicReserve"
        component={PublicReserve}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicPaymentDetail"
        component={PublicPaymentDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicPayment"
        component={PublicPayment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicConfirmation"
        component={PublicConfirmation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicProfile"
        component={PublicProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicEditProfile"
        component={PublicEditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicSettings"
        component={PublicSettings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicSignIn"
        component={PublicSignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicSignUp"
        component={PublicSignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicVerifyOtp"
        component={PublicVerifyOtp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicForgotPswd"
        component={PublicForgotPswd}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicChangePassword"
        component={PublicChangePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicEvents"
        component={PublicEvents}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicListing"
        component={PublicListing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicAddons"
        component={PublicAddons}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppNav />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    );
  }
}
