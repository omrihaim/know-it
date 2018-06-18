import React from "react";
import { createStackNavigator } from "react-navigation";

import TabNavigation from "./TabNavigation";

const RootNavigation = createStackNavigator(
  {
    Main: TabNavigation,
  }
);

export default RootNavigation;
