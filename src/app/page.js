import Image from 'next/image';
import Link from 'next/link';
import { getList } from '@/libs/client';
import { isMobile } from 'react-device-detect';

export default async function Home() {
  const works = await getList();
  console.log('isMobile', isMobile);
  return (
    <div className='mx-7'>
      <Link href='EnglishPage' className='changeLang'>
        Go to English ver
      </Link>
      {/* キャッチフレーズ */}
      <h1 className='catchPhrase'>Unconventional Normalcy</h1>
      {/* Works */}
      <h2 className='subtitle'>Works</h2>
      <div className='all-project flex flex-wrap justify-between mb-11'>
        {works.contents.reverse().map((item) => (
          <div key={item.id} className='work my-5 relative object-contain'>
            <Link href={`/work/${item.id}`}>
              <Image
                className='w-full h-full object-cover'
                src={item.mainPicture.url}
                alt={item.title}
                width={500}
                height={500}
              />
              <div
                className={`projectAbout ${
                  isMobile ? 'touchDeviceStyle' : 'nonTouchDeviceStyle'
                }`}
              >
                {/* global.cssでstyle適用 */}
                <h2 className='workTitle'>{item.title}</h2>
                <p className='workDesc'>
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
      <h2 className='subtitle'>About</h2>
      <div className='' style={{ display: 'flex' }}>
        <Image
          className='icon rounded-full object-cover'
          src='/me.jpg'
          alt='セルフィー'
          width={100}
          height={100}
        />
        <div className='aboutDescContainer'>
          <h3 className='myName'>スズキ　ショウタ</h3>
          <p className='myDesc'>
            2004年生まれ。現役の高専生。2024年9月からアメリカの大学に編入予定。
            <br />
            学校で学んだことをアウトプットするため、留学費を貯めるためフリーランスを始めました。
            <br />
            学生など関係なく実直にクライアントと向き合い、責任を持って取り組みます。
            <br />
            実績を積むため提示価格の６割で承ります。
          </p>
          <p className='myContact'>CONTACT:shouta160618@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
