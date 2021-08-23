import React from "react";
import { FlatList, Text, View } from "react-native";
import axios from "axios";
import { BusinessDto } from "../dto/BusinessDto";
import { useState } from "react";
import { useEffect } from "react";

interface IProps {}

const Home = (props: IProps) => {
	const [business, setBusiness] = useState<BusinessDto>();

	useEffect(() => {
		axios
			.get(
				"https://api.yelp.com/v3/businesses/search?location=350 5th Ave, New York, NY 10118",
				{
					headers: {
						Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
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
