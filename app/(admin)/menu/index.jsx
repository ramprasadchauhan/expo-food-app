import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import ProductListItem from "../../../components/ProductListItem";
import products from "../../../assets/data/products";

// const product = products[1];

const HomePage = () => {
  return (
    <View>
      {/* <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} /> */}
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default HomePage;
