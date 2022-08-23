const user = `
  user {
    username
  }
`;

const errors = `
  errors {
    message
  }
`;

export const registerMutation = `mutation register($username: String!, $email: String!, $password: String!) {
  register(options: {username: $username, email: $email, password: $password}) {
    ${user}
    ${errors}
  }
}`;

export const loginMutation = `mutation login($usernameOrEmail: String!, $password: String!) {
  login(options: {usernameOrEmail: $usernameOrEmail, password: $password}) {
    ${user}
    ${errors}
  }
}`;
