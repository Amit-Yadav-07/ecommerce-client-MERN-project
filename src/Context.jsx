// context.jsx
import { createContext, useContext, useState } from "react";

const appContext = createContext();

export const AppProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const Logout = () => {
        localStorage.removeItem('token');
    };

    return (
        <appContext.Provider value={{ count, setCount, Logout }}>
            {children}
        </appContext.Provider>
    );
};

let useGlobalContext = () => useContext(appContext);

export default useGlobalContext;
