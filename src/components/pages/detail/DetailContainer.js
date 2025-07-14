"use client"
import DetailHeader from "./DetailHeader"
import DetailMain from "./DetailMain"

const DetailContainer = ({ dataDetail }) => {
  return (
    <div className="w-[65%] max-lg:w-[100%]">
      <DetailHeader dataDetail={dataDetail} />
      <DetailMain dataDetail={dataDetail} />
    </div>
  )
}

export default DetailContainer
