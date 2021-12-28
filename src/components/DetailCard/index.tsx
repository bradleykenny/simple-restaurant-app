import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { SharedElement } from "react-navigation-shared-element";
import { HomeTabStackType } from "../../navigation/HomeTab";
import { Business } from "../../types/Business";
import TextField from "../TextField";
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
			<SafeAreaView>
				<Pressable
					style={styles.pressable}
					onPress={handlePress}
				>
					<Icon name="close" size={16} color="#fff">
						<Text style={styles.iconText}> Close </Text>
					</Icon>
				</Pressable>
				<View style={styles.paddedInnerCard}>
					<Text style={styles.title}>{business.name}</Text>
					<Text>Rating: {business.rating}/5</Text>
					<Text>Price: {business.price}</Text>
					<TextField />
				</View>
				<StatusBar style="light" />
			</SafeAreaView>
		</View>
	);
};

export default DetailCard;
