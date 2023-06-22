import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { datosRestaurantes } from '../components/datosRestaurantes';
import ListaRestaurantes from '../components/ListaRestaurantes';
import Constants from 'expo-constants';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Restaurantes = () => {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setRestaurantes(datosRestaurantes);
    }, 900);
  }, []);

  return (
    <Animatable.View animation="fadeIn" duration={1000} style={{ flex: 1 }}>
      {restaurantes.map((restaurante, index) => (
        <Animatable.View
          key={index}
          animation="fadeInUp"
          duration={500}
          delay={index * 200}
        >
          <ListaRestaurantes restaurantes={[restaurante]} />
        </Animatable.View>
      ))}
    </Animatable.View>
  );
};

export default Restaurantes;