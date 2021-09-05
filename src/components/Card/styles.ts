import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	card: {
		backgroundColor: "#fff",
		borderRadius: 5,
		marginHorizontal: 15,
		marginVertical: 10,
		paddingHorizontal: 15,
		paddingVertical: 20,
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.2,
		shadowRadius: 5,
	},
});
