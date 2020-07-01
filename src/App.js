import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Logo from './assets/Logo.png';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <View style={styles.mainContainer}>
        <Image source={Logo}/>
        <View style={styles.inputsContainer}>
          <TouchableOpacity style={styles.ButtonAP}>
            <Text style={ styles.textButton }>AP1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonAP}>
            <Text style={ styles.textButton }>AP2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonAP}>
            <Text style={ styles.textButton }>AP3</Text>
          </TouchableOpacity>
        </View>
        <Text style={ styles.text }>Parabéns sua média foi 7.6</Text>
      </View>
      <View style={styles.keyboardContainer} >
        <TouchableOpacity style={ styles.button } onPress={() => {}}>
          <Text style={ styles.textButton }>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button } onPress={() => {}}>
          <Text style={ styles.textButton }>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button } onPress={() => {}}>
          <Text style={ styles.textButton }>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button } onPress={() => {}}>
          <Text style={ styles.textButton }>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button } onPress={() => {}}>
          <Text style={ styles.textButton }>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button } onPress={() => {}}>
          <Text style={ styles.textButton }>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button } onPress={() => {}}>
          <Text style={ styles.textButton }>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button } onPress={() => {}}>
          <Text style={ styles.textButton }>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button } onPress={() => {}}>
          <Text style={ styles.textButton }>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button } onPress={() => {}}>
          <Text style={ styles.textButton }>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button } onPress={() => {}}>
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
