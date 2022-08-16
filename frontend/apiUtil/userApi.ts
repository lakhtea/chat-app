import axios, { AxiosPromise } from "axios";
import { loginMutation, registerMutation } from "../mutations/userMutations";

interface UserInput {
  username: string;
  password: string;
}

interface UserResponse {
  user?: { username: string };
  errors: [{}];
}

const endpoint = "http://localhost:3001/graphql/";

export const register = (userData: UserInput): AxiosPromise<UserResponse> =>
  axios({
    url: endpoint,
    method: "POST",
    data: {
      operationName: "register",
      query: registerMutation,
      variables: userData,
    },
  }).then((response) => {
    return response.data.data;
  });

export const login = (userData: UserInput): AxiosPromise<UserResponse> =>
  axios({
    url: endpoint,
    method: "POST",
    data: {
      operationName: "login",
      query: loginMutation,
      variables: userData,
    },
  }).then((response) => {
    return response.data.data;
  });
