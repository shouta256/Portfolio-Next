import Image from "next/image";
import Link from "next/link";
import { getList } from "@/libs/client";
import { isMobile } from "react-device-detect";

export default async function Home() {
	const works = await getList();
	console.log("isMobile", isMobile);

	const internships = [
		{
			id: "intern1",
			company: "Valain HD Inc.",
			role: "Front-end Development",
			period: "May 2024 - June 2024",
			description:
				"Implemented UI for web applications using React and Next.js, and developed mobile app UI using React Native.",
		},
		{
			id: "intern2",
			company: "Ship Inc.",
			role: "Front-end Development",
			period: "July 2024 - August 2024",
			description:
				"Implemented UI for web applications using TypeScript and Next.js.",
		},
		{
			id: "intern3",
			company: "Haukore Inc.",
			role: "Front-end & Back-end Development",
			period: "July 2024 - August 2024",
			description:
				"Implemented UI for web applications using TypeScript and Next.js, and developed the back-end using PHP and Laravel.",
		},
	];

	return (
		<div className="mx-7">
			<Link href="/" className="changeLang">
				Go to Japanese ver
			</Link>
			{/* キャッチフレーズ */}
			<h1 className="catchPhrase">Shota Suzuki</h1>
			{/* Works */}
			<h2 className="subtitle">Works</h2>
			<div className="all-project flex flex-wrap justify-between mb-11">
				{works.contents.reverse().map((item) => (
					<div key={item.id} className="work my-5 relative object-contain">
						<Link href={`/workEnglish/${item.id}`}>
							<Image
								className="w-full h-full object-cover"
								src={item.mainPicture.url}
								alt={item.title_eng}
								width={500}
								height={500}
							/>
							<div
								className={`projectAbout ${
									isMobile ? "touchDeviceStyle" : "nonTouchDeviceStyle"
								}`}
							>
								{/* global.cssでstyle適用 */}
								<h2 className="workTitle">{item.title_eng}</h2>
								<p className="workDesc">
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
			<h2 className="subtitle">About</h2>
			<div className="" style={{ display: "flex" }}>
				<Image
					className="icon rounded-full object-cover"
					src="/me.jpg"
					alt="セルフィー"
					width={100}
					height={100}
				/>
				<div className="aboutDescContainer">
					<h3 className="myName">Shota Suzuki</h3>
					<p className="myDesc">
						Born in 2004. Currently studying at Washburn University in the
						United States, majoring in Computer Information Science with a minor
						in Applied Statistics.
						<br />I started freelancing and interning to put into practice what
						I learned at school and to save money for living expenses in the
						U.S.
						<br />I approach my work with diligence and a strong sense of
						responsibility.
					</p>

					<p className="myContact">CONTACT:shouta160618@gmail.com</p>
				</div>
			</div>
		</div>
	);
}
