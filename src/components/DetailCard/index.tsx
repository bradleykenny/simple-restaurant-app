import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, View } from "react-native";
import { HomeTabParamList } from "../../navigation/HomeTab";
import { Business } from "../../types/Business";
import { styles } from "./styles";

type IDetailCardProps = NativeStackScreenProps<
	HomeTabParamList,
	"DetailScreen"
>;

const DetailCard = (props: IDetailCardProps) => {
	const { navigation, route } = props;
	const { business } = route.params;

	return (
		<View style={styles.detailCard}>
			{business.image_url !== "" && (
				<Image
					style={styles.image}
					source={{ uri: business.image_url }}
				/>
			)}
			<View style={styles.paddedInnerCard}>
				<Text style={styles.title}>{business.name}</Text>
				<Text>Rating: {business.rating}/5</Text>
				<Text>Price: {business.price}</Text>
			</View>
		</View>
	);
};

export default DetailCard;
