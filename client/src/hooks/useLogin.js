import { useState } from "react";
import apiConfig from "../api.config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [loginError, setError] = useState(null);
    const [is_Loading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);
        const resp = await fetch(apiConfig.URL + '/userapi/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const data = await resp.json();
        if (!resp.ok) {
            setIsLoading(false);
            setError(data.error);
        } else {
            // save the user to local storage
            // console.log(JSON.stringify(data))
            localStorage.setItem('slayer', JSON.stringify(data));
            dispatch({ type: 'LOGIN', payload: data })

            setIsLoading(false);
        }
    }
    return { login, loginError, is_Loading };
}