import SideBar from "@/components/common/SideBar"
import { useData, useDataDetail } from "@/hook/useData"
import Player from "@/components/common/Player"
import DetailHeader from "@/components/pages/detail/DetailHeader"

export async function generateStaticParams() {
   try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}videos?limit=1`, { cache: 'no-store' })
      if (!res.ok) {
         console.log('Failed to fetch data');
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
   // Id Detail
   const detailId = params?.slug

   // Get Data
   const dataSideBar = await useData("posts", 2)
   const dataVideo = await useData("videos", null)
   const videoDetail = await useDataDetail("videos", detailId)

   return (
      <div className="container pt-6">
         <DetailHeader dataDetail={videoDetail?.data} />
         <div className="mx-auto flex justify-between gap-[60px] py-8 max-lg:flex-col">
            <div className="flex-1 max-lg:w-[100%]">
               {videoDetail?.data?.urls?.length > 0 &&
                  videoDetail?.data?.urls?.map((videoUrl, index) =>
                     videoUrl &&
                     <div key={index} className="mb-[20px]">
                        <Player url={videoUrl} />
                        <p className="mt-[10px]">
                           {videoDetail?.data?.describe}
                        </p>
                     </div>
                  )
               }

               {dataVideo?.data?.length > 0 &&
                  <div>
                     <h1 className="mb-[30px] text-[30px]">Các video khác</h1>
                     <div className="grid gap-[30px] min-[200px]:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                        {dataVideo?.data?.map((video, index) => (
                           <div key={index}>
                              {video?.urls?.[0] &&
                                 <div>
                                    <Player url={video?.urls[0]} />
                                    <p className="mt-[10px] line-clamp-4">
                                       {video?.describe}
                                    </p>
                                 </div>
                              }
                           </div>
                        ))}
                     </div>
                  </div>
               }
            </div>

            {dataSideBar?.data?.length > 0 && (
               <SideBar dataSideBar={dataSideBar} classname={"max-lg:w-[100%]"} />
            )}
         </div>
      </div>
   )
}

export default Page
