import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		height: 80,
		width: 80,
		marginRight: 15,
		borderRadius: 12,
		justifyContent: "center",
	},
	icon: {
		alignSelf: "center",
		marginBottom: 2,
	},
	text: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 12,
	},
	backdrop: {
		position: "absolute",
		left: 10,
		borderRadius: 30,
		height: 40,
		width: 60,
		transform: [{ rotate: "30deg" }],
	},
});
