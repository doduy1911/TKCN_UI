"use client"
import React from "react"
import { leaders } from "@/config/data"
import GroupPositon from "./GroupPositon"

const Organization = () => {
	const positionNames = Array.from(
		new Set(leaders.map((person) => person.position))
	)
	const filteredData = positionNames.map((position) => {
		const peopleWithRank = leaders.filter(
			(person) => person.position === position
		)
		return { position, people: peopleWithRank }
	})

	return (
		<div className="mt-[50px]">
			{filteredData.map((data, index) => (
				<GroupPositon persons={data.people} key={index} />
			))}
		</div>
	)
}

export default Organization