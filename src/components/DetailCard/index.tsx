import React from "react";
import { Image, Text, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { Business } from "../../types/Business";
import { styles } from "./styles";

interface IDetailCardProps {
	business: Business;
}

const DetailCard = (props: IDetailCardProps) => {
	const { business } = props;

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
			<View style={styles.paddedInnerCard}>
				<Text style={styles.title}>{business.name}</Text>
				<Text>Rating: {business.rating}/5</Text>
				<Text>Price: {business.price}</Text>
			</View>
		</View>
	);
};

export default DetailCard;
