import React from 'react'
import AppRouter from './router/AppRouter'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  )
}

export default App
