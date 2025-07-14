import HomeImageLib from "@/components/pages/home/HomeImageLib"
import HomeMain from "@/components/pages/home/HomeMain"
import HomeRescue from "@/components/pages/home/HomeRescue"
import HomeVideoLib from "@/components/pages/home/HomeVideoLib"
import { useData } from "@/hook/useData"


const Home = async () => {
   const tinNoiBat = await useData("posts", 2)
   const suKien = await useData("posts", 3)
   const hoatDongTimKiemCuuNan = await useData("posts", 7)
   const coSoDuLieuTimKiemCuuNan = await useData("posts", 6)
   const kienThuc = await useData("posts", 5)
   const dataBaoCao = await useData("reports", null)
   const dataVideo = await useData("videos", null)
   const dataImage = await useData("images", null)
   const dataBanner = await useData("slide-images", null)

   return (
      <div className="container mx-auto pb-8 max-sm:pb-4">
         {/* {hoatDongTimKiemCuuNan?.data?.length > 0 && <HomeMarquee data={hoatDongTimKiemCuuNan} />} */}
         <HomeMain
            tinNoiBat={tinNoiBat}
            timKiemCuuNan={coSoDuLieuTimKiemCuuNan}
            baoCao={dataBaoCao}
            banner={dataBanner}
         />
         {/* {dataBaoCao?.data?.length > 4 &&
            <HomeReport dataBaoCao={dataBaoCao} />
         }
         <HomeLeaders /> */}
         {suKien?.data?.length > 0 &&
            <HomeRescue
               data={suKien}
               title={"SỰ KIỆN"}
               showMoreUrl={"/tin-tuc/su-kien"}
            />
         }
         {hoatDongTimKiemCuuNan?.data?.length > 0 &&
            <HomeRescue
               data={hoatDongTimKiemCuuNan}
               title={"HOẠT ĐỘNG TÌM KIẾM CỨU NẠN"}
               showMoreUrl={"/tin-tuc/hoat-dong-tim-kiem-cuu-nan"}
            />
         }
         {kienThuc?.data?.length > 0 &&
            <HomeRescue
               data={kienThuc}
               title={"PHỔ BIẾN KIẾN THỨC"}
               showMoreUrl={"/kien-thuc"}
            />
         }
         {dataVideo?.data?.length > 0 &&
            <HomeVideoLib dataVideo={dataVideo} />
         }
         {dataImage?.data?.length > 0 &&
            <HomeImageLib dataImage={dataImage} />
         }
      </div>
   )
}

export default Home