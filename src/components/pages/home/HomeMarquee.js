"use client"
import Link from "next/link"

const HomeMarquee = ({ data }) => {
  return (
    <marquee scrollamount="3" scrolldelay="5" direction="left" className="border-b-[4px] border-[#C3D0E0] border-double" >
      <div className="flex gap-6">
        {data?.data?.map((item, index) =>
          index < 10 && (
            <p  key={index} className="py-[10px] text-[#FD0000] before:content-['\25A0'] before:mr-[7px] before:relative before:top-[-2px]">
              <Link prefetch={false} href={`/${item?.slug}`} className="text-[#3B4E68] text-[15px] dark:text-[#fff]" >
                {item?.name}
              </Link>
            </p>
          ))}

      </div>

    </marquee>
  )
}

export default HomeMarquee