import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
let _navigator

function setTopLevelNavigator(r) {
  _navigator = r
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationContainer.navigate({
      routeName,
      params
    })
  )
}

function openDrawer() {
  _navigator.dispatch(createDrawerNavigator.openDrawer())
}
function closeDrawer() {
  _navigator.dispatch(createDrawerNavigator.closeDrawer())
}

function back() {
  _navigator.dispatch(NavigationContainer.goBack())
}


export default {
  navigate,
  setTopLevelNavigator,
  openDrawer,
  closeDrawer,
  back
}