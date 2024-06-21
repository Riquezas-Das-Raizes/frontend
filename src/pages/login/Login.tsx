import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import UsuarioLogin from "../../models/UsuarioLogin";
import { AuthContext } from "../../contexts/AuthContext";

function Login({ onClose, onRegisterClick }) {
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/");
    }
  }, [usuario, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin, onClose);
  }

  function handleRegisterClick() {
    onClose();
    onRegisterClick();
  }

  return (
    <div className="fundoLogin flex justify-center font-bold bg-gradient-to-b from-custom-beige to-white rounded-lg shadow-lg py-10 px-4 sm:px-6 lg:px-8 w-full max-w-lg mx-auto">
      <form
        className="flex justify-center items-center w-full px-4 sm:px-10 flex-col gap-4"
        onSubmit={login}
      >
        <h2 className="text-custom-emerald text-3xl sm:text-4xl md:text-5xl">Entrar</h2>
        <div className="flex flex-col w-full">
          <label htmlFor="usuario" className="text-sm sm:text-base md:text-lg">Usuário</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Usuario (Email)"
            className="border-2 border-custom-emerald rounded p-2"
            value={usuarioLogin.usuario}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="senha" className="text-sm sm:text-base md:text-lg">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="border-2 border-custom-emerald rounded p-2"
            value={usuarioLogin.senha}
            onChange={atualizarEstado}
          />
        </div>
        <button
          type="submit"
          className="rounded bg-custom-green flex justify-center hover:bg-custom-emerald text-white w-full py-2"
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>Entrar</span>
          )}
        </button>

        <hr className="border-slate-800 w-full" />

        <p className="text-center">
          Ainda não tem uma conta?{" "}
          <span className="text-custom-red hover:underline cursor-pointer" onClick={handleRegisterClick}>
            Cadastre-se
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
