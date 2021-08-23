import React from "react";
import { FlatList, Text, View } from "react-native";
import axios from "axios";
import { BusinessDto } from "../dto/BusinessDto";
import { useState } from "react";
import { useEffect } from "react";
import { YELP_API_KEY } from "react-native-dotenv";

interface IProps {}

const Home = (props: IProps) => {
	const [business, setBusiness] = useState<BusinessDto>();

	useEffect(() => {
		axios
			.get(
				"https://api.yelp.com/v3/businesses/search?location=43 Connaught Circuit, Kellyville NSW 2155",
				{
					headers: {
						Authorization: `Bearer ${YELP_API_KEY}`,
					},
				}
			)
			.then((res: BusinessDto) => setBusiness(res));
	}, []);

	return (
		<View>
			<FlatList
				data={business?.data.businesses}
				renderItem={(item) => <Text>{item.item.name}</Text>}
			/>
		</View>
	);
};

export default Home;
