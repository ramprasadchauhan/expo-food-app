import React from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import products from "../../assets/data/products";
import ProductListItem from "../../components/ProductListItem";

// const product = products[1];

const HomePage = () => {
  return (
    <ScrollView>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} />
    </ScrollView>
  );
};

export default HomePage;
