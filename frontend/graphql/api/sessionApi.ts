const user = `
    id
    username
`;

const errors = `
    field
    message
`;

export const registerMutation = `mutation register($username: String!, $email: String!, $password: String!) {
  register(options: {username: $username, email: $email, password: $password}) {
    user {
      ${user}
    }
    errors {
      ${errors}
    }
  }
}`;

export const loginMutation = `mutation login($usernameOrEmail: String!, $password: String!) {
  login(options: {usernameOrEmail: $usernameOrEmail, password: $password}) {
    user {
      ${user}
    }
    errors {
      ${errors}
    }
  }
}`;

export const meQuery = `query me {
  me {
   ${user}
  }
}`;
