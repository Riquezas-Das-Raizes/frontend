import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const buscar = async (
  url: string,
  setDados: Function,
  header: Object,
) => {
  try {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    // Você pode lançar ou retornar o erro aqui, dependendo de como deseja lidar com ele no seu código
    throw error;
  }
};

export const cadastrarProd = async (
  url: string,
  dados: Object,
  setDados: Function,
  header: Object,
) => {
  try {
    const resposta = await api.post(url, dados, header);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao cadastrar produto:", error);
    throw error;
  }
};

export const buscarCat = async (
  url: string,
  setDados: Function,
  header: Object,
) => {
  try {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    throw error;
  }
};

export const cadastrar = async (
  url: string,
  dados: Object,
  setDados: Function,
) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const cadastrarCategoria = async (
  url: string,
  dados: Object,
  setDados: Function,
  header: Object,
) => {
  const resposta = await api.post(url, dados, header);
  setDados(resposta.data);
};

export const login = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const atualizar = async (
  url: string,
  dados: Object,
  setDados: Function,
  header: Object,
) => {
  const resposta = await api.put(url, dados, header);
  setDados(resposta.data);
};

export const deletar = async (url: string, header: Object) => {
  await api.delete(url, header);
};
