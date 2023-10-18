import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CategoryItem = ({ category }) => {
  return (
    <View style={styles.container}>
      <Image source={category.icon} style={styles.icon} />
      <Text style={styles.text}>{category.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
    width: 95,
    height: 95,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f0f0f0',
  },
  icon: {
    width: 60,
    height: 50,
  },
  text: {
    marginTop: 15,
    color: "black",
    fontSize: 13,
    fontFamily: "raleway",
  },
});

export default CategoryItem;
