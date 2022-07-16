import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	NativeScrollEvent,
	NativeSyntheticEvent,
	Pressable,
	ScrollView,
	Text,
	View,
} from "react-native";
import { Rating } from "react-native-ratings";
import Reanimated, {
	useAnimatedStyle,
	useSharedValue,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import menuItems from "../../data/menuItems";
import { HomeTabStackType } from "../../navigation/HomeTab";
import { colors } from "../../themes";
import { commonStyles } from "../../themes/styles";
import { Business } from "../../types/Business";
import ChipGroup from "../ChipGroup";
import MenuItemCard from "../MenuItemCard";
import { styles } from "./styles";

interface IDetailCardProps {
	business: Business;
}

const DetailCard = (props: IDetailCardProps) => {
	const { business } = props;

	console.log(business);

	const navigation = useNavigation<HomeTabStackType>();
	const imageScale = useSharedValue(1);

	const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		const { y } = event.nativeEvent.contentOffset;
		if (y <= 0) {
			console.log(200 + Math.abs(y));
			imageScale.value = 1 + Math.abs(y) / 150;
		}
	};

	const handlePress = () => {
		navigation.navigate("HomeScreen");
	};

	const animatedStyleImage = useAnimatedStyle(() => ({
		transform: [
			{
				scale: imageScale.value,
			},
			{
				translateY: imageScale.value * -15,
			},
		],
	}));

	return (
		<View style={styles.detailCard}>
			<Pressable
				style={[styles.pressable, commonStyles.boxShadow]}
				onPress={handlePress}
			>
				<Icon name="close" size={16} color={colors.black} />
			</Pressable>
			<ScrollView
				style={styles.scrollView}
				contentContainerStyle={styles.scrollViewContainer}
				stickyHeaderIndices={[0]}
				onScroll={handleScroll}
				scrollEventThrottle={16}
			>
				{business.image_url !== "" && (
					<View style={[styles.imageOverlay]}>
						<Reanimated.Image
							style={[styles.image, animatedStyleImage]}
							source={{ uri: business.image_url }}
						/>
					</View>
				)}
				<View
					style={[
						styles.content,
						commonStyles.boxShadow,
						{ shadowOffset: { width: 0, height: -15 } },
					]}
				>
					<Text style={styles.title}>{business.name}</Text>
					<View style={styles.listItemView}>
						<Rating
							type="star"
							startingValue={business.rating}
							imageSize={20}
							readonly
							style={styles.ratingStars}
						/>
						<Text style={styles.ratingText}>{business.rating}</Text>
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
					</View>
				</View>
			</ScrollView>
			<StatusBar style="light" />
		</View>
	);
};

export default DetailCard;
