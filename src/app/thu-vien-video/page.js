import { useData } from "@/hook/useData";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import Player from "@/components/common/Player";
import DetailHeader from "@/components/pages/detail/DetailHeader";

const Page = async ({ searchParams }) => {
   // Get Current page
   const currentPage = searchParams?.page || 1
   // Get data API
   const dataVideo = await useData("videos", null, currentPage);

   return (
      <section className="container pt-6">
         <DetailHeader dataDetail={{ name: "Thư viện video" }} />
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-8 gap-[30px]">
            {dataVideo?.data?.length > 0 &&
               dataVideo?.data?.map((video, index) =>
                  video?.urls?.[0] &&
                  <div key={index} >
                     <div className="h-auto md:h-[180px]">
                        <Player url={video?.urls?.[0]} />
                     </div>
                     <Link prefetch={false} href={`/thu-vien-video/${video?.id}`} className="w-full my-2 max-sm:text-[16px] leading-[20px] text-[15px] font-medium sm:line-clamp-3 min-h-[40px]">
                        {video?.describe || "Tiêu đề đang được cập nhật"}
                     </Link>
                  </div>
               )}
         </div>
         <div className="flex justify-center mb-[60px]">
            {dataVideo?.meta?.last_page > 1 && (
               <Pagination dataPage={dataVideo} />
            )}
         </div>
      </section>
   );
};

export default Page;