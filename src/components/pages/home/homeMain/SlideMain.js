"use client"
import { Default_IMG } from "@/config/data"
import { convertDate } from "@/utils"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineClockCircle } from "react-icons/ai"


const extractTextFromHtml = (htmlString, maxLength) => {
   const plainText = htmlString.replace(/<[^>]*>/g, '').slice(0, maxLength);
   return plainText;
};

const SlideMain = ({ data, time }) => {

   return (
      <div className="max-w-[200px] w-full min-w-full overflow-hidden rounded-t-[7px]">
         {data?.data?.map((item, index) => {
            if (index < 1) {
               return (
                  <div key={index}>
                     <div className="flex-1 overflow-hidden" >
                        <Link prefetch={false} href={`/${item?.slug}`}>
                           <Image
                              src={item?.url || Default_IMG}
                              alt="Ảnh bài viết nổi bật"
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="h-[200px] sm:h-[300px] md:h-[400px] w-full overflow-hidden object-cover rounded-[7px]"
                           />
                        </Link>
                     </div>
                     <div className="pt-[0.7em] text-[0.9em]">
                        <Link prefetch={false} href={`/${item?.slug}`}>
                           <h5 className="text-[20px] font-bold line-clamp-2">
                              {item?.name}
                           </h5>
                        </Link>
                        <p className="mb-[15px] mt-[5px] flex items-center gap-[8px] text-[0.8em] opacity-80">
                           <AiOutlineClockCircle />
                           {convertDate(item?.updated_at)}
                        </p>
                        {item?.describe ? <p className="line-clamp-3 text-[15px]">{item?.describe}</p> : `${extractTextFromHtml(item?.content, 510)}...`}
                     </div>
                  </div>
               );
            }
         })}
      </div>
   )
}

export default SlideMain
