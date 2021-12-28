import React from "react";
import {
	ActivityIndicator,
	Animated,
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

	const animatedButtonScale = new Animated.Value(1);

	const onPressIn = () => {
		Animated.spring(animatedButtonScale, { 
			toValue: 0.95,
			useNativeDriver: true
		}).start();
	};

	const onPressOut = () => {
		Animated.spring(animatedButtonScale, {
			toValue: 1,
			useNativeDriver: true
		}).start();
	}

	const animatedScaleStyle = {
		transform: [{ 
			scale: animatedButtonScale
		}]
	}

	return (
		<Animated.View style={animatedScaleStyle}>
			<Pressable
				style={({ pressed }) => [
					styles.pressable,
					disabled && styles.disabled,
				]}
				onPress={onPress}
				onPressIn={onPressIn}
				onPressOut={onPressOut}
				disabled={disabled}
			>
				{loading ? (
					<ActivityIndicator color="white" />
				) : (
					({ pressed }) => <Text style={styles.text}>{title}</Text>
				)}
			</Pressable>
		</Animated.View>
	);
};

export default Button;
