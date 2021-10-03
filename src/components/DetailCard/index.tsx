import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
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
					<View style={{ backgroundColor: "black" }}>
						<Image
							style={styles.image}
							source={{ uri: business.image_url }}
						/>
					</View>
				</SharedElement>
			)}
			<Icon
				name="left"
				style={{
					position: "absolute",
					marginTop: 60,
					marginLeft: 20,
					shadowColor: "#000000",
					shadowOffset: {
						width: 0,
						height: 0,
					},
					shadowOpacity: 0.2,
					shadowRadius: 5,
				}}
				size={20}
				color="#fff"
				onPress={handlePress}
			/>
			<View style={styles.paddedInnerCard}>
				<Text style={styles.title}>{business.name}</Text>
				<Text>Rating: {business.rating}/5</Text>
				<Text>Price: {business.price}</Text>
			</View>
			<StatusBar style="light" />
		</View>
	);
};

export default DetailCard;
