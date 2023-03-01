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
		<Stack.Navigator
			screenOptions={{
				cardStyleInterpolator: ({ current: { progress } }) => ({
					cardStyle: { opacity: progress },
				}),
				presentation: "modal",
				headerShown: false,
			}}
			detachInactiveScreens={false}
		>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ title: "Home", headerShown: false }}
			/>
			<Stack.Screen
				name="DetailScreen"
				component={DetailScreen}
				options={{
					gestureEnabled: false,
				}}
				sharedElements={(route, otherRoute, showing) => {
					const { business } = route.params;
					return [
						{
							id: `${business.id}.image`,
							animation: "move",
						},
						{
							id: `${business.id}.title`,
							animation: "fade",
						},
						{
							id: `${business.id}.rating`,
							animation: "fade",
						},
						{
							id: `${business.id}.price`,
							animation: "fade",
						},
					];
				}}
			/>
		</Stack.Navigator>
	);
};

export default HomeTab;
