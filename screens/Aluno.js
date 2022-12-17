import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,

} from "react-native";

export default function Email({ route }) {
  const { id } = route.params;
  const [aluno, setAluno] = useState([]);
  
  useEffect(function () {
    async function getData() {
      const response = await fetch(
        "https://mobile.ect.ufrn.br:3004/alunos/" + id
      );
      const aluno = await response.json();

      setAluno(aluno);
    }

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerAluno}>
        <Image style={styles.imagemAluno} source={{ uri: aluno.foto }} />
        <Text style={styles.textoAluno}>{aluno.nome}</Text>
      </View>
      <View style={styles.containerPais}>
        <View style={styles.itemPais}>
          <Image style={styles.imagemPais} source={{ uri: aluno.fotoMae }} />
          <View>
            <Text style={styles.textoAluno}>Mãe</Text>
            <Text style={styles.textoAluno}>{aluno.mae}</Text>
          </View>
        </View>
        <View style={styles.itemPais}>
          <Image style={styles.imagemPais} source={{ uri: aluno.fotoPai }} />
          <View>
            <Text style={styles.textoAluno}>Pai</Text>
            <Text style={styles.textoAluno}>{aluno.pai}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 15,
    backgroundColor: "#f3f4f6"
  },
  containerAluno: {
    alignItems: 'center',
    marginTop: 30
  },
  containerPais: {
    marginTop: 30,
    alignItems: 'flex-start',
  },
  textoAluno: {
    fontSize: 22
  },
  imagemAluno: {
    height: 100,
    width: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dfe3e7'
  },
  imagemPais: {
    height: 60,
    width: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dfe3e7',
    marginRight: 10
  },
  itemPais: {
    flexDirection: 'row',
    marginTop: 10
  }
});
