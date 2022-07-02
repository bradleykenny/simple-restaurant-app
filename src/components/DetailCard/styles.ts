import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 10,
	},
	detailCard: {},
	scrollViewContainer: {
		height: "100%",
		backgroundColor: "#fff",
		marginTop: -15,
		overflow: "hidden",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	scrollView: {
		height: "100%",
		paddingHorizontal: 15,
		paddingVertical: 15,
	},
	boxShadow: {
		shadowColor: "black",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 1,
		shadowRadius: 10,
	},
	image: {
		width: "100%",
		height: 200,
		resizeMode: "cover",
		opacity: 0.8,
		zIndex: -1,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10,
	},
	pressable: {
		position: "absolute",
		top: 50,
		right: 15,
		padding: 8,
		borderRadius: 60 / 2,
		backgroundColor: "white",
		zIndex: 1,
	},
	iconText: {
		fontSize: 16,
		color: "black",
	},
	imageBackdrop: {
		backgroundColor: "black",
		zIndex: -1,
	},
});
