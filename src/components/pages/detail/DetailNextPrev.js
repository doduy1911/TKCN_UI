"use client"
import React from "react"
import Link from "next/link"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const DetailNextPrev = () => {
	return (
		<div className="relative mb-[30px] flex items-center justify-between gap-[30px] border-y-[1px] px-[30px] py-[15px]">
			<Link prefetch={false} href="#">
				<span className="absolute left-0 top-[50%] translate-y-[-50%] cursor-pointer">
					<AiOutlineLeft />
				</span>
				<div className="max-w-[300px] truncate text-[16px]">Prev</div>
			</Link>
			<div className="absolute left-[50%] top-0 h-[100%] w-[2px] translate-x-[-50%] bg-[#f5f5f6] dark:bg-[#1d283a]"></div>
			<Link prefetch={false} href="#">
				<div className="max-w-[300px] truncate text-[16px] ">Next</div>
				<span className="absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer">
					<AiOutlineRight />
				</span>
			</Link>
		</div>
	)
}

export default DetailNextPrev