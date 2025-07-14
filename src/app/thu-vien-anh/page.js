import Pagination from "@/components/Pagination"
import DetailHeader from "@/components/pages/detail/DetailHeader"
import { Default_IMG } from "@/config/data"
import { useData } from "@/hook/useData"
import Image from "next/image"
import Link from "next/link"

const Page = async ({ searchParams }) => {
	// Get Current page
	const currentPage = searchParams?.page || 1

	// Get data
	const dataImage = await useData("images", null, currentPage)

	return (
		<section className="container pt-6">
			<DetailHeader dataDetail={{ name: "Thư viện ảnh" }} />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] py-8">
				{dataImage?.data?.map((image, index) => {
					return (
						<Link prefetch={false} href={`thu-vien-anh/${image?.id}`} key={index}>
							<div className="min-h-[180px]">
								<Image
									src={image?.urls?.[0] || Default_IMG}
									alt="Thu viện ảnh TKCN.GOV.VN"
									width={0}
									height={0}
									sizes="100vw"
									className="m-[0px] p-[0px] h-[180px] md:h-[200px] w-full object-cover overflow-hidden rounded-[7px]"
									style={{ boxShadow: '0 5px 10px 0 rgb(0 0 50 / 10%)' }}
								/>
							</div>
							<div className="flex-1">
								<h3 className="font-medium m-[0px] pt-[15px] text-[15px] line-clamp-2 text-[#111] dark:text-[#fff] leading-[1.4]">
									{image?.describe || "Thư Viện Hình Ảnh TKCN.GOV.VN"}
								</h3>
							</div>
						</Link>
					)
				})}
			</div>

			<div className="flex justify-center pb-[60px]">
				{dataImage?.meta?.last_page > 1 && (
					<Pagination dataPage={dataImage} />
				)}
			</div>
		</section>
	)
}

export default Page
