import { useState } from "react";
import { register } from "../api/sessionApi";
import Form from "../styledElements/Form";
import Input from "../styledElements/Input";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
  const [authOptions, setAuthOptions] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        register(authOptions);
      }}
    >
      <Input
        onChange={(e) =>
          setAuthOptions({ ...authOptions, username: e.target.value })
        }
        type="text"
        label="Username"
      />
      <Input
        onChange={(e) =>
          setAuthOptions({ ...authOptions, email: e.target.value })
        }
        type="text"
        label="Email"
      />
      <Input
        onChange={(e) =>
          setAuthOptions({ ...authOptions, password: e.target.value })
        }
        type="password"
        label="Password"
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default Register;
