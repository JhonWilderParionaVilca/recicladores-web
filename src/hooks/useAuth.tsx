import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { LoginUser, RegisterUser } from '../schemas';
import { loginUser, registerUser } from '../services';
import { useFetch } from './useFetch';

export const useAuth = () => {
  const [cookie, setCookie, clearCookie] = useCookies(['jwt']);
  const [isLogged, setIsLogged] = useState(!!cookie.jwt);
  const { callEndpoint, loading } = useFetch();

  const register = async ({
    name,
    email,
    password,
    passwordConfirmation,
  }: RegisterUser) => {
    if (!cookie.jwt) {
      await callEndpoint(
        registerUser({ name, email, password, passwordConfirmation })
      );
      toast.success('Usuario creado!!');
    }
  };

  const login = async ({ email, password }: LoginUser) => {
    const userLoged = await callEndpoint(loginUser({ email, password }));
    setCookie('jwt', userLoged.data.data);
    setIsLogged(true);
    toast.success('Bievenido!!!');
  };

  const logout = () => {
    clearCookie('jwt');
    setIsLogged(false);
    toast.success('Cerrando Sesión!!!');
  };

  return {
    register,
    login,
    loading,
    logout,
    isLogged,
  };
};
