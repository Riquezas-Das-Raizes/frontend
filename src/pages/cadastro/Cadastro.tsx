import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrar } from "../../services/Service";
import "./Cadastro.css";
import { RotatingLines } from "react-loader-spinner";
import { hotAlerta } from "../../util/hotAlerta";

function Cadastro({ onClose, onLoginClick }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    admin: false,
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrar(`/usuarios/cadastrar`, usuario, setUsuario);
        hotAlerta("Usuário cadastrado com sucesso!", 'sucesso');
        setIsLoading(false);
        onClose();
        onLoginClick();
      } catch (error) {
        hotAlerta("Erro ao cadastrar o usuário!", 'erro');
        setIsLoading(false);
      }
    } else {
      hotAlerta("Dados estão inconsistentes. Verifique as informações do cadastro!", 'info');
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center font-bold bg-gradient-to-b from-custom-beige to-white rounded-lg h-full">
      <div className="fundoCadastro hidden lg:block rounded-l-lg"></div>
      <form
        className="flex flex-col items-center w-full gap-3 px-10 py-5 fundo"
        onSubmit={cadastrarNovoUsuario}
      >
        <h2 className="text-custom-emerald text-3xl mb-4">Cadastrar</h2>
        <div className="flex flex-col w-full mb-2">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            className="border-2 border-slate-700 rounded p-2"
            value={usuario.nome}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col w-full mb-2">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Usuario"
            className="border-2 border-slate-700 rounded p-2"
            value={usuario.usuario}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col w-full mb-2">
          <label htmlFor="foto">Foto</label>
          <input
            type="text"
            id="foto"
            name="foto"
            placeholder="Foto"
            className="border-2 border-slate-700 rounded p-2"
            value={usuario.foto}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col w-full mb-2">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="border-2 border-slate-700 rounded p-2"
            value={usuario.senha}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            className="border-2 border-slate-700 rounded p-2"
            value={confirmaSenha}
            onChange={handleConfirmarSenha}
          />
        </div>
        <button
          type="submit"
          className="rounded bg-custom-green hover:bg-custom-emerald text-white w-full py-2 mb-4"
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
            <span>Cadastrar</span>
          )}
        </button>

        <hr className="border-slate-800 w-full mb-4" />

        <p className="text-center">
          Já tem uma conta?{" "}
          <span
            className="text-custom-red hover:underline cursor-pointer"
            onClick={() => {
              onClose();
              onLoginClick();
            }}
          >
            Entrar
          </span>
        </p>
      </form>
    </div>
  );
}

export default Cadastro;
