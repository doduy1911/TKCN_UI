"use client";
import Player from "@/components/common/Player";
import Link from "next/link";
import HomeTitle from "./HomeTitle";

const MainVideo = ({ firstVideo }) => {
   return (
      <div className={`w-[50%] max-md:w-[100%]`}>
         {firstVideo?.urls?.[0] && (
            <div>
               <div className="rounded-[5px] overflow-hidden h-[200px] md:h-[385px]">
                  <Player url={firstVideo?.urls?.[0]} />
               </div>
               <Link
                  href={`/thu-vien-video/${firstVideo?.id}`}
                  className="text-[18px] font-medium mt-[10px] line-clamp-4 leading-[22px] tracking-[-.2px]"
               >
                  {firstVideo?.describe || "Tiêu đề video đang cập nhật"}
               </Link>
            </div>
         )}
      </div>
   );
};

const SubVideo = ({ video }) => {
   return (
      <>
         {video?.urls?.[0] && (
            <div
               className={`flex gap-[15px] max-md:gap-[20px] max-md:flex-col w-[100%]`}
            >
               <div className="md:w-[33%] w-full rounded-[5px] overflow-hidden h:[200px] md:h-[120px]">
                  <Player url={video?.urls?.[0]} />
               </div>
               <Link
                  prefetch={false}
                  href={`/thu-vien-video/${video?.id}`}
                  className="md:w-[67%] w-full text-[15px] font-medium line-clamp-4 leading-[21px] font-medium"
               >
                  {video?.describe || "Tiêu đề video đang cập nhật"}
               </Link>
            </div>
         )}
      </>
   );
};

const HomeVideoLib = ({ dataVideo }) => {
   return (
      <section className="py-[30px]">
         <HomeTitle
            title="THƯ VIỆN VIDEO"
            showMore={{ exist: true, src: "/thu-vien-video" }}
         />
         <div className="flex gap-[20px] max-md:flex-col">
            <MainVideo firstVideo={dataVideo?.data[0]} />
            <div className="flex flex-1 flex-col gap-[15px] h-auto md:h-[400px]">
               {dataVideo?.data?.map(
                  (video, index) =>
                     index > 0 && index < 4 && (
                        <SubVideo key={index} video={video} index={index} />
                     )
               )}
            </div>
         </div>
      </section>
   );
};

export default HomeVideoLib;