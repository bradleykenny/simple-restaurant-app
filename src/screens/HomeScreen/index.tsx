import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
	ActivityIndicator,
	FlatList,
	NativeSyntheticEvent,
	RefreshControl,
	ScrollView,
	TextInputSubmitEditingEventData,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import Card from "../../components/Card";
import FoodCategoryTile from "../../components/FoodCategoryTile";
import InputText from "../../components/InputText";
import foodCategories from "../../constants/foodCategories";
import translations from "../../constants/translations";
import useFeedData from "../../hooks/useFeedData";
import { styles } from "./styles";

interface IHomeProps {}

const Home = (props: IHomeProps) => {
	const [location, setLocation] = useState("Sydney, NSW");
	const { data, isLoading, refetch } = useFeedData(location);

	const [selectedCategory, setSelectedCategory] = useState("");

	useEffect(() => {
		refetch();
	}, [location]);

	const handleInputTextSubmit = (
		e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
	) => {
		setLocation(e.nativeEvent.text);
	};

	const handleFoodCategoryPress = (text: string) => {
		if (selectedCategory === text) {
			setSelectedCategory("");
		} else {
			setSelectedCategory(text);
		}
	};

	const HeaderSearchBar = () => (
		<View style={styles.inputTextContainer}>
			<InputText
				onSubmitEditing={handleInputTextSubmit}
				placeholder={translations.homeTab.searchBar.placeholder}
			/>
		</View>
	);

	return (
		<SafeAreaView style={styles.safeAreaView} edges={["top"]}>
			<ScrollView
				style={styles.container}
				refreshControl={
					<RefreshControl
						refreshing={isLoading}
						onRefresh={refetch}
					/>
				}
			>
				<HeaderSearchBar />
				<FlatList
					data={foodCategories}
					renderItem={({ item }) => (
						<FoodCategoryTile
							item={item}
							selected={item.name === selectedCategory}
							onPress={handleFoodCategoryPress}
						/>
					)}
					style={styles.foodCategoriesFlatList}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
				{isLoading && <ActivityIndicator />}
				{data?.businesses.map((business) => (
					<SharedElement id={`${business.id}.card`}>
						<Card business={business} key={business.id} />
					</SharedElement>
				))}
				<StatusBar style="dark" />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
