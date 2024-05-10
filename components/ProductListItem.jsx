import React from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { Colors } from "../constants/Colors";

const ProductListItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: product.image,
        }}
        style={styles.image}
        // resizeMode="contain"
      />
      <Text style={styles.title}> {product.name} </Text>
      <Text style={styles.price}>$ {product.price} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    // height: 200,
    aspectRatio: 1,
  },
});
export default ProductListItem;
