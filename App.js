import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Ex02() {
  return (
    <View style={styles.container}>
      {/* Header Fixo */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Header Fixo</Text>
      </View>

      {/* Conteúdo flex: 1 */}
      <View style={styles.content}>
        <Text>pvnsdkjdbsdv</Text>
      </View>

      {/* Botão no Rodapé */}
      <View style={styles.footerButtonContainer}>
        <Button title="Botão Rodapé" onPress={() => alert("Pressionado!")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column' já é o padrão no React Native
  },
  header: {
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    backgroundColor: "#e0f7fa",
    justifyContent: "center",
    alignItems: "center",
  },
  footerButtonContainer: {
    position: "absolute",
    bottom: 30, // Margem do fundo
    left: 20,
    right: 20,
  },
});
