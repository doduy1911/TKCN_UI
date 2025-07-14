"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import SubInput from "./SubInput"

const DetailForm = () => {
	return (
		<form className="bg-[#f5f5f6] px-[25px] py-[15px] dark:bg-[#151a2d]">
			<h3 className="mb-[10px] text-[1.2em] font-semibold">Trả lời</h3>
			<p className="mb-[1em] text-[16px] opacity-80">
				Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc
				được đánh dấu *
			</p>
			<p className="mb-[0.5em] text-[0.9em] font-bold">Bình luận *</p>
			<textarea
				className="mb-[1em] w-[100%] bg-white p-[0.75em] text-black"
				name=""
				id=""
				cols={30}
				rows={5}
			></textarea>
			<div className="mb-[1em] flex justify-between gap-[30px] max-sm:flex-col max-sm:gap-[1em]">
				<SubInput label={"Tên *"} />
				<SubInput label={"Email *"} />
				<SubInput label={"Trang web"} />
			</div>
			<div className="mb-[1em] flex items-center gap-[15px]">
				<input type="checkbox" />
				<p className="text-[0.9em] font-bold">
					Lưu tên của tôi, email, và trang web trong trình duyệt này cho
					lần bình luận kế tiếp của tôi.
				</p>
			</div>
			<Button className="rounded-none">Phản hồi</Button>
		</form>
	)
}

export default DetailForm