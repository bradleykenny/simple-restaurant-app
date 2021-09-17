import React, { useState, useEffect } from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import { YELP_API_KEY } from "react-native-dotenv";

import axios from "axios";

import Card from "../../components/Card";
import { Business } from "../../types/Business";
import { BusinessSearchDto } from "../../types/BusinessSearch";

interface IProps {}

const Home = (props: IProps) => {
	const [business, setBusiness] = useState<BusinessSearchDto>();

	useEffect(() => {
		axios
			.get(
				"https://api.yelp.com/v3/businesses/search?location=Meadowbank, NSW",
				{
					headers: {
						Authorization: `Bearer ${YELP_API_KEY}`,
					},
				}
			)
			.then((res: BusinessSearchDto) => setBusiness(res));
	}, []);

	return (
		<View>
			<FlatList
				data={business?.data.businesses}
				renderItem={(business: ListRenderItemInfo<Business>) => (
					<Card business={business.item} />
				)}
			/>
		</View>
	);
};

export default Home;
