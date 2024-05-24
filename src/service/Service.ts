/* eslint-disable @typescript-eslint/ban-types */
import axios from "axios";

const api = axios.create({
    baseURL: "https://backend-ou4a.onrender.com/",
});

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}