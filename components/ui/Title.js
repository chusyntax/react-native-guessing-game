import { Text, StyleSheet } from "react-native";

function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "open-sans-bold",
    textAlign: "center",
    borderColor: "#fff",
    padding: 12,
    borderWidth: 2,
  },
});
