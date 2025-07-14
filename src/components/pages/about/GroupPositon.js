"use client"
import React from "react"
import Image from "next/image"

const GroupPositon = ({ persons }) => {
	return (
		<div className="my-[50px] flex justify-center gap-[30px] max-md:flex-col items-center">
			{persons.map((person, index) => (
				<div key={index} className="w-[30%] max-md:w-[300px] person-card flex flex-col items-center rounded-[12px] border-[1px] border-solid border-[#ddd] px-[30px] py-[25px] bg-[#fff] dark:border-[#7a8f93]">
					<Image className="rounded-[5px]" width={205} height={281} src={person.imageUrl} alt="CAN BO TKCN.GOV.VN"/>
					<p className="mt-[10px] font-[14px] dark:text-[#000]">{person.position}</p>
					<p className="mb-[10px] font-[14px] dark:text-[#000]">{person.organization}</p>
					<strong className="font-[14px] text-[#153680] dark:text-[#000] text-center">
						{person?.name}
					</strong>
				</div>
			))}
		</div>
	)
}

export default GroupPositon