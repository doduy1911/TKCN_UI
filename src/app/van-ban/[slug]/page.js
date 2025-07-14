import SideBar from "@/components/common/SideBar"
import DetailHeader from "@/components/pages/detail/DetailHeader"
import { useData, useDataDetail } from "@/hook/useData"
import { convertDate } from "@/utils"
import parse from 'html-react-parser'

const InfoBlock = ({ title, value }) => (
  <div className="flex border-[1px] border-solid border-[#ddd]">
    <div className="w-[35%] md:w-[20%] border-r-[1px] border-solid border-[#ddd] p-[15px] txt-[16px] font-semibold	">{title}</div>
    <div className="w-[65%] md:w-[80%] p-[15px] text-[15px] ">{value || "Đang cập nhật."}</div>
  </div>
)

export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}legal-documents?limit=1`, { cache: 'no-store' })
    if (!res.ok) {
      console.log('Lỗi khi tải dữ liệu');
      // throw new Error('Lỗi khi tải dữ liệu')
    }
    const data = await res.json()
    if (data?.data?.length > 0) {
      return data?.data?.map(item => ({ slug: String(item.id) }))
    }
    return undefined
  } catch (error) {
    console.log(error)
  }
}

const Page = async ({ params }) => {
  const detailId = params?.slug
  const dataSideBar = await useData('posts', 2)
  const legalDetail = await useDataDetail("legal-documents", detailId)

  return (
    <div className="container pt-6">
      <DetailHeader dataDetail={legalDetail?.data} />
      <div className="mx-auto flex justify-between gap-[60px] py-8 max-lg:flex-col mb-[50px]">
        <div className="w-full">
          <InfoBlock title="Mô tả / Trích yếu" value={legalDetail?.data?.describe && parse(legalDetail?.data?.describe)} />
          <InfoBlock title="Nội dung văn bản" value={legalDetail?.data?.content && parse(legalDetail?.data?.content)} />
          <InfoBlock title="Số/Ký hiệu" value={legalDetail?.data?.name} />
          <InfoBlock title="Ngày ban hành" value={legalDetail?.data?.date_issue ? convertDate(legalDetail?.data?.date_issue) : null} />
          <InfoBlock title="Ngày có hiệu lực" value={legalDetail?.data?.date_effective ? convertDate(legalDetail?.data?.date_effective) : null} />
          <InfoBlock title="Người ký" value={legalDetail?.data?.signer} />
          <InfoBlock title="Văn bản thay thế" value={legalDetail?.data?.replace_text} />
        </div>
        {dataSideBar?.data?.length > 0 && (
          <SideBar dataSideBar={dataSideBar} classname={"max-lg:w-[100%]"} />
        )}
      </div>
    </div>
  )
}

export default Page
