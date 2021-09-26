import { YELP_API_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import Card from "../../components/Card";
import { HomeTabStackType } from "../../navigation/HomeTab";
import { Business } from "../../types/Business";
import { BusinessSearchDto } from "../../types/BusinessSearch";
import { styles } from "./styles";

interface IProps {}

const Home = (props: IProps) => {
	const navigation = useNavigation<HomeTabStackType>();
	const [business, setBusiness] = useState<BusinessSearchDto>();

	useEffect(() => {
		axios
			.get(
				"https://api.yelp.com/v3/businesses/search?location=Dallas, TX",
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
