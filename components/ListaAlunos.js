import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Emails({ navigation }) {
  const [alunos, setAlunos] = useState([]);

  useEffect(function () {
    async function getData() {
      const response = await fetch("https://mobile.ect.ufrn.br:3004/alunos");
      const alunos = await response.json();
      setAlunos(alunos);
    }

    getData();
  }, []);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.aluno}
        onPress={() => navigation.navigate("Aluno", { id: item.id })}
      >
        <Image
          style={styles.img}
          source={{
            uri: item.foto,
          }}
        />
        <View style={styles.center}>
          <Text style={styles.title}>{item.nome}</Text>
        </View>
        
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.flatList}>
        <FlatList
          data={alunos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const borderColor = "#dfe3e7";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingTop: 0,
    backgroundColor: "#f3f4f6",
  },
  flatList: {
    backgroundColor: "#ffff",
    borderWidth: 1,
    borderColor,
  },
  aluno: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor,
    
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: "contain",
    marginRight: 10
  },
  center: {
    flex: 1,
    
  },
  
  title: {
    fontSize: 15,
  },
});
