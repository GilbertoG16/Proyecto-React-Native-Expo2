import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import StackScreen from './src/navigation/StackScreen';
import { CartProvider } from './src/components/CartContext';








function App() {
  return (
    <CartProvider>
      <NavigationContainer>
      <StackScreen/>
      </NavigationContainer>
    </CartProvider>
  
  );
}

export default App;



