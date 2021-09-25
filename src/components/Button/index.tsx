import React, { useState } from "react";
import {
	ActivityIndicator,
	Animated,
	Button as DefaultButton,
	NativeSyntheticEvent,
	NativeTouchEvent,
	Pressable,
	StyleProp,
	Text,
} from "react-native";

import { styles } from "./styles";

interface IProps {
	onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
	title: string;
}

const Button = (props: IProps) => {
	const { title, onPress } = props;

	return (
		<Pressable
			style={({ pressed }) => [
				styles.pressable,
				pressed ? styles.pressed : styles.unpressed,
			]}
			onPress={onPress}
		>
			{({ pressed }) => <Text style={styles.text}>{title}</Text>}
		</Pressable>
	);
};

export default Button;
