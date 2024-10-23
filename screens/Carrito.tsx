 import { View, Text, Button, StyleSheet } from 'react-native'
 import React from 'react'
 
 const Carrito = ({carro}) => {
   return (
     <View style={styles.container}>
       <Text style={styles.text}>Carrito</Text>
     </View>
   )
 }

 const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        fontSize: 100,
        marginBottom: 20,
    }
 })
 
 export default Carrito