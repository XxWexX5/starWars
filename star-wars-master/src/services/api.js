import axios from "axios";

const api = axios.create({ baseURL: "/api/people.json" });

export const api2 = axios.create({ baseURL: "/api/films.json" });

export default api;
