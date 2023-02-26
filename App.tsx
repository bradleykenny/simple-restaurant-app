import "react-native-url-polyfill/auto";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { QueryClient, QueryClientProvider } from "react-query";
import HomeTab from "./src/navigation/HomeTab";
import AboutScreen from "./src/screens/AboutScreen";

import { colors } from "./src/themes";

export type RootTabParamList = {
	Home: undefined;
	About: undefined;
};

const Tab = createBottomTabNavigator();
export default function App() {
	const queryClient = new QueryClient();

	return (
		<SafeAreaProvider>
			<QueryClientProvider client={queryClient}>
				<NavigationContainer>
					<Tab.Navigator
						screenOptions={
							{
								// tabBarShowLabel: false,
							}
						}
					>
						<Tab.Screen
							name="Home"
							component={HomeTab}
							options={{
								tabBarIcon: ({ focused, color, size }) => (
									<Icon
										name={
											focused
												? "home-variant"
												: "home-variant-outline"
										}
										color={color}
										size={size}
									/>
								),
								headerShown: false,
							}}
						/>
						<Tab.Screen
							name="Cart"
							component={AboutScreen}
							options={{
								tabBarIcon: ({ focused, color, size }) => (
									<Icon
										name={
											focused
												? "shopping"
												: "shopping-outline"
										}
										color={color}
										size={size}
									/>
								),
							}}
						/>
						<Tab.Screen
							name="Offers"
							component={AboutScreen}
							options={{
								tabBarIcon: ({ focused, color, size }) => (
									<Icon
										name={focused ? "tag" : "tag-outline"}
										color={color}
										size={size}
									/>
								),
							}}
						/>
						<Tab.Screen
							name="Search"
							component={AboutScreen}
							options={{
								tabBarIcon: ({ focused, color, size }) => (
									<Icon
										name={
											focused
												? "store-search"
												: "store-search-outline"
										}
										color={color}
										size={size}
									/>
								),
							}}
						/>
						<Tab.Screen
							name="Account"
							component={AboutScreen}
							options={{
								tabBarIcon: ({ focused, color, size }) => (
									<Icon
										name={
											focused
												? "account-circle"
												: "account-circle-outline"
										}
										color={color}
										size={size}
									/>
								),
							}}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</QueryClientProvider>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		alignItems: "center",
		justifyContent: "center",
	},
});
