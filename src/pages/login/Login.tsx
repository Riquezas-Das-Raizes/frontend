import { ChangeEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
import './Login.css';

function Login() {

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">

                {/* 
                    Adicionamos o Evento onSubmit no formulário, passando como argumento 
                    a função login, ou seja, quando o usuário enviar o formulário 
                    // (clicar no botão entrar), a função definida dentro dos parênteses será
                    executada. 
                */}
                <form className="flex justify-center items-center flex-col w-1/2 gap-4" 
                    onSubmit={login}
                >
                    <h2 className="text-slate-900 text-5xl ">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            className="border-2 border-slate-700 rounded p-2"
                            /**
                             * Através da propriedade value, definimos que o valor dentro desse 
                             * input será o mesmo valor que estiver armazenado no respectivo 
                             * atributo do Estado usuarioLogin. 
                             */
                            value={usuarioLogin.usuario}
                            /**
                             * Através do evento onChange definiremos a função que será executada, 
                             * todas as vezes que o valor do input for modificado, ou seja, quando 
                             * o usuário digitar alguma coisa no input. 
                             * 
                             * A função (e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e), 
                             * receberá os dados do input que foi modificado, através do parâmetro e (Evento).
                             */
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-slate-700 rounded p-2"
                            /**
                             * Através da propriedade value, definimos que o valor dentro desse 
                             * input será o mesmo valor que estiver armazenado no respectivo 
                             * atributo do Estado usuarioLogin. 
                             */
                            // value={usuarioLogin.senha}
                            /**
                             * Através do evento onChange definiremos a função que será executada, 
                             * todas as vezes que o valor do input for modificado, ou seja, quando 
                             * o usuário digitar alguma coisa no input. 
                             * 
                             * A função (e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e), 
                             * receberá os dados do input que foi modificado, através do parâmetro e (Evento).
                             */
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button
                        type='submit'
                        className="rounded bg-indigo-400 flex justify-center
                                   hover:bg-indigo-900 text-white w-1/2 py-2">

                        {/* 
                            Através de uma Expressão Ternária, verificaremos qual é o valor atual do Estado 
                            isLoading, para definir se o Componente loader RotatingLines será exibido ou não, 
                            indicando se existe um processo que está em andamento, ou seja, se o processo de 
                            autenticação (login) do usuário foi ou não concluído. 

                            - Se o Estado isLoading estiver com o valor false, será exibido no botão o texto Entrar. 
                            - Se o Estado isLoading estiver com o valor true, será exibido no botão o Componente 
                              loader RotatingLines. 

                        */}
                        {isLoading ?

                            <RotatingLines
                                strokeColor='white'
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />

                            :

                            <span>Entrar</span>

                        }
                        
                    </button>

                    <hr className="border-slate-800 w-full" />

                    <p>
                        Ainda não tem uma conta?{' '}
                        {/* 
                            Criamos um link para a Rota /cadastro - Componente Cadastro
                        */}
                        <Link to='/cadastro' className="text-indigo-800 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
                <div className="fundoLogin hidden lg:block"></div>
            </div>
        </>
    );

}

export default Login