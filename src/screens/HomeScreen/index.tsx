import { YELP_API_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
	FlatList,
	ListRenderItemInfo,
	NativeSyntheticEvent,
	TextInputSubmitEditingEventData,
	View,
} from "react-native";
import Card from "../../components/Card";
import TextField from "../../components/TextField";
import { HomeTabStackType } from "../../navigation/HomeTab";
import { Business } from "../../types/Business";
import { BusinessSearchDto } from "../../types/BusinessSearch";
import { styles } from "./styles";

interface IProps {}

const Home = (props: IProps) => {
	const navigation = useNavigation<HomeTabStackType>();
	const [business, setBusiness] = useState<BusinessSearchDto>();

	const [location, setLocation] = useState("");

	useEffect(() => {
		axios
			.get(
				`https://api.yelp.com/v3/businesses/search?location=${location}`,
				{
					headers: {
						Authorization: `Bearer ${YELP_API_KEY}`,
					},
				}
			)
			.then((res: BusinessSearchDto) => setBusiness(res));
	}, [location]);

	const handleTextFieldSubmit = (
		e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
	) => {
		setLocation(e.nativeEvent.text);
		// setLocation(e.currentTarget)
	};

	return (
		<View style={styles.container}>
			<View style={styles.textFieldContainer}>
				<TextField
					onSubmitEditing={handleTextFieldSubmit}
					placeholder="Enter location"
				/>
			</View>
			<FlatList
				data={business?.data.businesses}
				renderItem={(business: ListRenderItemInfo<Business>) => (
					<Card business={business.item} />
				)}
				style={styles.flatListContainer}
				scrollIndicatorInsets={styles.scrollInset}
			/>
		</View>
	);
};

export default Home;
