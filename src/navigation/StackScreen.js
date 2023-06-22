import React, { useEffect ,useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from '../screens/Inicio'
import Restaurantes from '../screens/Restaurantes'
import DrawerNavigation from './DrawerNavigation';
import RestaurantesServicios from '../screens/RestaurantesServicios';
import Compra from '../screens/Compra';



const Stack = createNativeStackNavigator();


const StackScreen = () => {

 

  return (
   
     <Stack.Navigator 
     screenOptions={{}} 
     >
         <Stack.Screen
         name = "DrawerNavigation"
         component={DrawerNavigation}
         options={{headerShown: false}}
         />
       <Stack.Screen
         name = "Restaurantes"
         component={Restaurantes}
         options={{headerTitleAlign:'center',headerLargeTitle:true}}
         />
         <Stack.Screen
         name = "Restaurante"
         component={RestaurantesServicios}
         options={{headerTitle:"",headerLargeTitle:true, headerTransparent:true}}
         />
         <Stack.Screen
         name = "CompraPedido"
         component={Compra}
         options={{headerTitle:"",headerLargeTitle:true, headerTransparent:true}}
         />
         
     </Stack.Navigator>
   
 
  )
}

export default StackScreen