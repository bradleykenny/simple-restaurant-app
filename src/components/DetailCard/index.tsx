import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	Image,
	Pressable,
	ScrollView,
	Text,
	View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SharedElement } from "react-navigation-shared-element";
import { HomeTabStackType } from "../../navigation/HomeTab";
import { Business } from "../../types/Business";
import { styles } from "./styles";
import Reanimated, { 
	SlideInDown, 
	SlideOutUp,
	useSharedValue 
} from "react-native-reanimated";
import { Rating } from "react-native-ratings";
import { colors } from "../../themes";
import ChipGroup from "../ChipGroup";
import menuItems from "../../data/menuItems";
import MenuItemCard from "../MenuItemCard";

interface IDetailCardProps {
	business: Business;
}

const DetailCard = (props: IDetailCardProps) => {
	const { business } = props;

	const navigation = useNavigation<HomeTabStackType>();
	const scrollViewHeight = useSharedValue(0);

	const handlePress = () => {
		navigation.navigate("HomeScreen");
	};

	return (
		<View style={styles.detailCard}>
			<Pressable style={[styles.pressable, styles.boxShadow]}
					   onPress={handlePress}>
				<Icon name="close" 
				      size={16} 
					  color={colors.black} />
			</Pressable>
			{business.image_url !== "" && (
				<SharedElement id={`${business.id}.image`}>
					<View style={styles.imageBackdrop}>
						<Image
							style={styles.image}
							source={{ uri: business.image_url }}
						/>
					</View>
				</SharedElement>
			)}
			<Reanimated.View entering={SlideInDown.delay(200).duration(400)} style={{ flex: 1}}>
				<View style={[styles.scrollViewContainer, styles.boxShadow]}>
					<ScrollView style={styles.scrollView}>
						<Text style={styles.title}>{business.name}</Text>
						<View style={styles.listItemView}>
							<Rating
								type="star"
								startingValue={business.rating}
								imageSize={20}
								readonly
								style={styles.ratingStars}
							/>
							<Text style={styles.ratingText}>
								{business.rating}
							</Text>
						</View>

						<ChipGroup
							titles={business.categories.map(
								(category) => category.title
							)}
						/>
						<View style={styles.listItemView}>
							<Icon
								name="map"
								size={16}
								style={styles.listItemIcon}
							/>
							<Text>
								{`${business.location.address1}, ${business.location.city}, ${business.location.state} ${business.location.zip_code} ${business.location.country}`}
							</Text>
						</View>
						<View style={styles.listItemView}>
							<Icon
								name="phone"
								size={16}
								style={styles.listItemIcon}
							/>
							<Text>{business.phone}</Text>
						</View>
						<View style={styles.menuItemsFlatList}>
							<Text
								style={{
									fontSize: 18,
									fontWeight: "bold",
									marginBottom: 10,
								}}
							>
								Menu
							</Text>
							{menuItems.map((item) => (
								<MenuItemCard data={item} key={item.name} />
							))}
							{menuItems.map((item) => (
								<MenuItemCard data={item} key={item.name} />
							))}
							{menuItems.map((item) => (
								<MenuItemCard data={item} key={item.name} />
							))}
						</View>
					</ScrollView>
				</View>
			</Reanimated.View>
			<StatusBar style="light" />
		</View>
	);
};

export default DetailCard;
