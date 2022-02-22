import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { 
	Platform, 
	StyleSheet 
} from "react-native";
import { 
	QueryClient, 
	QueryClientProvider 
} from "react-query";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeTab from "./src/navigation/HomeTab";
import AboutScreen from "./src/screens/AboutScreen";

export type RootTabParamList = {
	Home: undefined;
	About: undefined;
};

const Tab = createBottomTabNavigator();
export default function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer>
				{ 
					Platform.OS === 'web' ? <HomeTab /> : (
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
					) 
				}
			</NavigationContainer>
		</QueryClientProvider>
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
