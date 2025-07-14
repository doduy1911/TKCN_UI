import DetailContainer from "@/components/pages/detail/DetailContainer"
import { useData, usePostDetail } from "@/hook/useData"
import PageNotFound from "../not-found"
import SideBar from "@/components/common/SideBar"
import BadgesReportDetail from "@/components/pages/badges/BadgesReportDetail"

export const generateStaticParams = async () => {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API}posts?limit=1`, { cache: 'no-store' })
		if (!res.ok) {
         console.log('Lỗi khi tải dữ liệu');
			// throw new Error('Failed to fetch data')
		}
		const data = await res.json()
		if (data?.data?.length > 0) {
			return data?.data?.map(item => ({ detail: item.slug }));
		}
		return undefined
	}
	catch (error) {
		console.log(error)
	}
}

const Page = async ({ params }) => {
	const dataSideBar = await useData('posts', 2)
	const result = await usePostDetail(params.detail)

	if (!result?.post?.data && !result?.report?.data) {
		return <PageNotFound />
	}

	return (
		<section className="container mx-auto justify-between gap-[60px] py-6 lg:flex">
			{result?.post?.data ?
				<DetailContainer dataDetail={result?.post?.data} />
				:
				<BadgesReportDetail dataDetail={result?.report?.data} />
			}

			{dataSideBar?.data?.length > 0 &&
				<SideBar
					dataSideBar={dataSideBar}
					classname={"max-lg:w-[100%]"}
				/>
			}
		</section>
	)
}

export default Page
