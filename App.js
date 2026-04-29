import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Ex01() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={styles.image}
        />
        <Text style={styles.title}>wow</Text>
        <Text>cartao legal.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    width: "80%",
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    // Sombra para Android
    elevation: 8,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
