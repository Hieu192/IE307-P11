import { AntDesign, Feather } from "@expo/vector-icons"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Text, View } from "react-native"
import { HomeDrawer } from "./HomeDrawer/HomeDrawer"
import { NotificationDrawer } from "./HomeDrawer/NotificationDrawer"
import { HelpDrawer } from "./HomeDrawer/HelpDrawer"
const Drawer = createDrawerNavigator()
export const Home = () => {
	return (
        // <View>
        //     <Text>Home</Text>
        // </View>
		<Drawer.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				drawerIcon: () => {
					if (route.name === "Home") return <AntDesign name="home" size={24} />
					if (route.name === "Notification")
						return <AntDesign name="notification" size={24} />
					if (route.name === "Helps")
						return <Feather name="help-circle" size={24} />
				},
			})}>
			<Drawer.Screen name="Home" component={HomeDrawer} />
			<Drawer.Screen name="Notification" component={NotificationDrawer} />
			<Drawer.Screen name="Helps" component={HelpDrawer} />
		</Drawer.Navigator>
	)
}