"use client";

import Link from "next/link";
import React from "react";

const HomeTitle = ({ title, showMore }) => {
   const responsiveTitle = showMore?.exist && `max-[420px]:max-w-[100%]`;

   return (
      <div className="relative">
         <div className="absolute left-0 top-[5px] h-[16px] w-[3px] bg-red-600"></div>
         <p
            className={`text-[#0752A6] dark:text-[white] mb-[15px] pl-[10px] text-[19px] font-semibold ${responsiveTitle}`}
         >
            {title}
         </p>
         {showMore?.exist && (
            <Link
               prefetch={false}
               href={showMore.src}
               className="absolute right-0 top-[10px] text-[14px] font-semibold uppercase max-sm:hidden cursor-pointer text-[#0752A6] hover:text-[#e23d3d] transition-all"
            >
               XEM THÊM
            </Link>
         )}
      </div>
   );
};

export default HomeTitle;
