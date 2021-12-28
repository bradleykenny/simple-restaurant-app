import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { HomeTabStackType } from "../../navigation/HomeTab";
import { Business } from "../../types/Business";
import Button from "../Button";
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

	const transactionFields = () => {
		if (business.transactions.length > 0) {
			return (
				<View style={styles.transactions}>
					<Text style={styles.transactionTitle}>Transactions</Text>
					{business.transactions?.map((transaction) => (
						<Text style={styles.transactionItem}>
							{" "}
							• {transaction}
						</Text>
					))}
				</View>
			);
		} else {
			return null;
		}
	};

	return (
		<Pressable style={styles.card} onPress={handlePress}>
			<View style={styles.paddedInnerCard}>
				<View style={styles.cardHeaderContainer}>
					{business.image_url !== "" && (
						<SharedElement id={`${business.id}.image`}>
							<Image
								style={styles.image}
								source={{ uri: business.image_url }}
							/>
						</SharedElement>
					)}
					<View style={styles.titlesContainer}>
						<Text style={styles.title}>{business.name}</Text>
						<Text style={styles.subtitle}>
							{business.location.city}, {business.location.state}
						</Text>
					</View>
				</View>
				<View style={styles.infoTextGroup}>
					<Text>Rating: {business.rating}/5</Text>
					<Text>Price: {business.price}</Text>
				</View>
				{transactionFields()}
				<Button title="More Info" onPress={handlePress} />
			</View>
		</Pressable>
	);
};

export default Card;
