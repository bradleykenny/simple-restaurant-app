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
		backgroundColor: 'white',
		overflow: 'hidden',
		zIndex: 1,
		marginTop: -15,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10
	},
	boxShadow: {
		shadowColor: 'black',
		shadowOffset: {
			width: -2, 
			height: -5
		},
		shadowOpacity: 0.2,
		shadowRadius: 3,
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
		marginBottom: 10
	},
	pressable: {
		position: "absolute",
		marginTop: -150,
		marginLeft: 15,
		right: 15,
		padding: 8,
		borderRadius: 60 / 2,
		backgroundColor: "white",
		zIndex: 1
	},
	iconText: {
		fontSize: 16,
		color: "black"
	},
	imageBackdrop: {
		backgroundColor: 'black'
	}
});
