import parse from 'html-react-parser';
import { getDetail } from '@/libs/client';
import Image from 'next/image';
import Link from 'next/link';

export default async function WorkEnglish({ params }) {
  const post = await getDetail(params.id);

  return (
    <div className='m-4'>
      <div className='flex justify-between my-5'>
        <h1 className='  mx-8 text-2xl font-extrabold'>
          {parse(post.title_eng)}
        </h1>
        <Link href='/' className='mr-8 text-xl font-light'>
          Back
        </Link>
      </div>
      <h2 className=' mb-4 mx-2 text-xl text-center font-medium'>
        {parse(post.description_eng)}
      </h2>
      <div>
        <Link
          href={post.url}
          className=' mb-8 text-xl text-center font-semibold mx-auto'
        >
          Go to the Web Site
        </Link>
      </div>

      {post.pictures.map((item, index) => (
        <div
          key={item.url}
          className={` w-1/2 h-auto object-cover my-8 ${
            index % 2 !== 0 ? 'ml-auto' : ''
          } ${index % 2 === 0 ? 'mr-auto' : ''}`}
        >
          <Image
            className='w-full h-full object-cover'
            src={item.url}
            alt={post.title_eng}
            width={1000}
            height={1000}
          />
        </div>
      ))}
    </div>
  );
}
