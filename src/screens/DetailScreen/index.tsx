import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
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
			<SharedElement id={`${business.id}.card`}>
				<DetailCard business={business} />
			</SharedElement>
		</View>
	);
};

export default DetailScreen;
