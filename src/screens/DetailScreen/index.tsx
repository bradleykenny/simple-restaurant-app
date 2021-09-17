import React, { useState, useEffect } from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import { YELP_API_KEY } from "react-native-dotenv";

import axios from "axios";

import Card from "../../components/Card";
import { Business } from "../../types/Business";
import { BusinessSearchDto } from "../../types/BusinessSearch";
import DetailCard from "../../components/DetailCard";

interface IProps {
	business: Business;
}

const Home = (props: IProps) => {
	const { business } = props;

	return (
		<View>
			<DetailCard business={business} />
		</View>
	);
};

export default Home;
