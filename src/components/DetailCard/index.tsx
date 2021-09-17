import React from "react";
import { Image, Text, View } from "react-native";
import { Business } from "../../types/Business";
import { styles } from "./styles";

interface ICardProps {
	business: Business;
}

const DetailCard = (props: ICardProps) => {
	const { business } = props;

	return (
		<View style={styles.detailCard}>
			<Text>Hello</Text>
		</View>
	);
};

export default DetailCard;
