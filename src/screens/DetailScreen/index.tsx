import React from "react";
import { View } from "react-native";

import DetailCard from "../../components/DetailCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeTabParamList } from "../../navigation/HomeTab";

type IDetailScreenProps = NativeStackScreenProps<
	HomeTabParamList,
	"DetailScreen"
>;

const Home = (props: IDetailScreenProps) => {
	const { business } = props.route.params;

	return (
		<View>
			<DetailCard business={business} />
		</View>
	);
};

export default Home;
