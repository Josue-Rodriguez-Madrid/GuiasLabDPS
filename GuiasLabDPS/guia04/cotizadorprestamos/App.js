/** 
 * @format
 * @flow strict-local */
 import React, { useState, useEffect } from 'react';
  import {     SafeAreaView, StyleSheet, View, Text,StatusBar, Button, } from 'react-native';
  import colors from './src/utils/utils/colors';
import Form from './src/components/Forms';
import Footer from './src/components/Footer';
import Result from './src/components/Result';

   export default function App(){
Const [capital, setCapital] = useState(null);
Const [interest, setInterest] = useState(null);
Const [months, setMonths] = useState(null);
Const [total, setTotal] = useState(null); 
Const [errorMessage, setErrorMessage] = useState('');

useEffect(() => {
   if (capital && interest && months) calculate();
    else reset();
   },
    [capital, interest, months]);
     const calculate = () => {
        reset();
        if (!capital) { 
          setErrorMessage('Añade la cantidad que quieres solicitar');
         }
          else if (!interest) { 
            setErrorMessage('Añade el interes del prestamos');
           }
            else if (!months) { 
              setErrorMessage('Seleccióna los meses a pagar');
             }
              else {
                 const i = interest / 100;
                  const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
                   setTotal({
                      monthlyFee: fee.toFixed(2).replace('.', ','),
                       totalPayable: (fee * months).toFixed(2).replace('.', ','),
                       });
                       }
                       };
                        const reset = () => { 
                          setErrorMessage('');
                           setTotal(null);
                           };


      return( 
      <>
      <statusBar barStyle = "light-content"/> 
      <SafeAreaView style={styles.Header}>
         <Text style ={styles.Header}>Cotizador de Prestamos</Text>
         <Form 
         setCapital={setCapital}
         setInterest={setInterest}
         setMonths={setMonths} 
         />
          </SafeAreaView>
          <Result 
          capital={capital} 
          interest={interest} 
          months={months}
           total={total}
            errorMessage={errorMessage}
             />
              
                <Footer></Footer>
                 
                  </> );
                   } 
                   const styles = StyleSheet.create({
                      Header:{ 
                        backgroundColor: colors.PRIMARY_COLOR,
                         height:200,
                          borderBottomLeftRadius:30, 
 borderBottomRightRadius:30,
 alignItems:'center' 
},

HeaderApp:{
fontSize: 25,
fontWeight: 'bold',
color: '#fff',
marginTop: 15,
},

 })
