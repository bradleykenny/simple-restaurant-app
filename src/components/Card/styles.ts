import { StyleSheet } from "react-native";
import { colors } from "../../themes";

export const styles = StyleSheet.create({
	card: {
		marginVertical: 5,
		borderRadius: 10,
		overflow: "hidden",
		backgroundColor: "#fff",
	},
	cardHeaderContainer: {
		flex: 1,
		marginBottom: 10,
		overflow: "hidden",
	},
	titlesContainer: {
		marginTop: 4,
	},
	textRow: {
		flex: 1,
		flexDirection: "row",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginTop: -1,
		marginBottom: 4,
	},
	subtitle: {
		fontSize: 16,
		color: "#787878",
		paddingVertical: 2,
	},
	distance: {
		textAlign: "right",
		fontSize: 16,
		color: "#787878",
		paddingVertical: 2,
	},
	image: {
		marginRight: 10,
		width: "100%",
		height: 130,
		borderRadius: 10,
		overflow: "hidden",
	},
	infoTextGroup: {
		paddingHorizontal: 15,
		marginBottom: 15,
		paddingVertical: 5,
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
	ratingStars: {
		alignItems: "flex-end",
	},
	imageOverlay: {
		flex: 1,
		backgroundColor: colors.transparent,
	},
});
