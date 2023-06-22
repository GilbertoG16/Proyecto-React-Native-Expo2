import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListaMenuRestaurantes = ({ MenuRestaurantes }) => {
  const navigation = useNavigation();

  function handleOnPress(item) {
    navigation.navigate("CompraPedido", { MenuRestaurantes: item });
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleOnPress(item)}>
        <View style={styles.itemContainer}>
          <Image style={styles.comidaImagen} source={item.imagen} />
          <View style={styles.Datos}>
            <Text style = {{fontSize:17,fontWeight:'bold'}}>{item.nombre}</Text>
            <Text style = {{paddingBottom:10,color:'#696969'}}>{item.descripcion}</Text>
            <Text style = {{fontWeight:'bold'}}>${item.precio}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  

  return (
    <FlatList
      data={MenuRestaurantes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={() => <View style={styles.separador} />}
    />
  );
};

const styles = StyleSheet.create({
  Datos:{
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 16,
    
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    marginBottom: 8,
    
  },
  comidaImagen: {
    width: 85,
    height: 85,
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  precio: {
    fontSize: 14,
    color: 'gray',
  },
  separador: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 8,
  },
});

export default ListaMenuRestaurantes;

