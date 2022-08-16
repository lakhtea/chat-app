export const registerMutation = `mutation register($username: String!, $password: String!) {
  register(options: {username: $username, password: $password}) {
    user {
      username
    }
    errors {
      message
    }
  }
}`;

export const loginMutation = `mutation login($username: String!, $password: String!) {
  login(options: {username: $username, password: $password}) {
    user {
      username
    }
    errors {
      message
    }
  }
}`;
