import { useState } from "react";
import { login } from "../api/sessionApi";
import Form from "../styledElements/Form";
import Input from "../styledElements/Input";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const [authOptions, setAuthOptions] = useState({
    usernameOrEmail: "",
    password: "",
  });

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        login(authOptions);
      }}
    >
      <Input
        onChange={(e) =>
          setAuthOptions({ ...authOptions, usernameOrEmail: e.target.value })
        }
        type="text"
        name="usernameOrEmail"
        label="Username or Email"
      />
      <Input
        onChange={(e) =>
          setAuthOptions({ ...authOptions, password: e.target.value })
        }
        type="password"
        name="password"
        label="Password"
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default Login;
