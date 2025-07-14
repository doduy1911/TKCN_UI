"use client"
import Link from "next/link"

const SidebarMain = ({ titleSub, subPosts, classname }) => {
   return (
      <div className={`overflow-hidden pb-[10px] border-[1px] border-[#ddd] ${classname}`}>
         <div className="text-[#0752A6] dark:text-[#fff] font-semibold bg-[#89D4FD] h-[30px] text-center text-[15px] leading-[30px] dark:bg-[#082f49]">
            {titleSub}
         </div>
         <div className="px-[15px] py-[15px] h-[400px] md:h-[276px] overflow-auto scrollbar-vertical">
            {subPosts?.data?.map((post, index) => {
               return (
                  <p key={index} className="flex justify-between mb-[10px] border-b-[1px] border-b-[#e6e6e6] pb-[10px] text-[15px] last:border-b-[0px] relative">
                     <Link prefetch={false} href={`/${post?.slug}`} className=" pl-[20px]">
                        {post?.title || post?.name}
                     </Link>
                     <span
                        className="absolute left-0 top-0 text-[13px] text-[#FD0000] before:content-['\25A0'] before:mr-7 before:block"
                     />
                  </p>
               )
            })}
         </div>
      </div>
   )
}

export default SidebarMain
