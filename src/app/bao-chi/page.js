import Image from "next/image"
import Link from "next/link"
import { Default_IMG } from "@/config/data"
import SideBar from "@/components/common/SideBar"
import { useData } from "@/hook/useData"
import Pagination from "@/components/Pagination"
import DetailHeader from "@/components/pages/detail/DetailHeader"

const Page = async ({ searchParams }) => {
	// Get current page
	const currentPage = searchParams?.page || 1

	const dataSideBar = await useData('posts', 2)
	const baoChi = await useData('posts', 4, currentPage)

	return (
		<div className="container pt-6">
			<DetailHeader dataDetail={{ name: "Thông cáo báo chí" }} />
			<section className="mx-auto flex justify-between gap-[60px] py-8 max-md:flex-col">
				<section className="flex-1">
					<div className="flex flex-col gap-[30px]">
						{baoChi?.data?.map((post, index) =>
							<Link
								prefetch={false}
								href={`/${post?.slug}`}
								className="flex gap-[15px] max-sm:flex-col no-underline"
								key={index}
							>
								<div className="w-[40%] max-sm:w-[100%]">
									<Image
										src={post?.url || Default_IMG}
										alt=""
										width={0}
										height={0}
										sizes="100vw"
										className="m-[0px] p-[0px] rounded-[5px] w-full h-[180px] max-sm:h-[220px] object-cover"
									/>
								</div>
								<div className="flex-1">
									<h5 className="text-[1.15em] font-bold">
										{post?.name}
									</h5>
									<p className="m-[0px] p-[0px] text-[14px] opacity-80 line-clamp-3">
										{post?.describe}
									</p>
								</div>
							</Link>
						)}
					</div>
				</section>
				{dataSideBar?.data?.length > 0 &&
					<SideBar
						dataSideBar={dataSideBar}
						classname={""}
					/>
				}
			</section>

			<div className="flex justify-center mb-10">
				{baoChi?.meta?.last_page > 1 &&
					<Pagination dataPage={baoChi} />
				}
			</div>
		</div>

	)
}

export default Page