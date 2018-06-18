import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import SignInScreen from "../screens/SignInScreen";

const AuthNavigation = createStackNavigator(
  {
    SignIn: SignInScreen,
  }
);

export default AuthNavigation;
