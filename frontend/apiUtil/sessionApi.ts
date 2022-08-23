import axios, { AxiosPromise } from "axios";
import {
  loginMutation,
  registerMutation,
} from "../graphql/mutations/userMutations";
import {
  RegisterUserInput,
  UserResponse,
  LoginUserInput,
} from "../ts/interfaces/session";

const endpoint = "http://localhost:3001/graphql/";
axios.defaults.withCredentials = true;

export const register = (
  userData: RegisterUserInput
): AxiosPromise<UserResponse> =>
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

export const login = (userData: LoginUserInput): AxiosPromise<UserResponse> =>
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
