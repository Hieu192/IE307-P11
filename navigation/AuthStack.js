import React from 'react';
import {LoginScreen} from '../components/Login';
// import SignUpScreen from '../screens/Signup';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SignUpScreen } from '../components/SignUp';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
