import React, { useRef } from "react";
import {
	Animated,
	NativeSyntheticEvent,
	StyleProp,
	Text,
	TextInput,
	TextInputSubmitEditingEventData,
	TextStyle,
	View
} from "react-native";
import { colors } from "../../themes";
import { styles } from "./styles";

interface IProps {
	label?: string;
	placeholder?: string;
	style?: StyleProp<TextStyle>;
	autoCorrect?: boolean;
	multiline?: boolean;
	onSubmitEditing?: (
		e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
	) => void;
}

const TextField = (props: IProps) => {
	const { 
		label,
		placeholder, 
		style,
		autoCorrect, 
		multiline, 
		onSubmitEditing, 
	} = props;

	const borderColorAnim = useRef(new Animated.Value(0)).current;

	const handleBlur = () => {
		Animated.timing(borderColorAnim, {
			toValue: 0,
			duration: 150,
			useNativeDriver: false,
		}).start();
	};

	const handleFocus = () => {
		Animated.timing(borderColorAnim, {
			toValue: 1,
			duration: 150,
			useNativeDriver: false,
		}).start();
	};

	const borderColorInterpolation = borderColorAnim.interpolate({
		inputRange: [0, 1],
		outputRange: [colors.inactive, colors.primary[100]],
	});

	const renderLabel = () => {
		if (!label) {
			return null;
		}
		
		return (
			<Text style={styles.label}>{label}</Text>
		);
	}

	return (
		<View>
			{renderLabel()}
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
		</View>
	);
};

export default TextField;
