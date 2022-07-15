import React from "react";
import { Image, Text, View } from "react-native";
import { MenuItem } from "../../data/menuItems";
import { styles } from "./styles";

interface IMenuItemCardProps {
	data: MenuItem;
}

const MenuItemCard = (props: IMenuItemCardProps) => {
	const { data } = props;
	console.log(data);
	return (
		<View style={styles.menuItemCard}>
			<Image source={{ uri: data.image_url }} style={styles.image} />
			<View style={styles.textGroup}>
				<Text style={styles.title}>{data.name}</Text>
				<Text style={styles.price}>{`$${data.price}`}</Text>
				<Text style={styles.description}>{data.description}</Text>
			</View>
		</View>
	);
};

export default MenuItemCard;
