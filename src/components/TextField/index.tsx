import React, { useRef } from "react";
import {
	Animated,
	NativeSyntheticEvent,
	StyleProp,
	TextInput,
	TextInputSubmitEditingEventData,
	TextStyle,
} from "react-native";
import { colors } from "../../themes";
import { styles } from "./styles";

interface IProps {
	autoCorrect?: boolean;
	multiline?: boolean;
	onSubmitEditing?: (
		e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
	) => void;
	placeholder?: string;
	style?: StyleProp<TextStyle>;
}

const TextField = (props: IProps) => {
	const { autoCorrect, multiline, onSubmitEditing, placeholder, style } =
		props;

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
		outputRange: [colors.inactive, colors.primary[100]],
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
				onSubmitEditing={onSubmitEditing}
				placeholder={placeholder}
				autoCorrect={autoCorrect !== undefined ? autoCorrect : false}
			/>
		</Animated.View>
	);
};

export default TextField;
