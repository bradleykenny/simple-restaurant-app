import { StyleSheet } from "react-native";
import { colors } from "../../themes";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
		backgroundColor: colors.gray[200]
	},
	textFieldContainer: {
		zIndex: 1,
		marginHorizontal: -15,
		paddingHorizontal: 15,
		paddingVertical: 5,
		paddingTop: 15,
	},
	scrollInset: {
		right: -15,
	},
	flatListContainer: {
		flex: 1,
		overflow: "visible",
		zIndex: 98,
	},
});
