import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { HomeTabStackType } from "../../navigation/HomeTab";
import { Business } from "../../types/Business";
import Button from "../Button";
import TextField from "../TextField";
import { styles } from "./styles";

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
			<View style={styles.paddedInnerCard}>
				<View>
					<Text style={styles.title}>
						{business.image_url !== "" && (
							<SharedElement id={`${business.id}.image`}>
								<Image
									style={styles.image}
									source={{ uri: business.image_url }}
								/>
							</SharedElement>
						)}
						{business.name}
					</Text>
				</View>
				<Text>Rating: {business.rating}/5</Text>
				<Text>Price: {business.price}</Text>
				<TextField />
				<Button title="More Info" onPress={handlePress} />
			</View>
		</View>
	);
};

export default Card;
