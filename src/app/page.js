import Image from 'next/image';
import Link from 'next/link';
import { getList } from '@/libs/client';
import { Switch } from '@nextui-org/react';

export default async function Home() {
  const works = await getList();

  return (
    <div className='mx-7'>
      <Link href='EnglishPage' className=' text-xl m-3 text-right'>
        Go to English ver
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
            <Link href={`/work/${item.id}`}>
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
                  {item.title}
                </h2>
                <p
                  className='workDesc mt-5 text-lg mb:text-sm leading-6'
                  style={{ fontSize: '1.3vw' }}
                >
                  {item.kinds}
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
          <h3 className='text-lg font-semibold mb-5'>スズキ　ショウタ</h3>
          <p className=' mr-3 text-base'>
            2004年生まれ。現役の高専生。2024年9月からアメリカの大学に編入予定。
            <br />
            学校で学んだことをアウトプットするため、留学費を貯めるためフリーランスを始めました。
            <br />
            学生など関係なく実直にクライアントと向き合い、責任を持って取り組みます。
            <br />
            実績を積むため提示価格の６割で承ります。
          </p>
          <p className='mt-2'>CONTACT:shouta160618@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
