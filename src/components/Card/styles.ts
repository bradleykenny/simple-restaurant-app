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
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.2,
		shadowRadius: 5,
	},
	paddedInnerCard: {
		paddingHorizontal: 15,
		paddingVertical: 20,
	},
	image: {
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		width: "100%",
		height: 100,
	},
});
