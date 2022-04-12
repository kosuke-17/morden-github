参考
1: https://mo-gu-mo-gu.com/create-next-app-typescript/
2: https://qiita.com/akki-memo/items/caf4777124856967ae91
3: https://mui.com/material-ui/getting-started/installation/

1.アプリの作成
npx create-next-app mordern-github --use-npm --typescript

2.redux のセットアップ

npm i @reduxjs/toolkit react-redux redux-persist
npm i -D @types/react-redux

3. MUI と styled-components の導入

npm install @mui/material @mui/styled-engine-sc styled-components
icon の導入
npm install @mui/icons-material

css in js のエラーを解消
https://zenn.dev/nbr41to/articles/c0c691653e3d55
https://nextjs.org/docs/basic-features/built-in-css-support#css-in-js

You may see this warning because you've called styled inside another component.
→ styled-components を関数コンポーネントないで定義すると、警告が発生するため関数コンポーネントの外で定義して警告を解消
