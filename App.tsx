import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CalculadoraIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  const calcular = () => {
    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura) / 100; // Converter de cm para m
    const imcCalculado = pesoFloat / (alturaFloat * alturaFloat);

    setImc(imcCalculado.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
        placeholder="Digite seu peso (em kg)"
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
        placeholder="Digite sua altura (em cm)"
      />
      <TouchableOpacity style={styles.botao} onPress={calcular}>
        <Text style={styles.botaoTexto}>Calcular</Text>
      </TouchableOpacity>
      {imc ? (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTitulo}>Seu IMC é:</Text>
          <Text style={styles.resultadoValor}>{imc}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  botao: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  resultadoContainer: {
    backgroundColor: 'green',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
  },
  resultadoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
  },
  resultadoValor: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CalculadoraIMC;
