import React, { useState, useEffect } from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import { YELP_API_KEY } from "@env";

import axios from "axios";

import Card from "../../components/Card";
import { Business } from "../../types/Business";
import { BusinessSearchDto } from "../../types/BusinessSearch";

import { styles } from "./styles";

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
		<View style={styles.container}>
			<FlatList
				data={business?.data.businesses}
				renderItem={(business: ListRenderItemInfo<Business>) => (
					<Card business={business.item} />
				)}
				style={{ overflow: "visible" }}
				scrollIndicatorInsets={styles.scrollInset}
			/>
		</View>
	);
};

export default Home;
