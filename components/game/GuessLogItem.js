import { Text, View, StyleSheet } from "react-native";

function GuessLogItem({ round, guess }) {
  return (
    <View style={styles.listItem}>
      <Text>#{round}</Text>
      <Text>{guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#f2f2f2",
    width: "100%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    borderRadius: 10,
  },
});
