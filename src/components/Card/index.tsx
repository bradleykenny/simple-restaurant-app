import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { Business } from "../../types/Business";
import Button from "../Button";
import TextField from "../TextField";
import { styles } from "./styles";
import { HomeTabStackType } from "../../navigation/HomeTab";
import { SharedElement } from "react-navigation-shared-element";

interface ICardProps {
	business: Business;
}

const Card = (props: ICardProps) => {
	const { business } = props;

	const navigation = useNavigation<HomeTabStackType>();

	const handlePress = () => {
		navigation.navigate("DetailScreen", { business: business });
	};

	return (
		<View style={styles.card}>
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
				<TextField />
				<Button title="Button" onPress={handlePress} />
			</View>
		</View>
	);
};

export default Card;
