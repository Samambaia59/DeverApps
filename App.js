import React, { useState, useEffect, useRef } from "react";
import { View, Text, Animated, StyleSheet, Button, Easing } from "react-native";

const ProgressBar = ({ progress }) => {
  // Animated.Value iniciando em 0
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 600,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false, // false porque estamos animando width e backgroundColor
    }).start();
  }, [progress]);

  // Interpolando largura (0% a 100%)
  const widthInterpolated = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  // Interpolando cores (Verde -> Amarelo -> Vermelho)
  const colorInterpolated = animatedValue.interpolate({
    inputRange: [0, 50, 100],
    outputRange: ["#4CAF50", "#FFEB3B", "#F44336"],
  });

  return (
    <View style={styles.track}>
      <Animated.View
        style={[
          styles.bar,
          { width: widthInterpolated, backgroundColor: colorInterpolated },
        ]}
      />
    </View>
  );
};

export default function Ex09() {
  const [val, setVal] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Progresso: {val}%</Text>
      <ProgressBar progress={val} />

      <View style={styles.buttons}>
        <Button title="0%" onPress={() => setVal(0)} />
        <Button title="50%" onPress={() => setVal(50)} />
        <Button title="100%" onPress={() => setVal(100)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  label: { fontSize: 18, marginBottom: 10, textAlign: "center" },
  track: {
    height: 20,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    overflow: "hidden",
  },
  bar: { height: "100%" },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
});
