import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import * as Animatable from 'react-native-animatable';

const windowWidth = Dimensions.get('window').width;
import { data } from '../components/patrocinadores';
const Inicio = () => {
  const navigation = useNavigation();
  const bannerRef = useRef(null);
  useEffect(() => {
    bannerRef.current?.slideInLeft(1000);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      bannerRef.current?.slideInLeft(1000);
      return () => {
        // Limpia la animación al salir de la página
        bannerRef.current?.stopAnimation();
      };
    }, [])
  );
  FontAwesome.loadFont();
  Ionicons.loadFont();
  Entypo.loadFont();
  const backgroundImage = { uri: 'https://www.hogar.mapfre.es/media/2018/09/hamburguesa-sencilla.jpg' };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, { width: windowWidth * 0.8 }]} onPress={() => navigation.navigate("Restaurantes")}>
        <Text style={styles.buttonText}>Buscar Restaurantes</Text>
        <Ionicons name="search-outline" size={windowWidth * 0.03} style={styles.lupita} />
      </TouchableOpacity>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Animatable.Text
          ref={bannerRef}
          style={styles.title}
          animation="slideInDown"
          duration={1000}
        >
          SinpedidosYA
        </Animatable.Text>
      </ImageBackground>
      <Text style={styles.textp}>Patrocinadores</Text>
      <ScrollView horizontal>
        {data.map((item) => (
          <TouchableOpacity key={item.id} style={styles.listItem}>
            <Image source={item.imagen} style={styles.listItemImage} />
            <Text style={styles.listItemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView vertical>
        <Text style={styles.textconta}>Contactenos por:</Text>
        <View style={styles.iconContainer}>
          <Ionicons name="logo-facebook" size={40} color="#4267B2" />
          <Text style={styles.texticono}>SinpedidosYA</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name='logo-instagram' size={40} />
          <Text style={styles.texticono}>SinpedidosYA</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name='logo-twitter' size={40} />
          <Text style={styles.texticono}>SinpedidosYA</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 7,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5f5',
    borderRadius: 4,
    borderColor: '#cccccc',
    borderWidth: 1,
    justifyContent: 'space-between',
    marginHorizontal: windowWidth * 0.1,
    paddingVertical: windowWidth * 0.02,
  },
  buttonText: {
    marginLeft: windowWidth * 0.05,
    color: '#a9a9a9',
    fontSize: windowWidth * 0.04,
  },
  lupita: {
    color: 'white',
    marginRight: windowWidth * 0.05,
    padding: windowWidth * 0.015,
    backgroundColor: '#ff0000',
    borderRadius: windowWidth * 0.01,
    transform: [{ scaleX: -1 }],
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'white',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
  },
  textp: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000000',
    textAlign: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    marginTop:10,
    alignItems: 'center',
  },
  listItem: {
    margin: 20,
    alignItems: 'center',
    opacity: 0.5,
    flexDirection:'column',
  },
  listItemImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  listItemText: {
    fontSize: 18,
    color: '#000000',
  },
  textconta:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000000',
    marginBottom: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginRight: 200,
  },
  texticono: {
    marginLeft: 10,
  },
});

export default Inicio;