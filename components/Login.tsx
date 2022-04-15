import Image from "next/image";
import { FC, useEffect } from "react";
import styled from "styled-components";
import githubLogo from "../public/github.png";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { LoginType } from "../utils/Types";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

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
const FormContent = styled.form`
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
const ErrMsg = styled.span`
  padding: 4px;

  font-size: 16px;
  color: #fd7979;
`;
const ErrCard = styled.div`
  margin-left: 10px;
  max-width: 300px;
  text-align: center;
  border-radius: 8%;
  box-shadow: 2px 2px 4px gray;
  border: solid 1px rgba(0, 0, 0, 0.1);
  background: linear-gradient(0deg, #ffecec, #ffecec),
    linear-gradient(0deg, #ffffff, #ffffff);
`;
// ----------------------------------------------

const Login: FC<LoginType> = ({ isLogin, setIsLogin, getAccessToken }) => {
  // ログインする処理
  const loginClick = (
    values: { email: string; password: string },
    { resetForm }: any
  ) => {
    // 真偽値を変える
    setIsLogin(!isLogin);
    // valueの値をアラート
    alert(JSON.stringify(values, null, 2));
    // valueの値をリセット
    resetForm();
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(10, "10字以下で入力してください")
        .required("メールアドレスが空欄です"),
      password: Yup.string()
        .max(10, "10字以下で入力してください")
        .required("パスワードが空欄です"),
    }),
    onSubmit: loginClick,
  });
  const clientId = process.env.GITHUB_CLIENT_ID;
  let loginURL = `https://github.com/login/oauth/authorize?client_id=ad5ca84d2cedcaf66be1`;
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
          <FormContent onSubmit={formik.handleSubmit}>
            <EmailBlock>
              <EmailIcon fontSize="large" /> &nbsp;
              <EmailInput
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {/* エラー表示 */}
              {formik.touched.email && formik.errors.email ? (
                <ErrCard>
                  <ErrMsg>{formik.errors.email}</ErrMsg>
                </ErrCard>
              ) : null}
            </EmailBlock>
            <PasswordBlock>
              <LockIcon fontSize="large" /> &nbsp;
              <PasswordInput
                id="password"
                name="password"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {/* エラー表示 */}
              {formik.touched.password && formik.errors.password ? (
                <ErrCard>
                  <ErrMsg>{formik.errors.password}</ErrMsg>
                </ErrCard>
              ) : null}
            </PasswordBlock>
            <LoginButton type="submit">ログイン</LoginButton>

            {/* <LoginButton type="button" onClick={getAccessToken}>
              // get access_token //{" "}
            </LoginButton> */}
          </FormContent>
          {loginURL && <Link href={loginURL}>リンク</Link>}
        </CardContent>
      </GlassCard>
    </LoginLayout>
  );
};

export default Login;
