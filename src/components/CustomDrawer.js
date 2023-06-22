import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'


const CustomDrawer = props => {
  
  return (
    <View style = {{flex:1}}>
      <DrawerContentScrollView {...props} >
        <View style = {{alignItems:'center',padding:20}}>
        <Image source={require('../assets/Contacto.png')} style={{height:110,width:110,borderRadius:40,marginBottom:10}}/>
        <Text style = {{fontSize:25,fontWeight:'bold'}}>Usuario</Text>
        </View>
        <DrawerItemList{...props}/>
      </DrawerContentScrollView>
    </View>
   
  )
}

export default CustomDrawer