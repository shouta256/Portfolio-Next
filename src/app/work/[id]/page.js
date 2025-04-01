import parse from "html-react-parser";
import { getDetail, getList } from "@/libs/client";
import Image from "next/image";
import Link from "next/link";

export default async function Work({ params }) {
	const post = await getDetail(params.id);
	console.log(post);

	return (
		<div className="m-4">
			<div className="flex justify-between my-5">
				<h1 className="  mx-8 text-2xl font-extrabold">{post.title}</h1>
				<Link href="../" className="mr-8 text-xl font-light">
					Back
				</Link>
			</div>
			<h2 className=" mb-8 mx-2 text-xl text-center font-semibold">
				{parse(post.description)}
			</h2>
			<h3>
				<div className="flex items-center justify-center">
					<h3>
						<Link href={post.url} className="text-blue-600 underline">
							リンクへのアクセスはこちらから
						</Link>
					</h3>
				</div>
			</h3>
			{post.pictures.map((item, index) => (
				<div
					key={item.url}
					className={` w-1/2 h-auto object-cover my-8 ${
						index % 2 !== 0 ? "ml-auto" : ""
					} ${index % 2 === 0 ? "mr-auto" : ""}`}
				>
					<Image
						className="w-full h-full object-cover"
						src={item.url}
						alt={post.title}
						width={1000}
						height={1000}
					/>
				</div>
			))}
		</div>
	);
}
