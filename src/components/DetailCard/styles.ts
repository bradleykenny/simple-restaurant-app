import { StyleSheet } from "react-native";
import { colors } from "../../themes";

export const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},
	detailCard: {
		backgroundColor: colors.transparent,
	},
	content: {
		backgroundColor: colors.white,
		zIndex: 10,
		paddingHorizontal: 15,
		paddingTop: 25,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		marginTop: -30,
	},
	scrollViewContainer: {
		backgroundColor: colors.white,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	scrollView: {},
	image: {
		height: 250,
		resizeMode: "cover",
		zIndex: -1,
		marginTop: -15,
	},
	imageOverlay: {
		flex: 1,
		backgroundColor: colors.components.imageOverlay,
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		marginBottom: 5,
	},
	pressable: {
		position: "absolute",
		top: 50,
		right: 15,
		padding: 6,
		borderRadius: 60 / 2,
		backgroundColor: colors.white,
		zIndex: 1,
	},
	iconText: {
		fontSize: 16,
		color: "black",
	},
	listItemView: {
		flexDirection: "row",
		marginVertical: 5,
	},
	ratingStars: {
		alignItems: "flex-start",
		marginBottom: 10,
	},
	ratingText: {
		fontSize: 16,
		marginLeft: 5,
	},
	listItemIcon: {
		marginRight: 5,
	},
	menuItemsFlatList: {
		marginTop: 10,
	},
});
