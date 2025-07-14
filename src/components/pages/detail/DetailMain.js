"use client"
import React from "react"
import HTMLReactParser from "html-react-parser"
import style from "./detail.module.css"
import { convertDate, getFileType } from "@/utils"

const DetailMain = ({ dataDetail }) => {
   const typeName = getFileType(dataDetail?.url)

   return (
      <div className="w-full">
         <h1 className="text-[#008DCE] text-[26px] font-bold mt-[20px]">
            {dataDetail?.name}
         </h1>
         <p className="text-sm text-gray-400 italic mt-1 mb-1">
            Cập nhật lần cuối: {convertDate(dataDetail?.date_start)}
         </p>
         <div className="mb-[30px] w-[100%] mt-[20px] flex justify-center">
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
         <div className={style.content}>
            {HTMLReactParser(dataDetail?.content || "")}
         </div>
         <div className={style.source}>
            {dataDetail?.author_name && <p>{dataDetail?.author_name}</p>}
            {dataDetail?.article_source && <i>Nguồn bài viết: {dataDetail?.article_source}</i>}
         </div>
      </div>
   )
}

export default DetailMain

