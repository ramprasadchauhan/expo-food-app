import { Stack, useLocalSearchParams } from "expo-router";
import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Details: " + id }} />
      <Text> ProductDetail for if: {id} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ProductDetailScreen;
