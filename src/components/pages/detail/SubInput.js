"use client"
import React from "react"

const SubInput = ({ label }) => {
	return (
		<div className="flex-1 max-sm:w-[100%]">
			<p className="mb-[0.5em] text-[0.9em] font-bold">{label}</p>
			<input
				type="text"
				className="h-[2.507em] w-[100%] bg-white px-[0.75em] text-[0.97em] text-black"
			/>
		</div>
	)
}

export default SubInput