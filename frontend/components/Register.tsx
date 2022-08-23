import { useState } from "react";
import { register } from "../apiUtil/sessionApi";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
  const [authOptions, setAuthOptions] = useState({
    username: "",
    email: "",
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
      Email
      <input
        onChange={(e) =>
          setAuthOptions({ ...authOptions, email: e.target.value })
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

export default Register;
