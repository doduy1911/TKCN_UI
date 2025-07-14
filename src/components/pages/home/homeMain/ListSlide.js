"use client"
import Link from "next/link"

const ListSlide = ({ data, count }) => {
   return (
      <div className="h-[599px] scrollbar-vertical flex-1 flex-col border-[#ddd] border-[1px] py-[10px] px-[15px] rounded-[7px] border-t-[5px] border-t-[#89D4FD] marquee">
         <div className="marquee-content">
            {data?.data?.map((item, index) =>
               index > 0 && index < count && (
                  <Link
                     prefetch={false}
                     key={index}
                     href={`/${item?.slug}`}
                     className="mb-[15px] flex justify-between border-b-[1px] border-b-[#e6e6e6] pb-[15px] last:border-b-[0px] relative group"
                  >
                     <p className="pl-[20px] max-w-[300px] text-[15px] max-sm:max-w-[100%] sm:line-clamp-2">
                        {item?.name}
                     </p>
                     <span
                        className="absolute left-0 top-21px text-[13px] text-[#FD0000] before:content-['\25A0'] before:mr-7 before:block"
                     />
                  </Link>
               )
            )}
         </div>
      </div>
   )
}

export default ListSlide
