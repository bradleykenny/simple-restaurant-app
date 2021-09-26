import React from "react";
import {
	ActivityIndicator,
	NativeSyntheticEvent,
	NativeTouchEvent,
	Pressable,
	Text,
} from "react-native";

import { styles } from "./styles";

interface IProps {
	onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
	title: string;
	loading?: boolean;
	disabled?: boolean;
}

const Button = (props: IProps) => {
	const { disabled, loading, onPress, title } = props;

	return (
		<Pressable
			style={({ pressed }) => [
				styles.pressable,
				pressed ? styles.pressed : styles.unpressed,
				disabled && styles.disabled,
			]}
			onPress={onPress}
			disabled={disabled}
		>
			{loading ? (
				<ActivityIndicator color="white" />
			) : (
				({ pressed }) => <Text style={styles.text}>{title}</Text>
			)}
		</Pressable>
	);
};

export default Button;
