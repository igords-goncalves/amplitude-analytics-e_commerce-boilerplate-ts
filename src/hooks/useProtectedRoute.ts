import { useEffect, useState } from "react";

const SECRET_KEY = process.env.SECRET_KEY;
const STORAGE_KEY = 'docs_access_token';

export const useProtectedRoute = () => {
      const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
      const [inputKey, setInputKey] = useState('');
      const [error, setError] = useState('');
    
      useEffect(() => {
        const storedKey = sessionStorage.getItem(STORAGE_KEY);
        if (storedKey === SECRET_KEY) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      }, []);
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputKey === SECRET_KEY) {
          sessionStorage.setItem(STORAGE_KEY, inputKey);
          setIsAuthenticated(true);
          setError('');
        } else {
          setError('Chave secreta inválida');
          setInputKey('');
        }
      };

      return {
        isAuthenticated,
        inputKey,
        setInputKey,
        error,
        handleSubmit
      }
}

export default useProtectedRoute;