
import { AppContextProvider, AuthContext } from './AppContent';
import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigation/HomeStack';
import AuthStack from './navigation/AuthStack';


export default function App() {
  return (
    <AppContextProvider>
			<Screen />
		</AppContextProvider>
  );
}

const Screen = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeStack /> : <AuthStack />}
      {/* <AuthStack /> */}
    </NavigationContainer>
  )
}
