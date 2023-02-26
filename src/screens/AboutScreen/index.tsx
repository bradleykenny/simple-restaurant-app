import BottomSheet, {
	BottomSheetBackdrop,
	BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import React, { useCallback, useMemo, useRef } from "react";
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	TouchableHighlight,
} from "react-native";
import SupabaseService from "../../services/SupabaseService";

interface IProps {}

const AboutScreen = (props: IProps) => {
	const bottomSheetRef = useRef<BottomSheet>(null);

	const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

	const handleSheetChanges = useCallback((index: number) => {
		console.log("handleSheetChanges", index);
		const service = SupabaseService.getInstance();
		service?.create();
	}, []);

	const renderBackdrop = useCallback(
		(props: BottomSheetDefaultBackdropProps) => (
			<BottomSheetBackdrop
				{...props}
				disappearsOnIndex={-1}
				appearsOnIndex={0}
				pressBehavior="close"
				opacity={0.3}
				onPress={() => {
					console.log("backdrop");
				}}
			/>
		),
		[]
	);

	return (
		<View style={styles.container}>
			<TouchableHighlight
				style={{ borderRadius: 12, overflow: "hidden" }}
				onPress={() => {
					bottomSheetRef.current?.expand();
				}}
			>
				<View
					style={{
						backgroundColor: "#4DAAF9",
						paddingVertical: 15,
						paddingHorizontal: 20,
					}}
				>
					<Text style={{ color: "white", textAlign: "center" }}>
						Press me!
					</Text>
				</View>
			</TouchableHighlight>
			<BottomSheet
				ref={bottomSheetRef}
				index={1}
				snapPoints={snapPoints}
				backdropComponent={renderBackdrop}
				onChange={handleSheetChanges}
				handleIndicatorStyle={{ width: "20%" }}
			>
				<View style={styles.contentContainer}>
					<TextInput style={styles.input} />
					<Text>Awesome 🎉</Text>
				</View>
				<TouchableHighlight
					style={{ borderRadius: 12, overflow: "hidden", margin: 10 }}
					onPress={() => {
						bottomSheetRef.current?.close();
					}}
				>
					<View
						style={{
							backgroundColor: "#4DAAF9",
							paddingVertical: 15,
							paddingHorizontal: 20,
						}}
					>
						<Text style={{ color: "white", textAlign: "center" }}>
							Close
						</Text>
					</View>
				</TouchableHighlight>
			</BottomSheet>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: "white",
	},
	contentContainer: {
		flex: 1,
		alignItems: "center",
	},
	input: {
		marginTop: 8,
		marginBottom: 10,
		borderRadius: 10,
		fontSize: 16,
		lineHeight: 20,
		padding: 8,
		backgroundColor: "rgba(151, 151, 151, 0.25)",
	},
});

export default AboutScreen;
