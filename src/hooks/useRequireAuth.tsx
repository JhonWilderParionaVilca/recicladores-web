import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export const useRequireAuth = () => {
  const [cookie] = useCookies(['jwt']);
  const [JWT, setJWT] = useState(!!cookie.jwt);

  useEffect(() => {
    if (cookie.jwt) {
      setJWT(true);
    } else {
      setJWT(false);
    }
  }, [cookie.jwt]);

  return JWT;
};
