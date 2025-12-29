import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface CustomizedButtonProps {
  title: string;
  handlePress?: () => void;
}

const CustomizedButton = ({ title, handlePress }: CustomizedButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}> {title} </Text>
    </TouchableOpacity>
  );
};

export default CustomizedButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3C3431",
    opacity: 0.9,
    borderRadius: 10,
  },
  buttonText: {
    color: "#F9F6F0",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
