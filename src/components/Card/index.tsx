import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Animated, Image, Pressable, Text, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import translations from "../../constants/translations";
import { HomeTabStackType } from "../../navigation/HomeTab";
import { Business } from "../../types/Business";
import Button from "../Button";
import { styles } from "./styles";

interface ICardProps {
	business: Business;
	showButtonOnCard?: boolean;
}

const Card = (props: ICardProps) => {
	const { business, showButtonOnCard } = props;

	const navigation = useNavigation<HomeTabStackType>();

	const handlePress = () => {
		navigation.navigate("DetailScreen", { business: business });
	};

	const animatedButtonScale = new Animated.Value(1);

	const onPressIn = () => {
		Animated.spring(animatedButtonScale, {
			toValue: 0.96,
			useNativeDriver: true,
		}).start();
	};

	const onPressOut = () => {
		Animated.spring(animatedButtonScale, {
			toValue: 1,
			useNativeDriver: true,
		}).start();
	};

	const animatedScaleStyle = {
		transform: [
			{
				scale: animatedButtonScale,
			},
		],
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
		<Animated.View style={animatedScaleStyle}>
			<Pressable
				style={styles.card}
				onPress={handlePress}
				onPressIn={onPressIn}
				onPressOut={onPressOut}
			>
				<View style={styles.cardHeaderContainer}>
					{business.image_url !== "" && (
						<SharedElement id={`${business.id}.image`}>
							<Image
								style={styles.image}
								source={{ uri: business.image_url }}
							/>
						</SharedElement>
					)}
				</View>
				<View style={styles.infoTextGroup}>
					<Text style={styles.title}>{business.name}</Text>
					<Text style={styles.subtitle}>
						{business.location.city}, {business.location.state}
					</Text>
					<Text>
						{translations.homeTab.card.labels.rating}
						{business.rating}/5
					</Text>
					<Text>
						{translations.homeTab.card.labels.price}
						{business.price}
					</Text>
					<View style={{ marginTop: 10, marginBottom: -15 }}>
						{transactionFields()}
					</View>
				</View>
				{showButtonOnCard && (
					<View style={styles.buttonView}>
						<Button title="More Info" onPress={handlePress} />
					</View>
				)}
			</Pressable>
		</Animated.View>
	);
};

export default Card;
