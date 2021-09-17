import React from "react";
import { Text, View } from "react-native";
import HomeScreen from "../screens/HomeScreen/Home";

interface IProps {}

const HomeTab = (props: IProps) => {
	return (
		<View>
			<HomeScreen />
		</View>
	);
};

export default HomeTab;
