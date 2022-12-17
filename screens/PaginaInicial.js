import React from "react";
//import { StatusBar } from "expo-status-bar";
//import Constants from "expo-constants";

import { View, StyleSheet, StatusBar } from "react-native";
import ListaAlunos from "../components/ListaAlunos";

export default function Inbox({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ListaAlunos navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
