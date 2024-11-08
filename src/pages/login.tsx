import { ChangeEvent, FormEvent, useState } from "react";
import { API_CONFIG } from "../utils/api-path";
import { useAppDispatch } from "../services/hooks";
import { loginApi } from "../services/slicess/login-slice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitFormHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      username: userName,
      password: password,
    };
    const response = await dispatch(
      loginApi({ path: API_CONFIG?.path?.login, data })
    );
    if (response?.payload?.accessToken) {
      localStorage.setItem("token", response.payload.accessToken);
      navigate("/home");
    }
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <h1 className="text-xl">Login Page</h1>
        <form onSubmit={submitFormHandler}>
          <div>
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              value={userName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUserName(e?.target?.value)
              }
              className="border-2 outline-none"
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e?.target?.value)
              }
              className="border-2 outline-none"
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
