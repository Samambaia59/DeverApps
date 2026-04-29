import React, { createContext, useContext } from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

const lightColors = {
  background: "#FFFFFF",
  text: "#000000",
  card: "#F0F0F0",
};

const darkColors = {
  background: "#121212",
  text: "#FFFFFF",
  card: "#1E1E1E",
};

const ThemeContext = createContext(lightColors);

export const ThemeProvider = ({ children }) => {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

const ExemploTela = () => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.text, { color: theme.text }]}>
          O tema atual reage automaticamente ao sistema!
        </Text>
      </View>
    </View>
  );
};

export default function Ex07() {
  return (
    <ThemeProvider>
      <ExemploTela />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: { padding: 20, borderRadius: 10 },
  text: { fontSize: 16, fontWeight: "bold" },
});
