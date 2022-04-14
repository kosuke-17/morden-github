import { Dispatch, SetStateAction } from "react";

/**
 * ログイン、ログアウトのための型
 */
export type LoginType = {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};
