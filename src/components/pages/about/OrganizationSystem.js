"use client"
import Image from "next/image"
import TO_CHUC from "../../../../public/to-chuc/HTTKCN2.png"

const OrganizationSystem = () => {
  return (
    <div className="py-[50px]" >
      <h2 className='text-center font-semibold text-[28px] mb-[30px] text-[#008DCE] dark:text-[white]'>HỆ THỐNG TỔ CHỨC TÌM KIẾM CỨU NẠN CÁC CẤP</h2>
      <Image
        src={TO_CHUC}
        alt=""
        sizes="100vw"
        className="m-[0px] p-[0px] rounded-[7px] w-full object-cover mb-[30px]"
      />
    </div>
  )
}

export default OrganizationSystem