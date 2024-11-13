import React, { useContext } from 'react';
import { View, Text, Button,StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../AppContent';

const Profile = () => {
  const { logout } = useContext(AuthContext);

  return (
    <View className="flex items-center justify-center h-full space-y-3">
        <Text>Profile Screen</Text>
        <TouchableOpacity onPress={() => logout()}>
            <Text className="text-blue-400">Log Out</Text>
        </TouchableOpacity>
    </View>
  );
};
export default Profile;
