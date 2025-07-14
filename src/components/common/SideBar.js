"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { convertDate } from "@/utils"

const SideBar = ({ dataSideBar, classname }) => {

	return (
		<section className={`md:w-[380px] ${classname} w-[100%]`}>
			<div className="mb-[34px] rounded-[4px] bg-[#f5f5f6] p-[30px] dark:bg-[#151a2d]">
				<p className="text-semibold text-[16px] uppercase">
					BÀI VIẾT MỚI NHẤT
				</p>
				<div className="border-[rgb(92 104 137 / 10%)] my-[15px] border-[1px] dark:border-[#151a4d]"></div>
				<div>
					{dataSideBar?.data?.map((post, index) =>
						index < 5 &&
						<Link
							prefetch={false}
							href={`/${post?.slug}`}
							className="mb-[30px] flex gap-[12px] no-underline"
							key={index}
						>
							<div className="w-[30%] max-lg:w-[auto]">
								<Image
									src={post?.url}
									alt="ảnh side bar"
									width={0}
									height={0}
									sizes="100vw"
									className="m-[0px] p-[0px] rounded-[5px] w-full h-[64px] object-cover"
								/>
							</div>
							<div className="w-[70%]">
								<h5 className="mb-[5px] min-w-[150px] text-[16px] font-medium	leading-[22px] line-clamp-2">
									{post?.name}
								</h5>
								<p className="m-[0px] p-[0px] text-[14px] opacity-80">
									{post?.date_start ? convertDate(post?.date_start) : 'Đang cập nhật'}
								</p>
							</div>
						</Link>
					)}
				</div>
			</div>
		</section>
	)
}

export default SideBar