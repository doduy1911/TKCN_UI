"use client"
import { convertDate } from "@/utils"
import Link from "next/link"
import { AiOutlineClockCircle } from "react-icons/ai"
import Slider from "react-slick"

const HomeReport = async ({ dataBaoCao }) => {
	const settingReport = {
		arrows: false,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplaySpeed: 3500,
		autoplay: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}

	return (
		<section className="pb-[30px] pt-[30px] border-y-[1px] border-[#ddd]">
			<p className="color-[white] mb-[20px] h-[25px] w-[90px] rounded-[2px] bg-[#e23d3d] text-center text-[14px] leading-[25px] text-white">
				Báo cáo
			</p>
			<div className="max-w-[200px] w-full min-w-full">
				<Slider {...settingReport}>
					{dataBaoCao?.data?.map((val, index) =>
						index < 10 &&
						<Link prefetch={false} href={`/${val?.slug}`} className="px-[15px]" key={index}>
							<h3 className="mb-[15px] text-[15px] font-semibold line-clamp-2">
								{val?.title || "Báo cáo đang được cập nhật"}
							</h3>
							<p className="mb-[15px] flex items-center gap-[8px] text-[0.8em] opacity-80">
								<AiOutlineClockCircle />
								{val?.date_start && convertDate(val?.date_start)}
							</p>
						</Link>
					)}
				</Slider>
			</div>
		</section>
	)
}

export default HomeReport