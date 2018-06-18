import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import ExploreScreen from "../screens/ExploreScreen";
import TracksScreen from "../screens/TracksScreen";
import ExpendScreen from "../screens/ExpendScreen";

const TabNavigation = createMaterialTopTabNavigator({
  Expend: ExpendScreen,
  Explore: ExploreScreen,
  Tracks: TracksScreen,
},
{
  initialRouteName: 'Explore',
  swipeEnabled: false,
});

export default TabNavigation;
