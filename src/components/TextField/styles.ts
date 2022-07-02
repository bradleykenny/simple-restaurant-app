import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	mainView: {
		width: "100%",
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "rgba(205,205,205,1)",
		backgroundColor: "#ffffff",
		marginVertical: 5,
	},
	textInput: {
		paddingHorizontal: 15,
		width: "100%",
		backgroundColor: "rgba(0,0,0,0)",
	},
	inFocus: {
		borderColor: "blue",
	},
	multiline: {},
	label: {
		marginTop: 10,
		marginBottom: 2,
		marginLeft: 0,
		fontWeight: "bold",
	},
});
