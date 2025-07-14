"use client"
import React, { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

const Searchs = () => {
  const router = useRouter()
  const inputRef = useRef(null)

  const handleFormClick = () => {
    inputRef.current.focus()
  }

  //Handle Search
  const [input, setInput] = useState()
  const handleSearchItem = (e) => {
    const value = e.target.value
    setInput(value)
  }

  // Sumbit Form
  const handleSumbit = (event) => {
    event.preventDefault()
    if (input !== "" && input) {
      const value = encodeURIComponent(input?.trim())?.replaceAll('%20', '-')
      router.push(`/tim-kiem?search=${value}`)
    }
  }

  return (
    <div onClick={handleFormClick} className="bg-[#fff] rounded-[3px] px-[5px] py-[3px] lg:mb-[5px] xl:block lg:hidden cursor-pointer">
      <form id='search-form' onSubmit={handleSumbit} className="flex">
        <Search className="stroke-[#5c5c5c] w-[18px] h-[18px] mt-[2px]" />
        <input
          id='search-input'
          type='text'
          autoComplete="off"
          placeholder="Search"
          value={input}
          ref={inputRef}
          className="bg-[#fff] px-[5px] rounded-[3px] focus:outline-none text-[#5c5c5c]"
          onChange={handleSearchItem}
        />
      </form>
    </div>
  )
}

export default Searchs