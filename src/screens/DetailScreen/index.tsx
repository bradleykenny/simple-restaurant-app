import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import DetailCard from "../../components/DetailCard";
import { HomeTabParamList } from "../../navigation/HomeTab";

type IDetailScreenProps = NativeStackScreenProps<
	HomeTabParamList,
	"DetailScreen"
>;

const DetailScreen = (props: IDetailScreenProps) => {
	const { business } = props.route.params;

	return (
		<View>
			<DetailCard business={business} />
		</View>
	);
};

export default DetailScreen;
