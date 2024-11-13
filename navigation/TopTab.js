import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Category1Screen, Category2Screen, Category3Screen } from '../components/Categories';
const TopTabs = createMaterialTopTabNavigator();

const CategoryScreen = () => (
    <TopTabs.Navigator>
      <TopTabs.Screen name="Category1" component={Category1Screen} />
      <TopTabs.Screen name="Category2" component={Category2Screen} />
      <TopTabs.Screen name="Category3" component={Category3Screen} />
    </TopTabs.Navigator>
  );
export default CategoryScreen;