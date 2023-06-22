import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { CartContext } from '../components/CartContext';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import pedidos from '../assets/restaurantesImage/Pedidos.png';



const Pedido = () => {
  const navigation = useNavigation();
  const { cartItems, removeFromCart } = useContext(CartContext);
  

  const cantidadPedidos = cartItems.length;

  const precioTotal = cartItems.reduce(
    (total, cartItem) => total + cartItem.item.precio * cartItem.quantity,
    0
  );

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <>
      {cantidadPedidos === 0 ? (
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Image source={pedidos} style={{ width: 250, height: 250 }} />
            <Text style={styles.LetraTitulo}>Aún no has realizado pedidos</Text>
            <Text>Busca entre nuestras opciones para hacer un pedido</Text>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Restaurantes")}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Hacer pedido</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <SafeAreaView style={styles.containerContenido}>
          <Text style = {{fontSize:20,fontWeight:'bold'}}>Lista de pedidos</Text>
          <View style = {{flexDirection:'row'}}>
            <Text style = {{fontSize:17, padding:5}}>Cantidad de pedidos: {cantidadPedidos}</Text>
            <Text style = {{fontSize:17, padding:5}}>Precio total: {precioTotal}</Text>
          </View>

          <ScrollView>
            {cartItems.map((cartItem, index) => (
              <View style = {{flexDirection:'row'}} key={index}>
                
                <View style={styles.contenedorI}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.imagenComida} source={cartItem.item.imagen} />
                    <View style={{ marginLeft: 5 }}>
                      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textoNombre}>
                        {cartItem.item.nombre}
                      </Text>
                      <Text>Cantidad: {cartItem.quantity}</Text>
                    </View>
                  </View>
                      <TouchableOpacity style={styles.botonConfirmar} onPress={() => handleRemoveFromCart(cartItem.item)}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirmar Pedido</Text>
                      </TouchableOpacity>
                </View>

                
                  
                
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  contenedorI:{
    flexDirection:'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  LetraTitulo: {
    fontSize: 17,
    padding: 8,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerContenido: {
    padding: 20,
  },
  imagenComida: {
    width: 50,
    height: 50,
  
  },
  boton: {
    width: 120,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red',
    padding:10,
    borderRadius:5,
    marginTop:10,
  },
  textoNombre:{
    fontSize:16,
    fontWeight:'bold',
    maxWidth:'70%',
  },
  botonConfirmar:{
    width: 100,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red',
    padding:10,
    borderRadius:5,
    marginTop:10,
  },
});

export default Pedido;




