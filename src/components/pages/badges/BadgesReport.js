"use client"
import React from "react"
import Link from "next/link"

const BadgesReport = ({dataBaoCao }) => {

	return (
		<main className="newspapers mx-auto flex justify-between">
			<div>
				{dataBaoCao?.data?.length > 0 &&
					<ul>
						{dataBaoCao?.data?.map((item, index) =>
							<li key={index} className="mb-[15px]">
								<Link prefetch={false} href={`/${item?.slug}`}>
									<h3><b>{item?.title}</b></h3>
									<span>...</span>
								</Link>
							</li>)}
					</ul>
				}
			</div>
		</main>
	)
}

export default BadgesReport