import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ListaMenuRestaurantes from '../components/ListaMenuRestaurantes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';


const RestaurantesServicios = ({ route }) => {
  const { restaurante } = route.params;
  const menu = restaurante.menu.platos;

  const [menuRestaurantes, setRestaurantesMenu] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setRestaurantesMenu(menu);
    }, 500);
  }, []);

  return (
   
      <View>
        <View style={styles.bannerContainer}>
          <Image style={styles.banner} source={restaurante.banner} />
        </View>

        <View style = {styles.contenedorContenido}>
        <View style={styles.contenedorPadre}>
          <Image style={styles.imagen} source={restaurante.imagen} />
          <View style={styles.infoRestaurante}>
            <Text style={styles.texto}>{restaurante.nombre}</Text>
            <Text style={styles.texto}>|{restaurante.ubicacion}</Text>
          </View>
        </View>
        <View style={styles.icono}>
          <Ionicons name="restaurant-outline" size={20} />
          <Text style={styles.descripcion}>Comida rica</Text>
        </View>
        <Text style={styles.tituloRestaurante}>Menú del restaurante</Text>
        <View >
          <ListaMenuRestaurantes MenuRestaurantes={menuRestaurantes} />
        </View>
      </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  contenedorContenido:{
    padding:16,
  },
  bannerContainer: {
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  descripcion: {
    fontSize: 15,
  },
  icono: {
    paddingTop: 8,
    flexDirection: 'row',
  },
  contenedorPadre: {
    flexDirection: 'row',
  },
  imagen: {
    width: 70,
    height: 70,
  },
  texto: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  tituloMenu: {
    fontWeight: 'bold',
  },
  platoContainer: {
    marginBottom: 16,
  },
  imagenPlato: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  infoRestaurante: {
    paddingLeft: 10,
    flexDirection: 'row',
  },

  tituloRestaurante: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default RestaurantesServicios;

