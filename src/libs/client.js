'use server';

import { createClient } from 'microcms-js-sdk';

// API取得用のクライアントを作成
const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

// ブログ一覧を取得
const getList = async (queries) => {
  const listData = await client.getList({
    endpoint: 'portfolio',
    queries,
  });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return listData;
};

// ブログの詳細を取得
const getDetail = async (contentId, queries) => {
  // console.log(client);
  const detailData = await client.getListDetail({
    endpoint: 'portfolio', // 作品一覧のエンドポイントに変更
    contentId,
    queries,
  });

  return detailData;
};

module.exports = {
  client,
  getList,
  getDetail,
};
