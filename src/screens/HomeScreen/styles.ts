import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
	},
	textFieldContainer: {
		backgroundColor: "rgba(255, 255, 255, 1)",
		zIndex: 99,
		marginHorizontal: -15,
		paddingHorizontal: 15,
		paddingVertical: 5,
		borderColor: "rgba(0,0,0,0.2)",
		borderBottomWidth: 1,
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
