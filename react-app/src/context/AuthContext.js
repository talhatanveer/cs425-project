import { createContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { LOGIN_QUERY } from "queries/employees";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [Login, { loading, data }] = useLazyQuery(LOGIN_QUERY);
    
    const { login } = data || {};

    const [isLoggedIn, setLoggedIn] = useState(false);
    
    useEffect(() => {
        if( loading ){
            return;
        }

        setLoggedIn(login?.success);
        if ( login?.success ){
            navigate('/dashboard', { replace: true });
            localStorage.setItem('employeeId', login.employee.employeeID);
        }else if (location.pathname === "/authentication/sign-in") {
            alert("Invalid username or password")
        }
    }, [login, loading]);
    
    const auth = (email, password) => {
        Login({
            variables: {
                email,
                password
            }
        });
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, auth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;