import { createDrawerNavigator } from "@react-navigation/drawer";
import React from 'react'
import Inicio from "../screens/Inicio";
import Pedido from "../screens/Pedido";
import CustomDrawer from "../components/CustomDrawer";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Restaurantes from "../screens/Restaurantes";




const Drawer = createDrawerNavigator();

const DrawerNavigation = () =>{
    
    return(
        
        <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props}/>}
       screenOptions={{drawerLabelStyle:{marginLeft:-25,fontSize:15},headerTitleAlign:'center',
       drawerActiveTintColor:'#000'
       
      
       }}>

            <Drawer.Screen name="Inicio" component={Inicio} options={{
                drawerIcon: ({color}) => (
                    <Ionicons name = "home" size = {22}  color = {color}/>
                ),
            }}/>
            <Drawer.Screen name="Pedido" component={Pedido} options={{
                drawerIcon: ({color}) =>(
                    <Ionicons name = "card-outline" size = {22} color = {color}/>
                ),
            }}/>
             

        </Drawer.Navigator>
        
    )
}


export default DrawerNavigation;

