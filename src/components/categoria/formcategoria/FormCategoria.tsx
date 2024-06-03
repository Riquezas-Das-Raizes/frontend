import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrarCategoria } from "../../../services/Service";

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setLoading] = useState<boolean>(false);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error: any) {
            if (error.toString().includes('401')) {
                alert('Token expirado!');
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function stateActually(event: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [event.target.name]: event.target.value
        });
    }

    function retornar() {
        navigate('/categorias');
    }

    async function generationNewCategory(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);

        try {
            if (id !== undefined) {
                await atualizar(`/categorias/${id}`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                });
                alert('Categoria atualizada com sucesso!');
            } else {
                await cadastrarCategoria(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                });
                alert('Categoria cadastrada com sucesso!');
            }
        } catch (error: any) {
            if (error.toString().includes('401')) {
                alert('O token expirou!');
                handleLogout();
            } else {
                alert('Erro ao processar a solicitação!');
            }
        }

        setLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={generationNewCategory}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nome || ''}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => stateActually(e)}
                    />
                </div>
                <button className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center" type="submit">
                    {
                        isLoading ? (
                            <RotatingLines strokeColor='white' strokeWidth='5' animationDuration='0.75' width='24' visible={true} />
                        ) : (
                            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                        )
                    }
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;