import React, { useRef, useState } from "react";
import {
	Animated,
	NativeSyntheticEvent,
	StyleProp,
	Text,
	TextInput,
	TextInputSubmitEditingEventData,
	TextStyle,
	View,
} from "react-native";
import { colors } from "../../themes";
import { styles } from "./styles";

interface IInputTextProps {
	label?: string;
	placeholder?: string;
	style?: StyleProp<TextStyle>;
	autoCorrect?: boolean;
	multiline?: boolean;
	onSubmitEditing?: (
		e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
	) => void;
}

const InputText = (props: IInputTextProps) => {
	const {
		label,
		placeholder,
		style,
		autoCorrect,
		multiline,
		onSubmitEditing,
	} = props;

	const [isFocus, setFocus] = useState(false);

	const borderColorAnim = useRef(new Animated.Value(0)).current;

	const handleBlur = () => {
		Animated.timing(borderColorAnim, {
			toValue: 0,
			duration: 150,
			useNativeDriver: false,
		}).start();
		setFocus(false);
	};

	const handleFocus = () => {
		Animated.timing(borderColorAnim, {
			toValue: 1,
			duration: 150,
			useNativeDriver: false,
		}).start();
		setFocus(true);
	};

	const borderColorInterpolation = borderColorAnim.interpolate({
		inputRange: [0, 1],
		outputRange: [
			colors.components.textInput.inactive,
			colors.primary[100],
		],
	});

	const renderLabel = () => {
		if (!label) {
			return null;
		}

		const color = isFocus ? colors.primary[100] : "black";

		return <Text style={[styles.label, { color }]}>{label}</Text>;
	};

	return (
		<View>
			{renderLabel()}
			<Animated.View
				style={[
					styles.mainView,
					{
						borderColor: borderColorInterpolation,
						borderWidth: isFocus ? 2 : 1,
					},
					style,
				]}
			>
				<TextInput
					style={[
						styles.textInput,
						{ paddingVertical: isFocus ? 14 : 15 },
					]}
					multiline={multiline}
					onBlur={handleBlur}
					onFocus={handleFocus}
					onSubmitEditing={onSubmitEditing}
					placeholder={placeholder}
					autoCorrect={autoCorrect || false}
					placeholderTextColor="#rgba(0,0,0,0.5)"
				/>
			</Animated.View>
		</View>
	);
};

export default InputText;
