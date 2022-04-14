import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../apollo-client";

// クエリ文
const GET_SAMPLE = gql`
  {
    viewer {
      login
      name
      followers {
        totalCount
      }
      following {
        totalCount
      }
    }
  }
`;
// SSGでのデータ取得方法
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_SAMPLE,
  });
  // データ取得確認用console.log
  console.log(data);

  return {
    props: { data },
  };
};

const Home: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div className={styles.container}>ログイン：{data.viewer.login}</div>;
};

export default Home;
