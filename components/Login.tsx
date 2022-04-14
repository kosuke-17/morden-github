import { FC, Dispatch, SetStateAction } from "react";

type Props = {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};

const Login: FC<Props> = ({ isLogin, setIsLogin }) => {
  return <div>Login</div>;
};

export default Login;
