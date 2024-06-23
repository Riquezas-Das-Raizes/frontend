import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Bag, Info } from "@phosphor-icons/react";
import { hotAlerta } from "../../../util/hotAlerta";
import { atualizar } from "../../../services/Service";

export default function PerfilComum() {
  const { usuario, setUsuario, compras } = useContext(AuthContext);
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
        senha: formData.senha
      };

      // Chama a função atualizar do serviço
      await atualizar("/usuarios/atualizar", updatedUser, setUsuario, {
        headers: {
          Authorization: token
        }
      });

      hotAlerta("Dados atualizados com sucesso!", 'sucesso');
      setIsLoading(false);
    } catch (error) {
      hotAlerta("Erro ao atualizar os dados!", 'erro');
      setIsLoading(false);
    }
  };

  const calcularTotalCompra = (itens) => {
    console.log('Itens:', itens);
    return itens.reduce((total, item) => {
      const preco = parseFloat(item.preco) || 0;
      return total + preco;
    }, 0).toFixed(2);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row h-screen bg-gray-100 my-9 mx-4 md:mx-12 rounded-3xl">
        <div className="w-full md:w-1/4 bg-white p-4 shadow-md rounded-2xl mb-4 md:mb-0">
          <div className="flex items-center space-x-4 justify-center">
            <div>
              <h2 className="font-bold text-lg">Nome: {usuario.nome}</h2>
              <p className="text-gray-600">E-mail: {usuario.usuario}</p>
            </div>
          </div>
          <nav className="mt-10">
            <ul>
              <li className={`text-gray-800 mb-2 ${selectedSection === 'info' ? 'bg-custom-beige font-medium rounded-xl' : ''}`}>
                <a
                  href="#"
                  className="flex items-center p-2 rounded-md"
                  onClick={(e) => handleSectionChange(e, 'info')}
                >
                  <Info size={24} />
                  <span className="pl-2">Informações Pessoais</span>
                </a>
              </li>
              <li className={`text-gray-800 mb-2 ${selectedSection === 'compras' ? 'bg-custom-beige font-medium rounded-xl' : ''}`}>
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
        <div className="w-full md:w-3/4 p-4 md:p-10 overflow-auto h-screen">
          {selectedSection === 'info' && (
            <div className="bg-white p-6 rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-4">Informações Pessoais</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="nome" className="block text-gray-700 font-bold mb-2">
                    Nome:
                  </label>
                  <input
                    type="text"
                    id="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    E-mail:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="senha" className="block text-gray-700 font-bold mb-2">
                    Senha:
                  </label>
                  <input
                    type="password"
                    id="senha"
                    value={formData.senha}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
                <div className="flex justify-end">
                    <button
                    type="submit"
                    className="bg-custom-green text-white p-2 rounded-md"
                    disabled={isLoading}
                    >
                    {isLoading ? 'Atualizando...' : 'Atualizar Dados'}
                    </button>
                </div>
              </form>
            </div>
          )}
          {selectedSection === 'compras' && (
            <div className="bg-white p-6 rounded-md shadow-md overflow-auto h-full">
              <h2 className="text-2xl font-bold mb-4">Minhas Compras</h2>
              {compras.length === 0 ? (
                <p>Nenhuma compra encontrada.</p>
              ) : (
                <ul>
                  {compras.map((compra, index) => (
                    <li key={index} className="mb-4 border-b border-gray-200 pb-2">
                        <div className="bg-custom-beige rounded-xl p-3">
                            <h3 className="font-bold">Compra Nº{compra.id}</h3>
                            <p>Data: {compra.data}</p>
                        </div>
                        <ul className="pl-3 pt-2">
                            {compra.itens.map((item, i) => (
                            <li key={i}>{item.nome} - R$ {parseFloat(item.preco).toFixed(2)}</li>
                            ))}
                        </ul>
                        <div className="font-bold flex justify-end p-2">
                            Total da Compra: R$ {calcularTotalCompra(compra.itens)}
                        </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
