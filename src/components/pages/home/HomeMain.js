"use client"
import { Default_IMG } from "@/config/data"
import Image from "next/image"
import Slider from "react-slick"
import Noi_Bat_1 from "../../../assets/banner-noi-bat/biendaovietnam.jpg"
import ListSlide from "./homeMain/ListSlide"
import SidebarMain from "./homeMain/SidebarMain"
import SlideMain from "./homeMain/SlideMain"
import ImageGallery from "./homeMain/ImageGallery "

const HomeMain = ({ tinNoiBat, timKiemCuuNan, baoCao, banner }) => {
   const bannerNews = {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 4500,
      infinite: true,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 1,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   }
   const bannerImages = [Noi_Bat_1, Noi_Bat_1]

   return (
      <>
         <div className="banner-head gap-[20px] flex max-md:flex-col mb-[30px] pt-[20px]">
            <div className="w-full md:w-[75%]">
               <div className="flex max-sm:flex-col gap-[20px]">
                  <div className="w-full lg:w-[70%] ">
                     {tinNoiBat?.data?.length > 0 && (
                        <SlideMain data={tinNoiBat} time={4500} />
                     )}
                  </div>
                  <div className="w-[100%] block sm:hidden lg:block lg:w-[30%]">
                     {tinNoiBat?.data?.length > 0 && (
                        <ListSlide data={tinNoiBat} count={20} />
                     )}
                  </div>
               </div>
               <div className="w-[100%] max-lg:w-[100%] flex-col max-sm:w-[100%] mt-[20px]">
                  {banner?.data && <ImageGallery data={banner?.data} />}
               </div>
            </div>

            {(baoCao?.data?.length > 0 && timKiemCuuNan?.data?.length > 0) && (
               <div className="w-full md:w-[25%]">
                  <div className="max-w-[200px] w-full min-w-full overflow-hidden rounded-t-[7px]">
                     <Slider {...bannerNews}>
                        {bannerImages?.map((image, index) => (
                           <div key={index}>
                              <Image
                                 src={image || Default_IMG}
                                 alt="Banner Trang Chu"
                                 width={0}
                                 height={0}
                                 sizes="100vw"
                                 className="h-[70px] w-full object-cover"
                              />
                           </div>
                        ))}
                     </Slider>
                  </div>
                  <SidebarMain
                     titleSub={"BÁO CÁO NGÀY"}
                     subPosts={baoCao}
                     classname={"mb-[10px] relative top-[-7px] rounded-b-[5px]"}
                  />
                  <SidebarMain
                     titleSub={"CƠ SỞ DỮ LIỆU TÌM KIẾM CỨU"}
                     subPosts={timKiemCuuNan}
                     classname={"rounded-b-[5px]"}
                  />
               </div>
            )}
         </div>
      </>
   )
}

export default HomeMain
