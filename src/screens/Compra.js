import React, { useContext, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from '../components/CartContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Compra = ({ route }) => {
  const { MenuRestaurantes } = route.params;

  const { addToCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const handleDisminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const handleConfirmarCompra = () => {
    addToCart(MenuRestaurantes, cantidad);
  };

  function renderHeaderImage() {
    return (
      <View>
        <ImageBackground source={MenuRestaurantes.imagen} style={styles.banner} />
      </View>
    );
  }

  function DetallesCompra() {
    return (
      <View style={{ paddingHorizontal: 15 }}>
        <Text style={styles.textoDescripcion}>{MenuRestaurantes.nombre}</Text>
        <Text style={{ fontSize: 16, color: '#696969' }}>{MenuRestaurantes.descripcion}</Text>
        <Text style={styles.textoDescripcion}>${MenuRestaurantes.precio * cantidad}</Text>
      </View>
    );
  }

  function RealizarCompra() {
    return (
      
      <View style={styles.buttonContainer}>
        
        <View >
          <View style = {{flexDirection:'row',borderColor:'black',borderWidth:1,borderRadius:5,paddingVertical:10,paddingHorizontal:6,marginTop:10}}>
          <TouchableOpacity onPress={handleDisminuirCantidad} style={styles.button}>
            <Ionicons name = 'remove' size={34}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.cantidad}>{cantidad}</Text>
          <TouchableOpacity onPress={handleAumentarCantidad} >
            <Ionicons name='add' size={34}></Ionicons>
          </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={handleConfirmarCompra} style={styles.comprarButton}>
          <Text style={styles.comprarButtonText}>Agregar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderHeaderImage()}
      {DetallesCompra()}
      
      <View style={styles.contentContainer}>
        <View style={{ flex: 1 }}></View>
        <View style = {{backgroundColor:'white'}}>{RealizarCompra()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop:20,
    marginBottom: 20,
  },
 
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cantidad: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  comprarButton: {
    backgroundColor: 'red',
    paddingVertical: 17,
    paddingHorizontal: 70,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
    
  },
  comprarButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  textoDescripcion: {
    fontSize: 22,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
});

export default Compra;