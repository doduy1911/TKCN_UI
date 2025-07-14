import React from "react"
import { useData } from "@/hook/useData"
import { getFileType } from "@/utils"

const TongQuan = async () => {
  const dataTongQuan = await useData("posts", 1)

  return (
    <section className="container">
      <div className="w-full">
        {dataTongQuan?.data?.length > 0 &&
          dataTongQuan?.data?.map((item, index) =>
            index < 1 &&
            <div key={index}>
              {getFileType(item?.url) === 'document' &&
                <iframe
                  src={`//view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(item?.url)}`}
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
          )}
      </div>
    </section>
  )
}

export default TongQuan