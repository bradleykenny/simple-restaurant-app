import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface IChipProps {
	text: string;
}

const Chip = (props: IChipProps) => {
	const { text } = props;
	return (
		<View style={styles.chip}>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
};

export default Chip;
