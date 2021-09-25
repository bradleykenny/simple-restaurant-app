import React from "react";
import { Image, Text, View } from "react-native";
import { Business } from "../../types/Business";
import TextField from "../TextField";
import { styles } from "./styles";

interface ICardProps {
	business: Business;
}

const Card = (props: ICardProps) => {
	const { business } = props;

	return (
		<View style={styles.card}>
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
				<TextField />
			</View>
		</View>
	);
};

export default Card;
