import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import RootNavigation from "./RootNavigation";
import AuthNavigation from "./AuthNavigation";

import AuthLoadingScreen from "../screens/AuthLoadingScreen";

const OnLoadNavigation = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: RootNavigation,
    Auth: AuthNavigation,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default OnLoadNavigation;
