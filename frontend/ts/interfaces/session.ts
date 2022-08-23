export interface LoginUserInput {
  username?: string;
  email?: string;
  password: string;
}

export interface RegisterUserInput {
  username: string;
  email: string;
  password: string;
}
export interface UserResponse {
  user?: { username: string };
  errors: [{}];
}
