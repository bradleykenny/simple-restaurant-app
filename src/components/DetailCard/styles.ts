import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},
	detailCard: {
		backgroundColor: "transparent",
	},
	scrollViewContainer: {
		backgroundColor: "#fff",
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	scrollView: {
		paddingHorizontal: 15,
		paddingTop: 25,
	},
	image: {
		height: 200,
		resizeMode: "cover",
		opacity: 0.8,
		zIndex: -1,
	},
	imageBackdrop: {
		height: 200,
		backgroundColor: "black",
		zIndex: -1,
		marginBottom: -25,
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
		backgroundColor: "white",
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
		marginBottom: 30,
	},
});
