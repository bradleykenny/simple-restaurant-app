import React, { useRef } from "react";
import { Animated, StyleProp, TextInput, TextStyle } from "react-native";
import { colors } from "../../themes";
import { styles } from "./styles";

interface IProps {
	multiline?: boolean;
	style?: StyleProp<TextStyle>;
}

const TextField = (props: IProps) => {
	const { multiline, style } = props;

	const borderColorAnim = useRef(new Animated.Value(0)).current;

	const handleBlur = () => {
		Animated.timing(borderColorAnim, {
			toValue: 0,
			duration: 300,
			useNativeDriver: false,
		}).start();
	};

	const handleFocus = () => {
		Animated.timing(borderColorAnim, {
			toValue: 1,
			duration: 300,
			useNativeDriver: false,
		}).start();
	};

	const borderColorInterpolation = borderColorAnim.interpolate({
		inputRange: [0, 1],
		outputRange: [colors.inactive, colors.primary],
	});

	return (
		<Animated.View
			style={[
				styles.mainView,
				{
					borderColor: borderColorInterpolation,
				},
				style,
			]}
		>
			<TextInput
				style={styles.textInput}
				multiline={multiline}
				onBlur={handleBlur}
				onFocus={handleFocus}
				placeholder="Enter text"
			/>
		</Animated.View>
	);
};

export default TextField;
