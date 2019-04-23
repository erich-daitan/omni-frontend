import axios from "axios";

const api = axios.create({
    baseURL: "https://semana-omni.herokuapp.com"
});

export default api;