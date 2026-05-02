import { createContext, useState, useEffect } from "react";

import { loginUser, authGoogle } from "../services/authService";
import { getUser } from "../services/userService";

export const AuthContext = createContext({});

export function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => { return localStorage.getItem("token") });
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function init() {
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const me = await getUser();
                setUser(me);
            } catch {
                setUser(null);
                localStorage.removeItem("token");
            }

            setLoading(false);
        }

        init();
    }, []);

    const login = async (credentials) => {
        const response = await loginUser(credentials);
        localStorage.setItem("token", response.data);
        setToken(response.data);
        
        const me = await getUser();
        setUser(me);

        return me;
    }

    const googleLogin = async (code) => {
        const response = await authGoogle(code);

        localStorage.setItem("token", response.data);
        setToken(response.data);

        const me = await getUser();
        setUser(me.data);

        return me;
    }

    const logout = () => {
        localStorage.removeItem("token");
    }

    
    return (
        <AuthContext.Provider value={{ user, loading, login, googleLogin, logout}}>
            {children}
        </AuthContext.Provider>
    )
}