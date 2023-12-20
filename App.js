import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import uuid from "react-native-uuid";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [displayModal, setDisplayModal] = useState(false);
	const [goals, setGoals] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const handleModalDisplay = (action) => {
		if (action === "open") {
			setDisplayModal(true);
		} else if (action === "close") {
			setDisplayModal(false);
		}
		setErrorMessage("");
	};

	const handleInputValidation = (enteredText) => {
		if (!enteredText.trim()) {
			setErrorMessage("Please enter a goal text.");
		} else if (goals.some((goal) => enteredText === goal.goalText)) {
			setErrorMessage("The goal already exists, please enter a new goal :)");
		} else {
			setErrorMessage("");
		}
	};

	const addGoal = (inputValue) => {
		if (
			!inputValue.trim() ||
			goals.some((goal) => goal.goalText === inputValue)
		) {
			handleInputValidation(inputValue);
		} else {
			setErrorMessage("");

			setGoals((currentGoals) => [
				...currentGoals,
				{ goalText: inputValue, key: uuid.v4() },
			]);
			handleModalDisplay("close");
		}
	};

	const removeGoalHandler = (id) => {
		const newGoals = (currentGoals) =>
			currentGoals.filter((goal) => goal.key !== id);
		setGoals(newGoals);
		setErrorMessage("");
	};

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button
					title="Add New Goal"
					color="#a065ec"
					onPress={() => handleModalDisplay("open")}
				/>
				<GoalInput
					displayModal={displayModal}
					addGoal={addGoal}
					handleModalDisplay={handleModalDisplay}
					errorMessage={errorMessage}
				/>

				<View style={styles.goalsContainer}>
					{goals?.length > 0 ? (
						<FlatList
							data={goals}
							renderItem={(itemData) => {
								return (
									<GoalItem
										goalText={itemData.item.goalText}
										id={itemData.item.key}
										handleGoalComplete={() =>
											handleGoalComplete(itemData.item.key)
										}
										removeGoalHandler={removeGoalHandler}
									/>
								);
							}}
							alwaysBounceVertical={false}
						/>
					) : (
						<Text style={styles.text}>No goals yet... Please add some.</Text>
					)}
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		padding: 50,
		paddingHorizontal: 16,
		flex: 1,
	},
	goalsContainer: {
		flex: 5,
	},
	text: {
		marginTop: 20,
		color: "white",
	},
});
