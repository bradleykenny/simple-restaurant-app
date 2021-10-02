import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { HomeTabStackType } from "../../navigation/HomeTab";
import { Business } from "../../types/Business";
import { styles } from "./styles";

interface IDetailCardProps {
	business: Business;
}

const DetailCard = (props: IDetailCardProps) => {
	const { business } = props;

	const navigation = useNavigation<HomeTabStackType>();

	const handlePress = () => {
		navigation.navigate("HomeScreen");
	};

	return (
		<View style={styles.detailCard}>
			{business.image_url !== "" && (
				<SharedElement id={`${business.id}.image`}>
					<Image
						style={styles.image}
						source={{ uri: business.image_url }}
					/>
				</SharedElement>
			)}
			<Text onPress={handlePress}>Close</Text>
			<View style={styles.paddedInnerCard}>
				<SharedElement id={`${business.id}.title`}>
					<Text style={styles.title}>{business.name}</Text>
				</SharedElement>
				<SharedElement id={`${business.id}.rating`}>
					<Text>Rating: {business.rating}/5</Text>
				</SharedElement>
				<SharedElement id={`${business.id}.price`}>
					<Text>Price: {business.price}</Text>
				</SharedElement>
			</View>
		</View>
	);
};

export default DetailCard;
