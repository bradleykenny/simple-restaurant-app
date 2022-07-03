import React from "react";
import { ScrollView } from "react-native";
import Chip from "../Chip";
import styles from "./styles";

interface IChipGroupProps {
	titles: string[];
}

const ChipGroup = (props: IChipGroupProps) => {
	const { titles } = props;
	return (
		<ScrollView
			style={styles.chipContainer}
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			{titles.map((title) => (
				<Chip text={title} key={title} />
			))}
		</ScrollView>
	);
};

export default ChipGroup;
