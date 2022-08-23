import { useState } from "react";
import { login } from "../apiUtil/sessionApi";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const [authOptions, setAuthOptions] = useState({
    usernameOrEmail: "",
    password: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login(authOptions);
      }}
    >
      Username or Email
      <input
        onChange={(e) =>
          setAuthOptions({ ...authOptions, usernameOrEmail: e.target.value })
        }
        type="text"
      />
      Password
      <input
        onChange={(e) =>
          setAuthOptions({ ...authOptions, password: e.target.value })
        }
        type="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
