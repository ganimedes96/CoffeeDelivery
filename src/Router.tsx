import { Routes, Route } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { OrderDetails } from './pages/OrderDetails'


export const Router = () => {
    return(
        <Routes>
             <Route  path="/" element={ <Home/> }/>
             <Route  path="/checkout" element={ <Checkout/> }/>
             <Route  path="/order" element={ <OrderDetails/> }/>
        </Routes>
    )
}