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

	const selectStyles = {
		backgroundColor: colors.white,
	};

	const finalColour = selected ? colour : "gray";

	return (
		<Pressable
			style={[styles.container, selectStyles]}
			onPress={() => onPress?.(name)}
		>
			<Icon
				name={icon}
				size={48}
				style={styles.icon}
				color={finalColour}
			/>
			{selected && (
				<Icon
					name={icon}
					size={48}
					style={[styles.icon, styles.shadowIcon]}
					color={finalColour}
				/>
			)}
			<Text style={[styles.text, { color: finalColour }]}>{name}</Text>
			{selected && (
				<View
					style={[
						styles.backdrop,
						{ backgroundColor: `${finalColour}24` },
					]}
				/>
			)}
		</Pressable>
	);
};

export default FoodCategoryTile;
