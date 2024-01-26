import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getDetail, getList } from '../../../libs/client';

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      params: {
        postId: post.id,
      },
    };
  });

  return [...paths];
}

export default async function getStaticProps({ params }) {
  const post = await getDetail(params.id);

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}
