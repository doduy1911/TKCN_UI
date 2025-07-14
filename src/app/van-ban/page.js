import SideBar from "@/components/common/SideBar"
import DetailHeader from "@/components/pages/detail/DetailHeader"
import FilterLegal from "@/components/pages/legal/FilterLegal"
import { useData, useDataCategory, useDataSearch } from "@/hook/useData"

const Page = async ({ searchParams }) => {
   // Get current page
   const currentPage = searchParams?.page || 1

   const dataSideBar = await useData('posts', 2)

   // Filter search
   const linhVucParam = searchParams?.linh_vuc ? `linh_vuc=${searchParams.linh_vuc}` : ''
   const coQuanBanHanhParam = searchParams?.agency_issue ? `agency_issue=${searchParams.agency_issue}` : ''
   const soHieuParam = searchParams?.name ? `search=${searchParams.name}` : ''
   const trichYeuParam = searchParams?.content ? `describe=${searchParams.content}` : ''
   const searchQuery = [soHieuParam, coQuanBanHanhParam, trichYeuParam, linhVucParam].filter(param => param !== '').join('&')

   // Get data category
   const dataCoQuanBanHanh = await useDataCategory('legislation-category', 'agency_issue')
   const dataLinhVuc = await useDataCategory('legislation-category', 'linh_vuc')

   // Get data legal
   const dataLegal = await useDataSearch('legal-documents', searchQuery, currentPage)

   return (
      <div className="container pt-6">
         <DetailHeader dataDetail={{ name: "Văn bản pháp luật" }} />
         <section className="mx-auto flex justify-between gap-[60px] py-8 max-md:flex-col">
            <div className="flex flex-1 flex-col gap-[30px]">
               <h2 className='hidden text-center font-semibold text-[24px] mb-[20px] text-[#008DCE] dark:text-[white]'>VĂN BẢN PHÁP LUẬT</h2>
               <FilterLegal
                  dataLegal={dataLegal}
                  dataCoQuanBanHanh={dataCoQuanBanHanh}
                  dataLinhVuc={dataLinhVuc}
               />
            </div>
            {dataSideBar?.data?.length > 0 &&
               <SideBar dataSideBar={dataSideBar} />
            }
         </section>
      </div>
   )
}

export default Page