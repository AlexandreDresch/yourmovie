import axios from "axios";

export const key = 'd9043b7071be48f8384d8d9d9a5e8a20'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;