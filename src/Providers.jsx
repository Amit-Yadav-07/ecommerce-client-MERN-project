import { AppProvider } from './Context' // your global context
import { CartProvider } from './CartContext'

const Providers = ({ children }) => {
    return (
        <AppProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </AppProvider>
    )
}

export default Providers;
