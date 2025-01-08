import React, { createContext, ReactNode, useState, useContext } from 'react';
import { LoginDetails } from './TrueorFalse';

export const AuthContext = createContext();

interface ApiShape {
    children: ReactNode;
}

function ContextApi({ children }: ApiShape) {
    const inputfield = useContext(LoginDetails) 
    const [loggedd, setLogged] = useState(false);

    const handleChange = () => {
        if (inputfield.name === 'sarvesh' && inputfield.pass === '123') {
            setLogged(true);
        } else {
            setLogged(false);
        }
    };

    return (
        <AuthContext.Provider value={{ loggedd, handleChange }}>
            {children}
        </AuthContext.Provider>
    );
}

export default ContextApi;
