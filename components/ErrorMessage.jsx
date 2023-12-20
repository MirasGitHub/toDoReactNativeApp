import { View, StyleSheet, Text } from "react-native";

const ErrorMessage = ({ errorMessage }) => {
	return (
		<View>
			{errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	errorMessage: {
		color: "#2F4F4F",
		backgroundColor: "#FA8072",
		fontWeight: "bold",
		padding: 8,
	},
});

export default ErrorMessage;
