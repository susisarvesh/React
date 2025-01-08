import React, { createContext, useContext, useEffect, useState } from 'react';
import ContextApi, { AuthContext } from './ContextApi';

export const LoginDetails = createContext();
interface InputShape { 
    name: string,
    pass:string
}
function TrueorFalse() {
    const [inputfield, setInputfield] = useState<InputShape>({
        name: '',
        pass: ''
    });

    const { loggedd, handleChange } = useContext(AuthContext); // Access AuthContext

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputfield((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const setValues = () => { 
        console.log(inputfield.name);
        handleChange()
        
    }
    

    return (
       
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    onChange={handleInput}
                    value={inputfield.name}
                />
                <input
                    type="password"
                    name="pass"
                    placeholder="Enter Password please..."
                    onChange={handleInput}
                    value={inputfield.pass}
                />

                <button onClick={setValues}>Click This</button>

                {loggedd ? (
                    <>Here is Logged User Welcome!</>
                ) : (
                    <>Shit!! He is a Stranger</>
            )}
             <LoginDetails.Provider value={inputfield}>
                <ContextApi />
            
        </LoginDetails.Provider>
            </div>
            
    );
}

export default TrueorFalse;
