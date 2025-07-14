"use client"
import Image from "next/image"
import logo from "../assets/logo/logo.png"

const Footer = () => {
	return (
		<div className="space-y-2 bg-[#0AA4E2] dark:bg-slate-900 py-[50px] text-[#fff] text-center">
			<section className="container flex justify-center items-center gap-[30px] max-lg:flex-col">
				{/* <div className="">
					<Image src={logo} alt="" className="w-[180px]" />
				</div> */}
				<div className="text-left">
					<h3 className="font-bold text-[18px] md:text-[24px] text-[#fff] text-center">
						BAN CHỈ ĐẠO PHÒNG THỦ DÂN SỰ QUỐC GIA
					</h3>
					<div className="opacity-80">
						<br />
						<p className="text-[15px] capitalize">Địa chỉ : số 8 - đường Sân Golf - phường Long Biên - thành phố Hà Nội.</p>
						<p className="text-[15px] capitalize">Điện thoại: 024 37333664.</p>
						<p className="text-[15px] capitalize">Fax: 024 37 33384.</p>
						<p className="text-[15px]"> Email: banbientap@tkcn.gov.vn.</p>
					</div>
				</div>
			</section>
			<p className="container text-[14px] pt-[30px] text-[#fff] opacity-80">
				Bản quyền thuộc ban chỉ đạo phòng thủ dân sự quốc gia.
				<br />
				Ghi rõ nguồn &quot;Cổng Thông Tin Điện Tử ban chỉ đạo phòng thủ dân sự quốc gia&quot; hoặc &quot;www.tkcn.gov.vn&quot; khi phát
				hành lại thông tin từ các nguồn này.
			</p>
		</div>
	)
}

export default Footer