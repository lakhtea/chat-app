import axios from "axios";
import { User } from "../../src/entities/User";
import { LoginInput, RegisterUserInput, UserResponse } from "../../src/types";
import {
  loginMutation,
  meQuery,
  registerMutation,
} from "../graphql/api/sessionApi";

const endpoint = "http://localhost:3001/graphql/";
axios.defaults.withCredentials = true;

export const register = (userData: RegisterUserInput): Promise<UserResponse> =>
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

export const login = (userData: LoginInput): Promise<UserResponse> =>
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

export const me = (): Promise<User> =>
  axios({
    url: endpoint,
    method: "POST",
    data: {
      operationName: "me",
      query: meQuery,
    },
  }).then((response) => {
    console.log(response);
    return response.data.data;
  });
