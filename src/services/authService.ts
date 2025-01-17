import axios from "axios";

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

export const login = (payload: ILogin): Promise<LoginResponse> => {
  return new Promise((resolve, reject) => {
    axios
      .post<LoginResponse>("https://test-api-y04b.onrender.com/signIn", payload)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};
