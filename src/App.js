import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Logo from './assets/Logo.png';


export default function App() {

  const [ ap1, setAp1 ] = useState('');
  const [ ap2, setAp2 ] = useState('');
  const [ ap3, setAp3 ] = useState('');

  const [ apSelected, setApSelected ] = useState('');

  console.log(apSelected);
  console.log(`ap1: ${ap1}`);
  console.log(`ap2: ${ap2}`);
  console.log(`ap3: ${ap3}`);

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

  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <View style={styles.mainContainer}>
        <Image source={Logo}/>
        <View style={styles.inputsContainer}>
          <TouchableOpacity style={styles.ButtonAP} onPress={() => setApSelected('ap1')}>
            <Text style={ styles.textButton }>{ap1}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonAP} onPress={() => setApSelected('ap2')}>
            <Text style={ styles.textButton }>{ap2}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonAP} onPress={() => setApSelected('ap3')}>
            <Text style={ styles.textButton }>{ap3}</Text>
          </TouchableOpacity>
        </View>
        <Text style={ styles.text }>Parabéns sua média foi 8.5</Text>
      </View>
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
        
        <TouchableOpacity style={ styles.buttonDone } onPress={() => {}}>
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
    paddingTop: 60,
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
  text:{
    marginTop: 50,
    color: '#787878',
    fontSize: 18
  },
  keyboardContainer:{
    paddingTop: 15,
    borderWidth: 2,
    borderTopColor: '#787878',
    width: '100%',
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button:{
    width: 99,
    height: 69,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  buttonDone:{
    width: 69,
    height: 69,
    borderRadius: 38,
    backgroundColor: '#4E87C7',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 15
  },
  textButton:{
    color: '#787878',
    fontSize:36,
  }
});
