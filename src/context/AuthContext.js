import { createContext, useContext, useState } from "react";


// create a context
 const AuthContext = createContext();

// create a provider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userType, setUserType] = useState(null);
    return (
        <AuthContext.Provider value={{ user, setUser, userType, setUserType }}>
        {children}
        </AuthContext.Provider>
    );
    }


// create a hook
export const useAuth = () => {
    return useContext(AuthContext);
    }

