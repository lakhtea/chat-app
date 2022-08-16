import axios, { AxiosPromise } from "axios";

interface MessageInput {}

interface MessageResponse {}

const endpoint = "http://localhost:3001/graphql/";

export const sendMessage = (
  params: MessageInput
): AxiosPromise<MessageResponse> =>
  axios({ method: "POST", query: "mutation", variables: "variables" });
