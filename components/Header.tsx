import React from "react";
import styled from "styled-components";
import Image from "next/image";
import githubLogo from "../public/github.png";
import avatorSample from "../public/avatar.jpg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LoginType } from "../utils/Types";

//  styled-components
// ----------------------------------------------
const TopHeaderLayout = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div`
  position: absolute;
  right: 25px;
  top: 15px;
`;
const HeaderLeft = styled.div`
  position: relative;
  left: 15px;
  top: -3px;
`;
const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
`;
const SearchForm = styled.form`
  display: flex;
  align-items: center;
  height: 2rem;
  margin-left: 30px;
`;
const SearchInput = styled.input`
  padding-left: 0.5rem;
  width: 12rem;
  height: 2rem;
  border: none;
  box-shadow: inset 0 3px 3px 3px rgba(0, 0, 0, 0.4);
`;
const SearchButton = styled.button`
  padding-top: 3px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  left: 14rem;
`;
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

// ヘッダーコンポーネント
const Header: React.FC<LoginType> = ({ isLogin, setIsLogin }) => {
  // ログアウトする処理
  const logoutClick = () => {
    setIsLogin(!isLogin);
  };
  // 入力フォームをformikのhooksで実装
  // 10文字制限と空白のバリデーション
  const formik = useFormik({
    initialValues: {
      accountName: "",
    },
    validationSchema: Yup.object({
      accountName: Yup.string()
        .max(10, "10字以下で入力してください")
        .required("空欄です"),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      // 引数で受け取ったメソッドでformの値をリセットする
      resetForm();
    },
  });
  return (
    <TopHeaderLayout>
      <HeaderLeft>
        <Image src={githubLogo} alt="ヘッダーロゴ" width={40} height={40} />
      </HeaderLeft>
      <HeaderCenter>
        <SearchForm onSubmit={formik.handleSubmit}>
          <SearchInput
            id="accountName"
            name="accountName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.accountName}
          />
          {/* エラー表示 */}
          {formik.touched.accountName && formik.errors.accountName ? (
            <ErrCard>
              <ErrMsg>{formik.errors.accountName}</ErrMsg>
            </ErrCard>
          ) : null}

          <SearchButton type="submit">
            <SearchOutlinedIcon fontSize="medium" />
          </SearchButton>
        </SearchForm>
      </HeaderCenter>

      <HeaderRight>
        <button onClick={logoutClick}>ログアウト</button>
        <Image src={avatorSample} alt="アバターロゴ" width={40} height={40} />
      </HeaderRight>
    </TopHeaderLayout>
  );
};

export default Header;
