import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 10,
	},
	cardHeaderContainer: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "flex-start",
		marginBottom: 10,
	},
	titlesContainer: {
		marginTop: 4,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 2,
	},
	subtitle: {
		fontSize: 16,
	},
	card: {
		backgroundColor: "#fff",
		borderRadius: 5,
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
		paddingVertical: 15,
	},
	image: {
		borderRadius: 5,
		marginRight: 10,
		width: 50,
		height: 50,
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
		marginBottom: 10,
	},
});
