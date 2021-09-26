import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeTab from "./src/navigation/HomeTab";
import AboutScreen from "./src/screens/AboutScreen";

export type RootTabParamList = {
	Home: undefined;
	About: undefined;
};

const Tab = createBottomTabNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name="Home"
					component={HomeTab}
					options={{
						tabBarIcon: ({ focused, color, size }) => (
							<Ionicons name="home" color={color} size={size} />
						),
						headerShown: false,
					}}
				/>
				<Tab.Screen
					name="About"
					component={AboutScreen}
					options={{
						tabBarIcon: ({ focused, color, size }) => (
							<Ionicons
								name="information-circle"
								color={color}
								size={size}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
