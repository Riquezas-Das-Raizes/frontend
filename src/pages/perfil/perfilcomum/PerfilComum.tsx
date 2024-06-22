import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Bag, Info } from "@phosphor-icons/react";
import { atualizar } from "../../../services/Service";
import { hotAlerta } from "../../../util/hotAlerta";

export default function PerfilComum() {
    const { usuario, setUsuario } = useContext(AuthContext);
    const token = usuario.token;
    const [selectedSection, setSelectedSection] = useState('info');
    const [formData, setFormData] = useState({
        nome: usuario.nome,
        email: usuario.usuario,
        senha: ''
    });
    
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };    

    const [isLoading, setIsLoading] = useState(false);

    const handleSectionChange = (event, section) => {
        event.preventDefault();
        setSelectedSection(section);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const updatedUser = {
                ...usuario,
                nome: formData.nome,
                usuario: formData.email,
                senha: formData.senha // Note que você provavelmente não deveria atualizar a senha assim; considere as melhores práticas de segurança
            };

            await atualizar(`/usuarios/atualizar`, updatedUser, setUsuario, {
                headers: {
                  Authorization: token,
                },
            });

            hotAlerta("Dados atualizados com sucesso!", 'sucesso');
            setIsLoading(false);
        } catch (error) {
            hotAlerta("Erro ao atualizar os dados!", 'erro');
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="flex h-screen bg-gray-100 my-2 mx-12">
                <div className="w-1/4 bg-white p-4 shadow-md">
                    <div className="flex items-center space-x-4">
                        <div>
                            <h2 className="font-bold text-lg">Nome: {usuario.nome}</h2>
                            <p className="text-gray-600">E-mail: {usuario.usuario}</p>
                        </div>
                    </div>
                    <nav className="mt-10">
                        <ul>
                            <li className={`text-gray-800 font-medium mb-2 ${selectedSection === 'info' ? 'bg-gray-200' : ''}`}>
                                <a
                                    href="#"
                                    className="flex items-center p-2 rounded-md"
                                    onClick={(e) => handleSectionChange(e, 'info')}
                                >
                                    <Info size={24} />
                                    <span className="pl-2">Informações Pessoais</span>
                                </a>
                            </li>
                            <li className={`text-gray-800 mb-2 ${selectedSection === 'compras' ? 'bg-gray-200' : ''}`}>
                                <a
                                    href="#"
                                    className="flex items-center p-2 rounded-md"
                                    onClick={(e) => handleSectionChange(e, 'compras')}
                                >
                                    <Bag size={24} />
                                    <span className="pl-2">Minhas Compras</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="w-3/4 p-10">
                    {selectedSection === 'info' && (
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Informações Pessoais</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="nome">Nome</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        value={formData.nome}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="Nome"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="senha">Senha</label>
                                    <input
                                        type="password"
                                        id="senha"
                                        value={formData.senha}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="Senha"
                                    />
                                </div>
                                <div className="pt-5 flex justify-end">
                                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md" disabled={isLoading}>
                                        {isLoading ? 'Salvando...' : 'Salvar'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                    {selectedSection === 'compras' && (
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Minhas Compras</h2>
                            <ul>
                                {/* Aqui você pode mapear as compras do usuário */}
                                <li className="mb-4">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="text-lg font-bold">Compra #1</h3>
                                            <p className="text-gray-600">Descrição da compra...</p>
                                        </div>
                                        <p className="text-gray-800 font-medium">$100.00</p>
                                    </div>
                                </li>
                                <li className="mb-4">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="text-lg font-bold">Compra #2</h3>
                                            <p className="text-gray-600">Descrição da compra...</p>
                                        </div>
                                        <p className="text-gray-800 font-medium">$200.00</p>
                                    </div>
                                </li>
                                {/* Adicione mais itens conforme necessário */}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
