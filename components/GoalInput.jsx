import { useState } from "react";
import {
	View,
	StyleSheet,
	TextInput,
	Button,
	Modal,
	Image,
} from "react-native";
import ErrorMessage from "./ErrorMessage";
import goalIamge from "../assets/images/goal.png";

const GoalInput = ({
	addGoal,
	displayModal,
	errorMessage,
	handleModalDisplay,
}) => {
	const [inputValue, setInputValue] = useState("");

	const goalInputHandler = (enteredText) => {
		setInputValue(enteredText);
	};

	const addGoalHandler = () => {
		addGoal(inputValue);
		setInputValue("");
	};

	return (
		<Modal visible={displayModal} animationType="slide">
			<View style={styles.inputContainer}>
				<Image source={goalIamge} style={styles.image} />
				<TextInput
					value={inputValue}
					style={styles.textInput}
					placeholder="Type your goal!"
					placeholderTextColor="#483087"
					onChangeText={goalInputHandler}
				/>

				<View style={styles.errorMessageContainer}>
					<ErrorMessage errorMessage={errorMessage} />
				</View>

				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="Cancel"
							onPress={() => handleModalDisplay("close")}
							color="#f31282"
						/>
					</View>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={addGoalHandler} color="#6d1bd8" />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#483087",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		width: "100%",
		padding: 12,
		borderRadius: 6,
		color: "#120438",
	},
	buttonContainer: {
		flexDirection: "row",
		marginTop: 20,
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
	errorMessageContainer: {
		width: "100%",
		marginTop: 10,
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
});

export default GoalInput;
