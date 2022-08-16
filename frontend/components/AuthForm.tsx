import e from "cors";
import { useState } from "react";
import { useMutation } from "react-query";
import { register } from "../apiUtil/userApi";

interface AuthFormProps {}

const AuthForm: React.FC<AuthFormProps> = ({}) => {
  const [authOptions, setAuthOptions] = useState({
    username: "",
    password: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        register(authOptions);
      }}
    >
      Username
      <input
        onChange={(e) =>
          setAuthOptions({ ...authOptions, username: e.target.value })
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

export default AuthForm;
