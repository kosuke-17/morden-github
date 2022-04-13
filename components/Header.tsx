import React from "react";
import styled from "styled-components";
import Image from "next/image";
import githubLogo from "../public/github.png";
import avatorSample from "../public/avatar.jpg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useFormik } from "formik";
import * as Yup from "yup";

const HeaderLayout = styled.div`
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

const Header = () => {
  // 入力フォームをformikのhooksで実装
  // バリデーションにYupを利用
  const formik = useFormik({
    initialValues: {
      accountName: "",
    },
    validationSchema: Yup.object({
      accountName: Yup.string()
        .max(10, "10字以下で入力してください")
        .required("空欄です"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <HeaderLayout>
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
          {formik.touched.accountName && formik.errors.accountName ? (
            <div>{formik.errors.accountName}</div>
          ) : null}

          <SearchButton type="submit">
            <SearchOutlinedIcon fontSize="medium" />
          </SearchButton>
        </SearchForm>
      </HeaderCenter>

      <HeaderRight>
        <Image src={avatorSample} alt="アバターロゴ" width={40} height={40} />
      </HeaderRight>
    </HeaderLayout>
  );
};

export default Header;
