import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { Animated, Image, Text, View } from "react-native";
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

	const fadeAnim = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0

	React.useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 0.8,
			duration: 1000,
			useNativeDriver: false,
		}).start();
	}, [fadeAnim]);

	const bgColorInterpolation = fadeAnim.interpolate({
		inputRange: [0.8, 1],
		outputRange: ["#000", "#fff"],
	});

	console.log(bgColorInterpolation);

	return (
		<View style={styles.detailCard}>
			{business.image_url !== "" && (
				<SharedElement id={`${business.id}.image`}>
					<Animated.View
						style={{
							backgroundColor: bgColorInterpolation,
							opacity: fadeAnim,
						}}
					>
						<Image
							style={styles.image}
							source={{ uri: business.image_url }}
						/>
					</Animated.View>
				</SharedElement>
			)}
			<Icon
				name="close"
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
