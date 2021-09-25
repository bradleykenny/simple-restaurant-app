import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeTab from "./src/navigation/HomeTab";
import AboutScreen from "./src/screens/AboutScreen";

import Ionicons from "react-native-vector-icons/Ionicons";

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
