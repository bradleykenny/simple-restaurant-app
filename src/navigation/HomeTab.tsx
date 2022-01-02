import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Platform } from "react-native";
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
		<Stack.Navigator screenOptions={{
				cardStyleInterpolator: ({ current: { progress } }) => ({
					cardStyle: { opacity: progress },
				}),
				presentation: "modal",
			}}
			detachInactiveScreens={Platform.OS === 'web'}
		>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ title: "Home" }}
			/>
			<Stack.Screen
				name="DetailScreen"
				component={DetailScreen}
				options={{
					headerShown: false,
					gestureEnabled: false,
				}}
				sharedElements={(route, otherRoute, showing) => {
					const { business } = route.params;
					return [
						{
							id: `${business.id}.image`,
							animation: "move",
							resize: "clip",
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
