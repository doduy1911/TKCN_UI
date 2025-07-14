import SideBar from "@/components/common/SideBar";
import DetailHeader from "@/components/pages/detail/DetailHeader";
import Pagination from "@/components/Pagination";
import { useData } from "@/hook/useData";
import Link from "next/link";

const Page = async ({ searchParams }) => {
   // Get current page
   const currentPage = searchParams?.page || 1;

   const dataSideBar = await useData("posts", 2);
   const timKiemCuuNan = await useData("posts", 6, currentPage);

   return (
      <div className="container pt-6">
         <DetailHeader dataDetail={{ name: "Cơ sở dữ liệu tìm kiếm cứu nạn" }} />
         <section className="mx-auto flex justify-between gap-[60px] py-6 max-md:flex-col">
            <section className="flex-1">
               <div className="flex flex-col gap-[30px]">
                  {timKiemCuuNan?.data?.length > 0 && (
                     <ul ul>
                        {timKiemCuuNan?.data?.map((item, index) => (
                           <li key={index} className="mb-[15px]">
                              <Link prefetch={false} href={`/${item.slug}`}>
                                 <h3>
                                    <b>{item?.name}</b>
                                 </h3>
                                 <span>...</span>
                              </Link>
                           </li>
                        ))}
                     </ul>
                  )}
               </div>

               {timKiemCuuNan?.meta?.last_page > 1 && (
                  <div className="flex justify-center mb-10">
                     <Pagination dataPage={timKiemCuuNan} />
                  </div>
               )}
            </section>

            {dataSideBar?.data?.length > 0 && (
               <SideBar dataSideBar={dataSideBar} />
            )}
         </section>
      </div>
   );
};

export default Page;
