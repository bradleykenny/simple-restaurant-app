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
	Text
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import Card from "../../components/Card";
import TextField from "../../components/TextField";
import { HomeTabStackType } from "../../navigation/HomeTab";
import { Business } from "../../types/Business";
import { BusinessSearchDto } from "../../types/BusinessSearch";
import { styles } from "./styles";

interface IProps {}

const data: Business[] = [
	{
		"alias": "sydney-opera-house-sydney",
		"categories": [
		{
			"alias": "venues",
			"title": "Venues & Event Spaces",
		  },
		{
			"alias": "landmarks",
			"title": "Landmarks & Historical Buildings",
		  },
		{
			"alias": "theater",
			"title": "Performing Arts",
		  },
		],
		"coordinates": {
		  "latitude": -33.857123,
		  "longitude": 151.215016,
		},
		"display_phone": "+61 2 9250 7111",
		"distance": 2407.580264308644,
		"id": "xYiGsPaQ0K5_Eut_kK7uMA",
		"image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/XaCdlpn5lomvDBpLfx5d7Q/o.jpg",
		"is_closed": false,
		"location": {
		  "address1": "Bennelong Point",
		  "address2": "",
		  "address3": null,
		  "city": "Sydney",
		  "country": "AU",
		  "display_address": [
			"Bennelong Point",
			"Sydney New South Wales 2000",
			"Australia",
		  ],
		  "state": "NSW",
		  "zip_code": "2000",
		},
		"name": "Sydney Opera House",
		"phone": "+61292507111",
		"rating": 4.5,
		"review_count": 330,
		"transactions": [],
		"url": "https://www.yelp.com/biz/sydney-opera-house-sydney?adjust_creative=10-OmsJrHNdUVmXDoPgoqQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=10-OmsJrHNdUVmXDoPgoqQ",
	  },
	{
		"alias": "royal-botanic-gardens-sydney-3",
		"categories": [
		{
			"alias": "gardens",
			"title": "Botanical Gardens",
		  },
		],
		"coordinates": {
		  "latitude": -33.864176,
		  "longitude": 151.21654,
		},
		"display_phone": "+61 2 9231 8111",
		"distance": 2017.2499654935937,
		"id": "Ux1UZWfgABNkkJTgx0W-kQ",
		"image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Cg1eS1NkuNzjGwenT3lV4A/o.jpg",
		"is_closed": false,
		"location": {
		  "address1": "Mrs Macquaries Rd",
		  "address2": null,
		  "address3": null,
		  "city": "Sydney",
		  "country": "AU",
		  "display_address": [
			"Mrs Macquaries Rd",
			"Sydney New South Wales 2000",
			"Australia",
		  ],
		  "state": "NSW",
		  "zip_code": "2000",
		},
		"name": "Royal Botanic Gardens",
		"phone": "+61292318111",
		"rating": 4.5,
		"review_count": 163,
		"transactions": [],
		"url": "https://www.yelp.com/biz/royal-botanic-gardens-sydney-3?adjust_creative=10-OmsJrHNdUVmXDoPgoqQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=10-OmsJrHNdUVmXDoPgoqQ",
	  },
	{
		"alias": "mr-wong-sydney",
		"categories": [
		{
			"alias": "cantonese",
			"title": "Cantonese",
		  },
		],
		"coordinates": {
		  "latitude": -33.86405,
		  "longitude": 151.20805,
		},
		"display_phone": "+61 2 9114 7317",
		"distance": 1412.5482041264327,
		"id": "6WAco2HNccHCKe4e1xORMA",
		"image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/P5cRMaHMCd7t3nFrX_s0rA/o.jpg",
		"is_closed": false,
		"location": {
		  "address1": "3 Bridge Ln",
		  "address2": null,
		  "address3": "",
		  "city": "Sydney",
		  "country": "AU",
		  "display_address": [
			"3 Bridge Ln",
			"Sydney New South Wales 2000",
			"Australia",
		  ],
		  "state": "NSW",
		  "zip_code": "2000",
		},
		"name": "Mr Wong",
		"phone": "+61291147317",
		"price": "$$$",
		"rating": 4,
		"review_count": 345,
		"transactions": [],
		"url": "https://www.yelp.com/biz/mr-wong-sydney?adjust_creative=10-OmsJrHNdUVmXDoPgoqQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=10-OmsJrHNdUVmXDoPgoqQ",
	  }
]

const Home = (props: IProps) => {
	const navigation = useNavigation<HomeTabStackType>();
	
	const [business, setBusiness] = useState<BusinessSearchDto>();
	const [location, setLocation] = useState("Sydney, NSW");

	// useEffect(() => {
	// 	axios
	// 		.get(
	// 			`https://api.yelp.com/v3/businesses/search?location=${location}`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${YELP_API_KEY}`,
	// 				},
	// 			}
	// 		)
	// 		.then((res: BusinessSearchDto) => {
	// 			setBusiness(res)
	// 		});
	// }, [location]);

	const handleTextFieldSubmit = (
		e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
	) => {
		setLocation(e.nativeEvent.text);
		// setLocation(e.currentTarget)
	};

	console.log(data)

	return (
		<View style={styles.container}>
			<View style={styles.textFieldContainer}>
				<TextField
					onSubmitEditing={handleTextFieldSubmit}
					placeholder="Enter location"
				/>
			</View>
			<FlatList
				data={data}
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
