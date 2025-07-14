"use client";

import { Default_IMG } from "@/config/data";
import { convertDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import HomeTitle from "./HomeTitle";

const HomeRescue = ({ data, title, showMoreUrl }) => {
   return (
      <section className="pt-[30px]">
         <HomeTitle
            title={title}
            showMore={{ exist: true, src: showMoreUrl }}
         />
         <div className="grid-cols-auto gap-[20px] grid p-[0px] xl:grid-cols-3">
            {data?.data?.map(
               (item, index) =>
                  index < 6 && (
                     <Link
                        prefetch={false}
                        key={index}
                        href={`/${item?.slug}`}
                        className="flex max-sm:flex-col w-[100%] cursor-pointer border border-solid border-gray-300 rounded-[5px] hover:border-[#0AA4E2] max-sm:p-[15px]"
                     >
                        <div className="w-[160px] min-w-[160px] max-sm:w-[100%]">
                           <Image
                              src={item?.url || Default_IMG}
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="block object-cover w-[160px] min-w-[160px] h-[110px] max-sm:w-[100%] max-sm:h-[200px] rounded-[5px]"
                           />
                        </div>
                        <div className="sm:pl-[14px] sm:pr-[14px] pt-[10px]">
                           <p className="max-sm:text-[16px] overflow-hidden max-w-[300px] text-[15px] font-medium max-sm:max-w-[100%] sm:line-clamp-3 text-justify tracking-[-0.2px] leading-[1.2]">
                              {item?.name || "Nội dung đang được cập nhật"}
                           </p>
                           <p className="mt-[10px] flex items-center text-[0.8em] opacity-90">
                              <AiOutlineClockCircle className="mr-[5px] "/>
                              {item?.date_start ? convertDate(item?.date_start) : 'Đang cập nhật'}
                           </p>
                        </div>
                     </Link>
                  )
            )}
         </div>
      </section>
   );
};

export default HomeRescue;
