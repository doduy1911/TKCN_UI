"use client";
import { Default_IMG, leaders } from "@/config/data";
import Image from "next/image";
import HomeTitle from "./HomeTitle";

const HomeLeaders = () => {
   return (
      <section className="border-t-[#ddd] pt-[40px]">
         <HomeTitle
            title={
               "SƠ ĐỒ TỔ CHỨC LÃNH ĐẠO VĂN PHÒNG ỦY BAN QUỐC GIA ỨNG PHÓ SỰ CỐ VÀ TÌM KIẾM CỨU NẠN"
            }
            showMore={{ exist: false, src: "#" }}
         />
         <div className="mx-[0px]">
            <div className="flex flex-wrap py-[35px] justify-between rounded-[5px] border-[1px] border-[#ddd]">
               {leaders?.map((leader, index) =>
                  <div key={index} className="w-[25%] max-lg:w-[50%] max-[530px]:w-[100%] last:border-r-0 border-r-[1px] max-[530px]:border-none border-[#ddd]">
                     <div className="flex flex-col items-center justify-center max-[475px]:p-[15px]">
                        <Image
                           src={leader?.imageUrl || Default_IMG}
                           alt=""
                           width={0}
                           height={0}
                           sizes="100vw"
                           className="mb-[1em]	block object-cover rounded-[3px] w-[65px] h-auto"
                        />
                        <p className="mb-[8px] text-center text-[14px]">
                           {leader?.position}
                        </p>
                        <h3 className="mb-[8px] text-center text-[16px] font-semibold">
                           {leader?.name}
                        </h3>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </section>
   );
};

export default HomeLeaders;
