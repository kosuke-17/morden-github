import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import lodash from "lodash";
import { serialize } from "cookie";

const { get } = lodash;

type Data = {
  token: string;
};

const githubAuth = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // const clientId = process.env.GITHUB_CLIENT_ID;
  // const result = axios.get(
  //   `https://github.com/login/oauth/authorize?client_id=${clientId}`
  // );
  // console.dir(JSON.stringify(result));
  // return result;
  const code = get(req, "query.code");
  if (!code) {
    throw new Error("No code!");
  }
  const body = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_SECRET,
    code,
  };
  // console.log("code: " + code);

  const githubToken = await axios
    .post("https://github.com/login/oauth/access_token", body, {
      headers: { accept: "application/json" },
    })
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
  const accessToken = githubToken.access_token;

  //
  if (accessToken) {
    res.setHeader("Set-Cookie", [
      serialize("accessToken", accessToken, {
        path: "/",
      }),
    ]);
    res.redirect(`http://localhost:3000`);
  }
};

export default githubAuth;
