# react-native-crypto

React Native Crypto


```javascript

    ...
    
    var CryptoJS = require("crypto-js")
    
    ...

    var txtEncriptar = this.state.txtInputText;
    var wordArray = CryptoJS.enc.Utf8.parse(txtEncriptar);
    var base64 = CryptoJS.enc.Base64.stringify(wordArray); 
    var md5 = CryptoJS.MD5(txtEncriptar)


 ```

### DEMO 1
<img width="200" alt="Demo1" src="https://github.com/sbpinilla/react-native-crypto/blob/master/demo/demo1.png">

### DEMO 2
<img width="200" alt="Demo1" src="https://github.com/sbpinilla/react-native-crypto/blob/master/demo/demo2.png">

### Tomado de 
[crypto-js](https://www.npmjs.com/package/crypto-js)
