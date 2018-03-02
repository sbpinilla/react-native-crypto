/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,Button,TouchableOpacity
} from 'react-native';

//import Cryptojs from 'crypto-js';
var CryptoJS = require("crypto-js")
export default class App extends Component {

  constructor(props) {

    super(props);
    this.state = 
      { 
        txtMD5: " -- ",
        txtBase64: " -- ",
        txtInputText:"",
      };

  }

  // forma para que el metodo tome el contexto del app
  _onPressCrypto2 = () =>{

    var txtEncriptar = this.state.txtInputText;
    var wordArray = CryptoJS.enc.Utf8.parse(txtEncriptar);
    var base64 = CryptoJS.enc.Base64.stringify(wordArray);
 
    var md5 = CryptoJS.MD5(txtEncriptar)
     this.setState({txtBase64:base64})
     this.setState({txtMD5:md5.toString()})
  } 


// metodo que no toma el contexto 
  _onPressCrypto(txtEncriptar){

   // var  base64 =  Base64.parse.
   
   var wordArray = CryptoJS.enc.Utf8.parse(txtEncriptar);
   var base64 = CryptoJS.enc.Base64.stringify(wordArray);

   var md5 = CryptoJS.MD5(txtEncriptar)
    this.setState({txtBase64:base64})
    this.setState({txtMD5:md5.toString()})
  }

 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerView} >
          <View style ={ styles.titleContainer } >
            <Text style= {styles.title} > JS Crypto </Text>      
          </View>
          <View style = {styles.containerControl}>
            <TextInput 
              placeholder = {"Encriptar texto"} 
              placeholderTextColor = {"#CCC"}
              onChangeText={(txtInputText) => this.setState({txtInputText})}  
              underlineColorAndroid = {'rgba(255,255,255,0.0)'}
              style = {styles.edt} />
          </View>

          <View style = {styles.containerControl}>
            <TouchableOpacity activeOpacity ={.1} ><Button
              onPress={this._onPressCrypto2}
              title="Encriptar"
              color="#040404"
              accessibilityLabel="Encriptar" style = {styles.btn}/>
            </TouchableOpacity>
          </View>
          <View style ={styles.containerResult}>
            
            <Text style = {styles.txtResultados} > Resultados </Text>

            <Text style = {styles.txtResultadosTitle} > MD5 </Text>
            <Text>{this.state.txtMD5}</Text>
            <Text style = {styles.txtResultadosTitle}> BASE64 </Text>
            <Text>{this.state.txtBase64}</Text>

          </View>

        </View>
           
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerView:{
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#CCC',
    elevation:20
  },
  titleContainer:{
    marginTop: 10,
    alignItems: 'center',
  },
  title:{
    fontSize: 30,
  },
  edt:{
    backgroundColor:"#fff",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius:10,
    
  },
  containerControl:{
    margin: 10,
  },
  btn:{
    borderRadius:20
  },
  containerResult:{
    margin:10,
  },
  txtResultados:{
    fontSize:22,
    fontWeight:'bold',
    marginBottom:20
    
  },
  txtResultadosTitle:{
    fontSize:15,
    fontWeight:'bold',
  },

});
