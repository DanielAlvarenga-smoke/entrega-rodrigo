import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const Calculadora = () => {
  const [result, setResult] = useState('');

  const pressionar = (valor) => {
    setResult(result + valor);
  };

  const igual = () => {
    setResult(eval(result).toString());
  };

  const limpar = () => {
    setResult('');
  };

  return (
    
    <View style={estilos.container}>
      <Text style={estilos.result}>{result}</Text>
      <View style={estilos.buttonContainer}>
        <TouchableOpacity style={estilos.button} onPress={() => pressionar('1')}>
          <Text style={estilos.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={() => pressionar('2')}>
          <Text style={estilos.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={() => pressionar('3')}>
          <Text style={estilos.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={() => pressionar('+')}>
          <Text style={estilos.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.buttonContainer}>
        <TouchableOpacity style={estilos.button} onPress={() => pressionar('4')}>
          <Text style={estilos.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={() => pressionar('5')}>
          <Text style={estilos.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={() => pressionar('6')}>
          <Text style={estilos.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={() => pressionar('-')}>
          <Text style={estilos.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.buttonContainer}>
        <TouchableOpacity style={estilos.button} onPress={() => pressionar('7')}>
          <Text style={estilos.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={() => pressionar('8')}>
          <Text style={estilos.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={() => pressionar('9')}>
          <Text style={estilos.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={() => pressionar('*')}>
          <Text style={estilos.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.buttonContainer}>
        <TouchableOpacity style={estilos.button} onPress={() => limpar()}>
          <Text style={estilos.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={() => pressionar('0')}>
          <Text style={estilos.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={() => igual()}>
          <Text style={estilos.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={() => pressionar('/')}>
          <Text style={estilos.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    groove: 30,
    backgroundColor: 'grey',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'grey',
    borderRadius: 12,
    margin: 5,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});
export default Calculadora;