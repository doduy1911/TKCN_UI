import ImageSlider from "@/components/common/ImageSlider";
import SideBar from "@/components/common/SideBar";
import DetailHeader from "@/components/pages/detail/DetailHeader";
import { useData, useDataDetail } from "@/hook/useData";

export async function generateStaticParams() {
   try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}images?limit=1`, { cache: 'no-store' })
      if (!res.ok) {
         console.log('Lỗi khi tải dữ liệu');
         // throw new Error('Failed to fetch data')
      }
      const data = await res.json()
      if (data?.data?.length > 0) {
         return data?.data?.map(item => ({ slug: String(item.id) }));
      }
      return undefined
   }
   catch (error) {
      console.log(error)
   }
}

const Page = async ({ params }) => {
   // Get detail id
   const detailId = params?.slug;

   // Get data
   const dataSideBar = await useData("posts", 2);
   const dataImage = await useDataDetail("images", detailId);
  
   return (
      <div className="container pt-6">
         <DetailHeader dataDetail={dataImage?.data} />
         <div className="mx-auto flex justify-between gap-[60px] py-8">
            <div className="w-[100%] xl:w-[65%]">
               {dataImage?.data && dataImage?.data?.urls && dataImage?.data?.urls?.length > 0 &&
                  <ImageSlider dataImage={dataImage} />
               }
            </div>
            {dataSideBar?.data?.length > 0 && (
               <SideBar
                  dataSideBar={dataSideBar}
                  classname={"hidden xl:block w-[30%]"}
               />
            )}
         </div>
      </div>
   );
};

export default Page;
