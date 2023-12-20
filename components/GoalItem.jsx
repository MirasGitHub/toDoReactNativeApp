import { StyleSheet, Text, View, Pressable } from "react-native";
const GoalItem = ({ goalText, id, removeGoalHandler }) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: "#dddddd" }}
				onPress={() => removeGoalHandler(id)}
				//press styling for IOS
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.goalText}>{goalText}</Text>
			</Pressable>
		</View>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: "#6b1cd3",
		marginTop: 10,
	},
	pressedItem: {
		opacity: 0.5,
	},
	goalText: {
		color: "white",
		padding: 8,
	},
});
