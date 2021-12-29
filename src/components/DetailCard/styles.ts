import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 10,
	},
	detailCard: {},
	paddedInnerCard: {
		height: '100%',
		paddingHorizontal: 15,
		paddingVertical: 15,
	},
	image: {
		width: "100%",
		height: 200,
		resizeMode: 'cover',
		opacity: 0.8
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10,
	},
	pressable: {
		position: "absolute",
		marginTop: -150,
		marginLeft: 15,
		padding: 8,
		borderRadius: 60 / 2,
		backgroundColor: "rgba(0,0,0,0.4)",
		zIndex: 1
	},
	iconText: {
		fontSize: 16
	},
	imageBackdrop: {
		backgroundColor: 'black'
	}
});
