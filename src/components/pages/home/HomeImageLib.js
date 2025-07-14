"use client";

import { Default_IMG } from "@/config/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HomeTitle from "./HomeTitle";

const HomeImageLib = ({ dataImage }) => {
   return (
      <section className="py-[30px]">
         <HomeTitle
            title="THƯ VIỆN ẢNH"
            showMore={{ exist: true, src: "/thu-vien-anh" }}
         />
         <div className="mx-[-15px] grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[0px] p-[0px] ">
            {dataImage?.data?.map(
               (image, index) =>
                  index < 8 && (
                     <div key={index} className="cursor-pointer px-[15px] pb-[30px]"  >
                        <Image
                           src={image?.urls?.[0] || Default_IMG}
                           alt=""
                           width={0}
                           height={0}
                           sizes="100vw"
                           className="w-full block object-cover h-[190px] overflow-hidden rounded-[5px]"
                        />
                        <Link prefetch={false} href={`/thu-vien-anh/${image?.id}`}>
                           <h3 className="pb-[1.4em] pt-[0.7em] text-[15px] line-clamp-4 leading-[22px] font-medium">
                              {image?.describe}
                           </h3>
                        </Link>
                     </div>
                  )
            )}
         </div>
      </section>
   );
};

export default HomeImageLib;
