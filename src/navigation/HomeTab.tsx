import React from "react";
import {
	createStackNavigator,
	StackNavigationProp,
} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { Business } from "../types/Business";
import DetailScreen from "../screens/DetailScreen";

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
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="DetailScreen" component={DetailScreen} />
		</Stack.Navigator>
	);
};

export default HomeTab;
