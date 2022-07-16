import { StyleSheet } from "react-native";
import { colors } from "../../themes";

export const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
		backgroundColor: colors.white,
	},
	container: {
		paddingHorizontal: 15,
		backgroundColor: colors.white,
	},
	inputTextContainer: {
		zIndex: 1,
		marginHorizontal: -15,
		paddingHorizontal: 15,
		paddingVertical: 5,
		paddingTop: 15,
	},
	scrollInset: {
		right: -15,
	},
	foodCategoriesFlatList: {
		paddingHorizontal: 15,
		marginHorizontal: -15,
		marginBottom: 5,
	},
});
