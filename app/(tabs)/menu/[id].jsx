import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import products from "../../../assets/data/products";
import { defaultPizzaImage } from "../../../components/ProductListItem";
import Button from "../../../components/Button";
const sizes = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("M");
  const product = products.find((p) => p.id.toString() === id);
  const addToCart = () => {
    console.warn("Adding to cart, size: ", selectedSize);
  };
  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={{
          uri: product.image || defaultPizzaImage,
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((item, i) => (
          <Pressable
            onPress={() => setSelectedSize(item)}
            key={i}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === item ? "#e2e8f0" : "#ffffff",
              },
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                {
                  color: selectedSize === item ? "#000" : "#6b7280",
                },
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={addToCart} text="Add to cart" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "auto",
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    backgroundColor: "#e2e8f0",
    borderRadius: 20,
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
export default ProductDetailScreen;
