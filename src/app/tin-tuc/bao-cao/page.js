import SideBar from "@/components/common/SideBar";
import BadgesReport from "@/components/pages/badges/BadgesReport";
import DetailHeader from "@/components/pages/detail/DetailHeader";
import Pagination from "@/components/Pagination";
import { useData } from "@/hook/useData";

const Page = async ({ searchParams }) => {
   // Get current page
   const currentPage = searchParams?.page || 1;

   const dataSideBar = await useData("posts", 2);
   const dataBaoCao = await useData("reports", null, currentPage);

   return (
      <div className="container pt-6">
         <DetailHeader dataDetail={{ name: "Báo cáo" }} />
         <section className="mx-auto flex justify-between gap-[30px] py-6 max-md:flex-col">
            <div className="w-[65%] max-lg:w-[40%] max-md:w-[100%]">
               <BadgesReport dataBaoCao={dataBaoCao} />

               {dataBaoCao?.meta?.last_page > 1 && (
                  <Pagination dataPage={dataBaoCao} />
               )}
            </div>

            {dataSideBar?.data?.length > 0 && (
               <SideBar dataSideBar={dataSideBar} classname="" />
            )}
         </section>
      </div>
   );
};
export default Page;
