import Image from 'next/image';
import Link from 'next/link';
import { getList } from '@/libs/client';

export default async function EnglishHome() {
  const works = await getList();
  console.log('EnglishPageで受け取ったworks:', works);
  return (
    <div className='mx-7'>
      <Link href='/' className=' text-xl m-3 flex-row-reverse'>
        Go to Japanese ver
      </Link>
      {/* キャッチフレーズ */}
      <h1 className='text-[6vw] text-center my-20 overflow-hidden whitespace-nowrap tracking-wider'>
        Unconventional Normalcy
      </h1>
      {/* Works */}
      <h2 className='text-2xl font-bold'>Works</h2>
      <div className='all-project flex flex-wrap justify-between'>
        {works.contents.reverse().map((item, index) => (
          // globals.cssでstyleを適用
          <div
            key={item.id}
            className='work my-5 bg-red-500 relative object-contain'
          >
            <Link href={`/workEnglish/${item.id}`}>
              <Image
                className='w-full h-full object-cover'
                src={item.mainPicture.url}
                alt={item.title}
                width={500}
                height={500}
              />
              <div
                className='background absolute py-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 mb:py-3'
                style={{ width: '75%', height: '13vw' }}
              >
                {/* global.cssでstyle適用 */}
                <h2 className='workTitle text-black text-4xl font-bold mb:text-xl'>
                  {item.title_eng}
                </h2>
                <p
                  className='workDesc mt-5 text-lg mb:text-sm '
                  style={{ fontSize: '1.3vw' }}
                >
                  {item.kinds_eng}
                  <br />
                  {item.tech}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* アバウト */}
      <h2 className=' pt-8 text-2xl font-bold'>About</h2>
      <div className='mt-8' style={{ display: 'flex' }}>
        <Image
          className='rounded-full object-cover'
          style={{ width: '100px', height: '100px' }}
          src='/me.jpg'
          alt='セルフィー'
          width={100}
          height={100}
        />
        <div className=' ml-10 mb-10'>
          <h3 className='text-lg font-semibold mb-5'>Shota Suzuki</h3>
          <p className=' mr-3 text-base'>
            A Japanese individual born in 2004, hailing from Japan, attended a
            National Institute of Technology from the age of 15 to 19.
            <br /> During this time, they studied the fundamentals of computer
            science. <br />
            While enrolled, they participated in business contest - which is the
            biggest Japanese competition
            <br /> where high school students think of business ideas and
            received recognition, achieving a Top 100 award among 5000
            submissions.
          </p>
          <p className='mt-2'>CONTACT:shouta160618@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
