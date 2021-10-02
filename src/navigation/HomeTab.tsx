import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import DetailScreen from "../screens/DetailScreen";
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

const Stack = createSharedElementStackNavigator<HomeTabParamList>();
const HomeTab = (props: IProps) => {
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
				sharedElements={(route, otherRoute, showing) => {
					const { business } = route.params;
					console.log(`image.${business.id}`);
					return [
						{
							id: `${business.id}.image`,
							animation: "move",
							resize: "clip",
						},
					];
				}}
			/>
		</Stack.Navigator>
	);
};

export default HomeTab;
