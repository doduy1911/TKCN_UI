import Link from "next/link"
import Image from "next/image"
import Pagination from "@/components/Pagination"
import SideBar from "@/components/common/SideBar"
import DetailHeader from "@/components/pages/detail/DetailHeader"
import { useData, useSearch } from "@/hook/useData"

const Page = async ({ searchParams }) => {
	// Key search
	const keySearch = decodeURIComponent(searchParams?.search)?.replace(/-/gi, " ")
	const dataSearch = await useSearch(keySearch)
	const dataSideBar = await useData("posts", 2)

	return (
		<div className="container pt-6">
			<DetailHeader dataDetail={{ name: "Tìm kiếm" }} />
			<section className="mx-auto flex justify-between gap-[60px] pt-5 pb-8 max-md:flex-col">
				<div className="flex flex-1 flex-col gap-[30px]">
					<h1 className="text-[#444] italic">
						{dataSearch?.data?.length} Kết quả được tìm thấy cho từ khoá &ldquo;{keySearch}&rdquo;
					</h1>
					{dataSearch?.data?.map((item, index) => (
						<Link
							prefetch={false}
							href={`/${item?.slug}`}
							className="flex max-sm:flex-col gap-[15px] no-underline"
							key={index}
						>
							<div className="w-[40%] max-sm:w-[100%]">
								<Image
									src={item?.url || Default_IMG}
									alt=""
									width={0}
									height={0}
									sizes="100vw"
									className="m-[0px] p-[0px] w-full h-[180px] max-sm:h-[220px] object-cover rounded-[7px]"
									style={{ boxShadow: '0 5px 10px 0 rgb(0 0 50 / 10%)' }}
								/>
							</div>
							<div className="flex-1">
								<h5 className="text-[1.15em] font-bold text-[#444]">
									{item?.name}
								</h5>
								<p className="m-[0px] p-[0px] text-[14px] opacity-80 line-clamp-3">
									{item?.describe}
								</p>
							</div>
						</Link>
					))}

					{/* {dataSearch?.meta?.last_page > 1 && (
						<Pagination dataPage={dataSearch} />
					)} */}
				</div>

				{dataSideBar?.data?.length > 0 && (
					<SideBar dataSideBar={dataSideBar} />
				)}
			</section>
		</div>
	)
}

export default Page