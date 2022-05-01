import { createContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [isLoggedIn, setLoggedIn] = useState(false);

    const login = (email, password) => {
        navigate('/dashboard', { replace: true });
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;