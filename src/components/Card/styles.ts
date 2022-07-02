import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	cardHeaderContainer: {
		flex: 1,
		marginBottom: 10,
		overflow: "hidden",
	},
	titlesContainer: {
		marginTop: 4,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginTop: -1,
		marginBottom: 4,
	},
	subtitle: {
		fontSize: 14,
		color: "#787878",
		marginBottom: 5,
	},
	card: {
		marginVertical: 10,
		borderRadius: 12,
		overflow: "hidden",
		backgroundColor: "#fff",
		borderColor: "#cdcdcd",
		borderWidth: 1,
		marginBottom: 15,
	},
	image: {
		marginRight: 10,
		width: "100%",
		height: 100,
	},
	textInput: {
		width: "100%",
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#cdcdcd",
		backgroundColor: "#efefef",
		paddingVertical: 10,
		paddingHorizontal: 15,
		marginVertical: 10,
	},
	infoTextGroup: {
		paddingHorizontal: 15,
		marginBottom: 15,
	},
	transactions: {
		padding: 15,
		borderRadius: 10,
		backgroundColor: "rgba(0,0,0,0.1)",
		marginBottom: 15,
	},
	transactionTitle: {
		fontWeight: "bold",
		marginBottom: 4,
	},
	transactionItem: {
		textTransform: "capitalize",
	},
	buttonView: {
		marginHorizontal: 15,
		marginBottom: 15,
	},
});
