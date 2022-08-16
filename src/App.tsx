import { Header } from "./components/Header"
import { BrowserRouter } from 'react-router-dom' 
import { Router } from "./Router"
import { CartProvider } from "./hooks/useCartContext"

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Header/>
        <Router/>
      </CartProvider>      
      
    </BrowserRouter>
  )
}

export default App
