import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Aluno from "./screens/Aluno";
import PaginaInicial from "./screens/PaginaInicial";

const Stack = createStackNavigator();

const headerStyle = { backgroundColor: "#f1f5f9" };
const headerTintColor = "#000000";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Alunos"
          component={PaginaInicial}
          options={{ title: "Alunos", headerStyle, headerTintColor }}
        />
        <Stack.Screen
          name="Aluno"
          component={Aluno}
          options={{ title: "Aluno", headerStyle, headerTintColor }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
