"use client"
import React from "react"
import { convertDate, getFileType } from "@/utils"
import DetailHeader from "../detail/DetailHeader"

const BadgesReportDetail = ({ dataDetail }) => {
  const typeName = getFileType(dataDetail?.url)

  return (
    <div className="w-[65%] max-lg:w-[100%]">
      <DetailHeader dataDetail={dataDetail} />
      <h1 className="text-[#008DCE] text-[22px] font-bold mt-[20px]">
        {dataDetail?.title}
      </h1>
      <p className="text-sm text-gray-400 italic mt-1">
        Cập nhật lần cuối: {convertDate(dataDetail?.date_start)}
      </p>
      <div className="wrap-doc mt-[20px] flex justify-center">
        {typeName === 'image' &&
          <img  // eslint-disable-line
            src={dataDetail?.url}
            alt="image detail"
            style={{ borderRadius: 7, objectFit: 'contain', boxShadow: '0 0 1px 1px rgb(0 0 50 / 5%)' }}
          />
        }
        {typeName === 'document' &&
          <iframe
            src={`//view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(dataDetail?.url)}`}
            title="Embedded Document"
            className="ead-iframe"
            style={{
              width: "100%",
              height: "100vh",
              maxHeight: '1000px'
            }}
          />
        }
      </div>
    </div>
  )
}

export default BadgesReportDetail
