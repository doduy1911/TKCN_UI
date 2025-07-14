"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"

const BadgesMain = ({ data }) => {
	return (
		<section className="flex-1">
			<div className="flex flex-col gap-[30px]">
				{data?.map((post, index) =>
					<Link prefetch={false} href={`${post?.url}`} className="flex gap-[30px] no-underline" key={index}>
						<div className="w-[40%]">
							<Image
								src={post?.url}
								alt=""
								width={0}
								height={0}
								sizes="100vw"
								className="m-[0px] p-[0px]"
								style={{ width: "100%", height: "180px", objectFit: "cover" }}
							/>
						</div>
						<div className="flex-1">
							<h5 className="text-[1.15em] font-bold">
								{post?.name}
							</h5>
							<p className="m-[0px] p-[0px] text-[14px] opacity-80 line-clamp-3">
								{post?.describe}
							</p>
						</div>
					</Link>
				)}
			</div>
		</section>
	)
}

export default BadgesMain