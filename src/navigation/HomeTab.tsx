import {
	createStackNavigator,
	StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import { DetailScreen } from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";
import { Business } from "../types/Business";

interface IProps {}

export type HomeTabParamList = {
	HomeScreen: undefined;
	DetailScreen: { business: Business };
};

export type HomeTabStackType = StackNavigationProp<
	HomeTabParamList,
	"HomeScreen"
>;

const HomeTab = (props: IProps) => {
	const Stack = createStackNavigator<HomeTabParamList>();

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ title: "Home" }}
			/>
			<Stack.Screen
				name="DetailScreen"
				component={DetailScreen}
				options={{ title: "Details" }}
			/>
		</Stack.Navigator>
	);
};

export default HomeTab;
