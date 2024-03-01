import Image from 'next/image';
import Link from 'next/link';
import { getList } from '@/libs/client';
import { isMobile } from 'react-device-detect';

export default async function Home() {
  const works = await getList();
  console.log('isMobile', isMobile);
  return (
    <div className='mx-7'>
      <Link href='/' className='changeLang'>
        Go to Japanese ver
      </Link>
      {/* キャッチフレーズ */}
      <h1 className='catchPhrase'>Unconventional Normalcy</h1>
      {/* Works */}
      <h2 className='subtitle'>Works</h2>
      <div className='all-project flex flex-wrap justify-between mb-11'>
        {works.contents.reverse().map((item) => (
          <div key={item.id} className='work my-5 relative object-contain'>
            <Link href={`/workEnglish/${item.id}`}>
              <Image
                className='w-full h-full object-cover'
                src={item.mainPicture.url}
                alt={item.title_eng}
                width={500}
                height={500}
              />
              <div
                className={`projectAbout ${
                  isMobile ? 'touchDeviceStyle' : 'nonTouchDeviceStyle'
                }`}
              >
                {/* global.cssでstyle適用 */}
                <h2 className='workTitle'>{item.title_eng}</h2>
                <p className='workDesc'>
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
          <h3 className='myName'>Shota Suzuki</h3>
          <p className='myDesc'>
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
          <p className='myContact'>CONTACT:shouta160618@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
