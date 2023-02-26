import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		height: 70,
		width: 70,
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
		left: 5,
		borderRadius: 30,
		height: 50,
		width: 60,
		transform: [{ rotate: "35deg" }],
	},
});
