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
			company: "株式会社ヴァレインHD",
			role: "フロントエンド開発",
			period: "2024年5月〜2024年6月",
			description:
				"ReactやNext.jsを使用し、WebアプリケーションのUI実装やReact Nativeを使用しモバイルアプリのUI実装を行いました。",
		},
		{
			id: "intern2",
			company: "株式会社ship",
			role: "フロントエンド開発",
			period: "2024年7月〜2024年8月",
			description: "TypescriptやNext.jsを使用し、WebアプリケーションのUI実装",
		},
		{
			id: "intern3",
			company: "株式会社ハウコレ",
			role: "フロントエンド・バックエンド開発",
			period: "2024年7月〜2024年8月",
			description:
				"TypescriptやNext.jsを使用し、WebアプリケーションのUI実装とPHP、Laravelを使用したバックエンドの実装。",
		},
	];
	return (
		<div className="mx-7">
			<Link href="EnglishPage" className="changeLang">
				Go to English ver
			</Link>
			{/* キャッチフレーズ */}
			<h1 className="catchPhrase">Shota Suzuki</h1>
			{/* Works */}
			<h2 className="subtitle">Works</h2>
			<div className="all-project flex flex-wrap justify-between mb-11">
				{works.contents.reverse().map((item) => (
					<div key={item.id} className="work my-5 relative object-contain">
						<Link href={`/work/${item.id}`}>
							<Image
								className="w-full h-full object-cover"
								src={item.mainPicture.url}
								alt={item.title}
								width={500}
								height={500}
							/>
							<div
								className={`projectAbout ${
									isMobile ? "touchDeviceStyle" : "nonTouchDeviceStyle"
								}`}
							>
								{/* global.cssでstyle適用 */}
								<h2 className="workTitle">{item.title}</h2>
								<p className="workDesc">
									{item.kinds}
									<br />
									{item.tech}
								</p>
							</div>
						</Link>
					</div>
				))}
			</div>

			{/* インターン実績 */}
			<h2 className="subtitle">インターン実績</h2>
			<div className="internship-list mb-11">
				{internships.map((intern) => (
					<div key={intern.id} className="internship-item my-5 p-4 rounded">
						<h3 className="internship-company font-bold text-xl">
							{intern.company}
						</h3>
						<p className="internship-role">{intern.role}</p>
						<p className="internship-period text-sm text-gray-500">
							{intern.period}
						</p>
						<p className="internship-description mt-2">{intern.description}</p>
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
					<h3 className="myName">スズキ　ショウタ</h3>
					<p className="myDesc">
						2004年生まれ。アメリカ、Washburn Universityに在学。専攻はComputer
						Information Science、副専攻はApplied Statistic。
						<br />
						学校で学んだことをアウトプットするため、アメリカでの生活費を貯めるためフリーランス・インターンを始めました。
						<br />
						実直に仕事に向き合い、責任を持って取り組みます。
					</p>
					<p className="myContact">CONTACT:shouta160618@gmail.com</p>
				</div>
			</div>
		</div>
	);
}
