import React from "react";
import {
	ActivityIndicator,
	Animated,
	NativeSyntheticEvent,
	NativeTouchEvent,
	Pressable,
	StyleProp,
	Text,
	ViewStyle,
} from "react-native";
import { styles } from "./styles";

interface IProps {
	disabled?: boolean;
	loading?: boolean;
	onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
	style?: StyleProp<ViewStyle>;
	title: string;
}

const Button = (props: IProps) => {
	const { disabled, loading, onPress, style, title } = props;

	const animatedButtonScale = new Animated.Value(1);

	const onPressIn = () => {
		Animated.spring(animatedButtonScale, {
			toValue: 0.96,
			useNativeDriver: true,
		}).start();
	};

	const onPressOut = () => {
		Animated.spring(animatedButtonScale, {
			toValue: 1,
			useNativeDriver: true,
		}).start();
	};

	const animatedScaleStyle = {
		transform: [
			{
				scale: animatedButtonScale,
			},
		],
	};

	return (
		<Animated.View
			style={[
				animatedScaleStyle,
				styles.mainView,
				disabled && styles.disabled,
				style,
			]}
		>
			<Pressable
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
