import React from "react";
import { 
	Platform, 
	StyleSheet 
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { 
	QueryClient, 
	QueryClientProvider 
} from "react-query";
import { initializeApp } from 'firebase/app';
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeTab from "./src/navigation/HomeTab";
import AboutScreen from "./src/screens/AboutScreen";

import { firebaseConfig } from "./firestoreConfig";
import { getFirestore, setDoc, doc } from 'firebase/firestore';

export type RootTabParamList = {
	Home: undefined;
	About: undefined;
};

const Tab = createBottomTabNavigator();
export default function App() {
	const queryClient = new QueryClient();

	initializeApp(firebaseConfig);

	console.log('test');
	const firestore = getFirestore();
	setDoc(doc(firestore, "characters", "luigi"), {
		employment: "friend",
		outfitColor: "green",
		specialAttack: "jump"
	  });

	return (
		<QueryClientProvider client={queryClient}>
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
