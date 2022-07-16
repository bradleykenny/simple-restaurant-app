import React from "react";
import { Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FoodCategory } from "../../constants/foodCategories";
import { colors } from "../../themes";
import { styles } from "./styles";

interface IFoodCategoryTileProps {
	item: FoodCategory;
	selected?: boolean;
	onPress?: (text: string) => void;
}

const FoodCategoryTile = (props: IFoodCategoryTileProps) => {
	const { item, onPress, selected } = props;
	const { name, colour, icon } = item;

	const selectStyles = selected
		? {
				backgroundColor: `${colour}1A`,
				borderColor: colour,
				// borderWidth: 2,
		  }
		: {
				backgroundColor: colors.white,
		  };

	return (
		<Pressable
			style={[styles.container, selectStyles]}
			onPress={() => onPress?.(name)}
		>
			<Icon name={icon} size={48} style={styles.icon} color={colour} />
			<Text style={[styles.text, { color: colour }]}>{name}</Text>
			<View
				style={[styles.backdrop, { backgroundColor: `${colour}24` }]}
			/>
		</Pressable>
	);
};

export default FoodCategoryTile;
