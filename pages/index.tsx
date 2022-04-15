import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import client from "../apollo-client";
import { useRouter } from "next/router";

// クエリ文用変数
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
  // console.log(data);

  return {
    props: { data },
  };
};

//   const { loading, error, data } = useQuery(GET_TOTALCONTRIBUTIONS);
//   // クエリ実行中の表示
//   if (loading) return <p>Loading ...</p>;
//   // エラー発生時（レスポンスがないとき）の表示
//   if (error) return <p>ERR!!!{error.message}</p>;
//   console.log(data);

const Home: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  return <div className={styles.container}></div>;
};

export default Home;
