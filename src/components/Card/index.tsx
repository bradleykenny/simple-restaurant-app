import React from "react";
import { Image, Text, View } from "react-native";
import { Business } from "../../types/Business";
import { styles } from "./styles";

interface ICardProps {
	business: Business;
}

const Card = (props: ICardProps) => {
	const { business } = props;

	return (
		<View style={styles.card}>
			<Image style={styles.image} source={{ uri: business.image_url }} />
			<View style={styles.paddedInnerCard}>
				<Text style={styles.title}>{business.name}</Text>
				<Text>Rating: {business.rating}/5</Text>
			</View>
		</View>
	);
};

export default Card;
