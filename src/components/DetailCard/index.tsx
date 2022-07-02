import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SharedElement } from "react-navigation-shared-element";
import { HomeTabStackType } from "../../navigation/HomeTab";
import { Business } from "../../types/Business";
import { styles } from "./styles";
import Reanimated, { SlideInDown } from "react-native-reanimated";
import Chip from "../Chip";
import { Rating } from "react-native-ratings";

interface IDetailCardProps {
	business: Business;
}

const DetailCard = (props: IDetailCardProps) => {
	const { business } = props;

	const navigation = useNavigation<HomeTabStackType>();

	const handlePress = () => {
		navigation.navigate("HomeScreen");
	};

	console.log(business);

	const Chips = () => (
		<ScrollView
			style={styles.chipContainer}
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			{business.categories.map((category) => (
				<Chip text={category.title} key={category.alias} />
			))}
		</ScrollView>
	);

	return (
		<View style={styles.detailCard}>
			{business.image_url !== "" && (
				<View style={{ marginBottom: -25 }}>
					<SharedElement id={`${business.id}.image`}>
						<View style={styles.imageBackdrop}>
							<Image
								style={styles.image}
								source={{ uri: business.image_url }}
							/>
						</View>
					</SharedElement>
				</View>
			)}
			<Pressable
				style={[styles.pressable, styles.boxShadow]}
				onPress={handlePress}
			>
				<Icon name="close" size={16} color="#000" />
			</Pressable>
			<Reanimated.View entering={SlideInDown.delay(200).duration(400)}>
				<View style={[styles.scrollViewContainer, styles.boxShadow]}>
					<ScrollView style={styles.scrollView}>
						<Text style={styles.title}>{business.name}</Text>
						<Rating
							type="star"
							startingValue={business.rating}
							imageSize={30}
							readonly
							style={{
								alignItems: "flex-start",
								marginBottom: 15,
							}}
						/>
						<Chips />
						<View
							style={{ flexDirection: "row", marginVertical: 5 }}
						>
							<Icon
								name="map"
								size={16}
								style={{ marginRight: 5 }}
							/>
							<Text>
								{`${business.location.address1}, ${business.location.city}, ${business.location.state} ${business.location.zip_code} ${business.location.country}`}
							</Text>
						</View>
						<View
							style={{ flexDirection: "row", marginVertical: 5 }}
						>
							<Icon
								name="phone"
								size={16}
								style={{ marginRight: 5 }}
							/>
							<Text>{business.phone}</Text>
						</View>
					</ScrollView>
				</View>
			</Reanimated.View>
			<StatusBar style="light" />
		</View>
	);
};

export default DetailCard;
