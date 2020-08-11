import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Logo from './assets/Logo.png';
import average from './average.js';

export default function App() {

  const [ ap1, setAp1 ] = useState('');
  const [ ap2, setAp2 ] = useState('');
  const [ ap3, setAp3 ] = useState('');
  const [ result, setResult ] = useState('');

  const [ apSelected, setApSelected ] = useState('');

  function insertNumber(textfield, number){
    if(textfield === 'ap1'){
      setAp1(ap1 + number);
    }
    if(textfield === 'ap2'){
      setAp2(ap2 + number);
    }
    if(textfield === 'ap3'){
      setAp3(ap3 + number);
    }
  }

  function handleClear(textfield){
    if(textfield === 'ap1'){
      setAp1('');
    }
    if(textfield === 'ap2'){
      setAp2('');
    }
    if(textfield === 'ap3'){
      setAp3('');
    }
    setResult('');
  }

  function handleDone(ap1, ap2, ap3){

    const objectResult = average(ap1, ap2, ap3);

    if(ap1 === '' && ap2 === '' && ap3 === ''){
      alert('Nenhuma nota encontrada.');
    }else{
      if(ap1 === ''){
        setAp1(objectResult.ap1);
      }
      if(ap2 === ''){
        setAp2(objectResult.ap2);
      }if(ap3 === ''){
        setAp3(objectResult.ap3);
      }
    }

    setResult(objectResult.result);

  }

  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <View style={styles.mainContainer}>
        <Image source={Logo}/>
        <View style={styles.inputsContainer}>
          <TouchableOpacity style={ apSelected === 'ap1' ? styles.ButtonAPSelected : styles.ButtonAP} onPress={() => setApSelected('ap1')}>
            <Text style={ styles.textButton }>{ap1}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={apSelected === 'ap2' ? styles.ButtonAPSelected : styles.ButtonAP} onPress={() => setApSelected('ap2')}>
            <Text style={ styles.textButton }>{ap2}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={apSelected === 'ap3' ? styles.ButtonAPSelected : styles.ButtonAP} onPress={() => setApSelected('ap3')}>
            <Text style={ styles.textButton }>{ap3}</Text>
          </TouchableOpacity>
        </View>
        <Text style={ styles.text }>{result}</Text>
      </View>
      <View style={styles.secondaryContayner}> 
        <View style={styles.keyboardContainer} >
          <TouchableOpacity style={ styles.button } onPress={() => insertNumber(apSelected, '1')}>
            <Text style={ styles.textButton }>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.button } onPress={() => insertNumber(apSelected, '2')}>
            <Text style={ styles.textButton }>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.button } onPress={() => insertNumber(apSelected, '3')}>
            <Text style={ styles.textButton }>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.button } onPress={() => insertNumber(apSelected, '4')}>
            <Text style={ styles.textButton }>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.button } onPress={() => insertNumber(apSelected, '5')}>
            <Text style={ styles.textButton }>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.button } onPress={() => insertNumber(apSelected, '6')}>
            <Text style={ styles.textButton }>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.button } onPress={() => insertNumber(apSelected, '7')}>
            <Text style={ styles.textButton }>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.button } onPress={() => insertNumber(apSelected, '8')}>
            <Text style={ styles.textButton }>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.button } onPress={() => insertNumber(apSelected, '9')}>
            <Text style={ styles.textButton }>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.button } onPress={() => insertNumber(apSelected, '.')}>
            <Text style={ styles.textButton }>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.button } onPress={() => insertNumber(apSelected, '0')}>
            <Text style={ styles.textButton }>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.button } onPress={() => handleClear(apSelected)}>
            <Text style={ styles.textButton }>C</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={ styles.buttonDone } onPress={() => handleDone(ap1, ap2, ap3) }>
          <MaterialIcons  name='done' size={30} color='#000'/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  mainContainer:{
    alignItems: 'center',
  },
  inputsContainer:{
    width: '100%',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ButtonAP:{
    width: 100,
    height: 100, 
    borderWidth: 2,
    borderColor: '#787878',
    borderRadius: 20,
    color:'#787878',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ButtonAPSelected:{
    backgroundColor: '#252525',
    width: 100,
    height: 100, 
    borderWidth: 2,
    borderColor: '#787878',
    borderRadius: 20,
    color:'#787878',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    marginTop: 20,
    color: '#787878',
    fontSize: 18
  },
  secondaryContayner:{

  },
  keyboardContainer:{
    width: '100%',
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button:{
    backgroundColor: '#252525',
    marginBottom: 15,
    borderRadius: 32,
    width: 99,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDone:{
    marginTop: 20,
    width: '100%',
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4E87C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton:{
    color: '#787878',
    fontSize:36,
  }
});
