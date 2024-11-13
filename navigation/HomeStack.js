import React from 'react';
import {HomeDetailScreen} from '../components/HomeDrawer/HomeDetailScreen';


import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from '../components/BottomTab';
import { NotificationDetailScreen } from '../components/HomeDrawer/NotificationDetailScreen';
const Stack = createNativeStackNavigator();
const HomeStack = () => (
    <Stack.Navigator >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        options={{ headerShown: true }}
        name="HomeDetailScreen"
        component={HomeDetailScreen}
			/>
      <Stack.Screen
        options={{ headerShown: true }}
        name="NotificationDetailScreen"
        component={NotificationDetailScreen}
      />
    </Stack.Navigator>
  );
export default HomeStack