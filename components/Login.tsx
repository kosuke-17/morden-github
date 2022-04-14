import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";
import githubLogo from "../public/github.png";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { LoginType } from "../utils/Types";

//  styled-components
// ----------------------------------------------
const LoginLayout = styled.div`
  height: 100vh;
  margin-top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlassCard = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: linear-gradient(0deg, #b9ffa1, #dcffd0),
    linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
`;
const CardContent = styled.div``;
const FormContent = styled.div`
  display: grid;
  place-items: center;
`;
const CardImg = styled.div`
  padding-top: 2rem;
  padding-left: 9rem;
`;

const EmailBlock = styled.div`
  display: flex;
  align-items: center;
`;
const EmailInput = styled.input``;
const PasswordBlock = styled.div`
  display: flex;
  align-items: center;
`;
const PasswordInput = styled.input``;
const LoginButton = styled.button``;
// ----------------------------------------------

const Login: FC<LoginType> = ({ isLogin, setIsLogin }) => {
  const loginClick = () => {
    setIsLogin(!isLogin);
  };
  return (
    <LoginLayout>
      <GlassCard>
        <CardContent>
          <CardImg>
            <Image
              src={githubLogo}
              alt="ヘッダーロゴ"
              width={200}
              height={200}
            />
          </CardImg>
          <FormContent>
            <EmailBlock>
              <EmailIcon fontSize="large" /> &nbsp;
              <EmailInput />
            </EmailBlock>
            <PasswordBlock>
              <LockIcon fontSize="large" /> &nbsp;
              <PasswordInput />
            </PasswordBlock>
            <LoginButton onClick={loginClick}>ログイン</LoginButton>
          </FormContent>
        </CardContent>
      </GlassCard>
    </LoginLayout>
  );
};

export default Login;
