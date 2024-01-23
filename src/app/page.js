import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-5">
      <h1 className="text-8xl md:text-10xl lg:text-12xl text-center my-20 overflow-hidden whitespace-nowrap tracking-wider">
        Unconventional Normalcy
      </h1>

      <h2>Works</h2>
      <div className="all-project flex flex-wrap">
        <div className="h-[20vw] my-5 mx-4 bg-red-500" style={{ width: "calc(33% - 2rem"}}>aaa</div>
        <div className="h-[20vw] my-5 mx-4 bg-red-500" style={{ width: "calc(33% - 2rem"}}>aaa</div>
        <div className="h-[20vw] my-5 mx-4 bg-red-500" style={{ width: "calc(33% - 2rem"}}>aaa</div>
        <div className="w-1/4 h-40 my-5 mx-2 bg-yellow-500">aaa</div>

        {/* <Link href="WorkPages/Ricebox.html">
            <Image src="/me.jpg" alt="RiceboxのWEBサイトの画像" width={300} height={200} />
            <div className="background">
              <p>
                <span className="title">Ricebox</span>
                <br />
                Webサイト<br />
                Next.js×Spline
              </p>
            </div>
        </Link>
        <Link href="WorkPages/Ricebox.html">
            <Image src="/me.jpg" alt="RiceboxのWEBサイトの画像" width={300} height={200} />
            <div className="background">
              <p>
                <span className="title">Ricebox</span>
                <br />
                Webサイト<br />
                Next.js×Spline
              </p>
            </div>
        </Link>
        <Link href="WorkPages/Ricebox.html">
            <Image src="/me.jpg" alt="RiceboxのWEBサイトの画像" width={300} height={200} />
            <div className="background">
              <p>
                <span className="title">Ricebox</span>
                <br />
                Webサイト<br />
                Next.js×Spline
              </p>
            </div>
        </Link> */}
      </div>
    </div>
  );
}
