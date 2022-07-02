import { YELP_API_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";

import React, { useEffect, useState } from "react";
import {
	FlatList,
	ListRenderItemInfo,
	NativeSyntheticEvent,
	TextInputSubmitEditingEventData,
	View,
	Text,
	NativeScrollEvent,
} from "react-native";
import { useQuery } from "react-query";
import { SharedElement } from "react-navigation-shared-element";
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
	const [location, setLocation] = useState("Sydney, NSW");

	const { isLoading, error, data, refetch } = useQuery<{
		businesses: Business[];
	}>("restaurants", () =>
		fetch(
			`https://api.yelp.com/v3/businesses/search?location=${location}`,
			{
				headers: {
					Authorization: `Bearer ${YELP_API_KEY}`,
				},
			}
		).then((res) => res.json())
	);

	const handleTextFieldSubmit = (
		e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
	) => {
		setLocation(e.nativeEvent.text);
		// setLocation(e.currentTarget)
	};

	useEffect(() => {
		refetch();
	}, [location]);

	return (
		<View style={styles.container}>
			{isLoading && <Text>LOADING!!!!</Text>}
			<View style={styles.textFieldContainer}>
				<TextField
					onSubmitEditing={handleTextFieldSubmit}
					placeholder="Enter location"
				/>
			</View>
			<FlatList
				data={data?.businesses}
				renderItem={(business: ListRenderItemInfo<Business>) => (
					<SharedElement id={`${business.item.id}.card`}>
						<Card business={business.item} />
					</SharedElement>
				)}
				style={styles.flatListContainer}
				scrollIndicatorInsets={styles.scrollInset}
			/>
		</View>
	);
};

export default Home;
