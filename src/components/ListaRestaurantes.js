import React from 'react';
import { FlatList, View, Image, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const ListaRestaurantes = ({ restaurantes}) => {
  
  const renderItem = ({ item}) => {
    return (
      
      <TouchableOpacity onPress={()=>handleOnPress(item)}>
        <SafeAreaView style={styles.itemContainer}>
          <Image style = {styles.imagenRestaurante} source = {item.imagen}/>
          <View style = {styles.ContenedorPadre}>
             <View style = {styles.ContenedorNombreU}>
              <Text style = {styles.EstiloNombreU}>{item.nombre}</Text>
              <Text style = {styles.EstiloNombreU}>|{item.ubicacion}</Text>
             </View>
             <Text style = {styles.itemEnvio}>Envío {item.envio}</Text>
          </View>  
        </SafeAreaView>
      </TouchableOpacity>
     
    
    );
  };

  const navigation = useNavigation();

  function handleOnPress(item){
    navigation.navigate("Restaurante", {restaurante: item});
  }

  return (
    <FlatList
      data={restaurantes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  EstiloNombreU:{
    fontSize:18,
    fontWeight:'bold',
    marginLeft:4,
    marginBottom:10,
  },
  ContenedorPadre:{
    marginLeft:10,
  },
  ContenedorNombreU:{
    flexDirection:'row'
  },
  Precio:{
    flexDirection:'column'
  },
  Contenedor:{
    flexDirection:'row',
  },
  Titulo:{
    flexDirection:'column'
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemContainer: {
    flexDirection:'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    
  },
  imagenRestaurante: {
    width: 50,
    height: 50,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  itemEnvio: {
    fontSize: 14,
    color: 'green',
    marginLeft : 7,
  },
});

export default ListaRestaurantes;




