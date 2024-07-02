import { createContext, ReactNode, useState, useEffect } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";
import { hotAlerta } from "../util/hotAlerta";

interface AuthContextProps {
  usuario: UsuarioLogin;
  setUsuario: (usuario: UsuarioLogin) => void;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin, onClose: () => void): Promise<void>;
  isLoading: boolean;
  compras: any[];
  setCompras: (compras: any[]) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogin>(() => {
    const savedUser = localStorage.getItem('usuario');
    return savedUser ? JSON.parse(savedUser) : {
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
      admin: false,
    };
  });

  const [isLoading, setIsLoading] = useState(false);
  const [compras, setCompras] = useState<any[]>(() => {
    const savedCompras = localStorage.getItem('compras');
    return savedCompras ? JSON.parse(savedCompras) : [];
  });

  useEffect(() => {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }, [usuario]);

  useEffect(() => {
    localStorage.setItem('compras', JSON.stringify(compras));
  }, [compras]);

  async function handleLogin(usuarioLogin: UsuarioLogin, onClose: () => void) {
    setIsLoading(true);

    try {
      await login(`/usuarios/logar`, usuarioLogin, setUsuario);

      hotAlerta("Usuário autenticado com sucesso!", 'sucesso');
      setIsLoading(false);
      onClose();
    } catch (error) {
      hotAlerta("Dados do Usuário inconsistentes!", 'erro');
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
      admin: false,
    });
    setCompras([]);
    localStorage.removeItem('usuario');
    localStorage.removeItem('compras');
  }

  return (
    <AuthContext.Provider value={{ usuario, setUsuario, handleLogin, handleLogout, isLoading, compras, setCompras }}>
      {children}
    </AuthContext.Provider>
  );
}
