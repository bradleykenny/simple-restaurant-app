import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import DetailCard from "../../components/DetailCard";
import { HomeTabParamList } from "../../navigation/HomeTab";

type IDetailScreenProps = NativeStackScreenProps<
	HomeTabParamList,
	"DetailScreen"
>;

export const DetailScreen = (props: IDetailScreenProps) => {
	const { business } = props.route.params;

	return (
		<View>
			<DetailCard business={business} />
		</View>
	);
};

DetailScreen.sharedElements = (route: any) => {
	const { item } = route.params;
	console.log("hmmm", item);
	return [
		{
			id: `image.${item.id}`,
			animation: "move",
			resize: "clip",
		},
	];
};
