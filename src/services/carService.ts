import axios from "axios";
import { api } from "../config/api";

interface ILogin {
  email: string;
  password: string;
}

interface LoginResponse {
  error: boolean;
  user: {
    id: number;
    name: string;
    token: string;
  };
}

export const getBrands = () => {
  return api.get("carros/marcas");
};

export const getModels = (code: string) => {
  return api.get(`carros/marcas/${code}/modelos`);
};
