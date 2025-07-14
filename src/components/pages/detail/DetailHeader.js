"use client"
import Link from "next/link"
import React from "react"
import style from "./detail.module.css"

const DetailHeader = ({ dataDetail }) => {
	return (
		<div className={style.header}>
			<Link prefetch={false} href={"/"} className="">
				Trang chủ
			</Link>
			<span className="ml-1">
				- {dataDetail?.name || dataDetail?.title || dataDetail?.describe || ""}
			</span>
		</div>
	)
}

export default DetailHeader