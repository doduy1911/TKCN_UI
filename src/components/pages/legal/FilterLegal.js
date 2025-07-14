"use client"

import SelectOption from "@/components/ui/SelectOption"
import TextInput from "@/components/ui/TextInput"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import ListTable from "./ListTable"

const FilterLegal = ({ dataLegal, dataCoQuanBanHanh, dataLinhVuc }) => {
  const [isDisabled, setisDisabled] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  const defaultValues = {
    soHieu: '',
    coQuanBanHanh: '',
    trichYeu: '',
    linhVuc: '',
  }
  const { control, handleSubmit, reset, watch } = useForm({ defaultValues })
  const watchedFields = watch(['soHieu', 'coQuanBanHanh', 'trichYeu', 'linhVuc'])
  useEffect(() => {
    let isDisabled = true
    watchedFields.forEach(value => {
      if (value !== '' && value !== null) {
        isDisabled = false
      }
    })
    setisDisabled(isDisabled)
  }, [watchedFields])
  const onSubmit = (data) => {
    if (data.soHieu === '' && data.coQuanBanHanh === '' && data.trichYeu === '' && data.linhVuc === '') {
      router.push(`${pathname}`)
    } else {
      const soHieuParam = (data.soHieu && data.soHieu !== null) ? `name=${data.soHieu}` : ''
      const coQuanBanHanhParam = (data.coQuanBanHanh && data.coQuanBanHanh !== null) ? `agency_issue=${data.coQuanBanHanh}` : ''
      const trichYeuParam = (data.trichYeu && data.trichYeu !== null) ? `content=${data.trichYeu}` : ''
      const linhVucParam = (data.linhVuc && data.linhVuc !== null) ? `linh_vuc=${data.linhVuc}` : ''

      const searchQuery = [soHieuParam, coQuanBanHanhParam, trichYeuParam, linhVucParam].filter(param => param !== '').join('&')
      router.push(`${pathname}?${searchQuery}`)
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-[1.5px] border-solid border-[#0AA4E2] py-[30px] p-[25px] h-[fit-content] md:h-[fit-content] rounded-[5px] dark:border-[#7a8f93]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] h-[fit-content] md:h-[fit-content] dark:border-[#7a8f93] rounded-[5px]">
          <Controller
            name="soHieu"
            control={control}
            defaultValues
            render={({ field }) =>
              <TextInput
                {...field}
                label="Số/ký hiệu"
                placeholder="Nhập Số/ký hiệu"
              />
            }
          />
          {(dataCoQuanBanHanh && dataCoQuanBanHanh?.data?.length > 0) && <Controller
            name="coQuanBanHanh"
            control={control}
            defaultValues
            render={({ field }) =>
              <SelectOption
                {...field}
                label="Cơ quan ban hành"
                data={dataCoQuanBanHanh}
              />
            }
          />}

          <Controller
            name="trichYeu"
            control={control}
            defaultValues
            render={({ field }) =>
              <TextInput
                {...field}
                label="Trích yếu"
                placeholder="Nhập nội dung trích yếu"
              />
            }
          />
          {dataLinhVuc && dataLinhVuc?.data?.length > 0 && <Controller
            name="linhVuc"
            control={control}
            defaultValues
            render={({ field }) =>
              <SelectOption
                {...field}
                label="Lĩnh vực"
                data={dataLinhVuc}
              />
            }
          />}
        </div>
        <div className="flex justify-center mt-[25px] text-center h-[fit-content] md:h-[fit-content] dark:border-[#7a8f93] gap-5">
          <button className={`flex w-[120px] rounded-[5px] justify-center content-center text-white py-[7px] ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0AA4E2] hover:bg-blue-800 active:bg-blue-900 focus:outline-none focus:border-[#00456e] focus:ring focus:ring-[#00456e] focus:ring-opacity-50'}`}>Tìm kiếm</button>
          <button
            className={`flex w-[120px] rounded-[5px] justify-center content-center text-white py-[7px] ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FD0000] hover:bg-[#FD0000] active:bg-[#00456e] focus:outline-none focus:border-[#FD0000] focus:ring focus:ring-[#00456e] focus:ring-opacity-50'}`}
            onClick={(e) => {
              e.preventDefault()
              reset()
              router.push(`${pathname}`)
            }}
            disabled={isDisabled}
          >
            Đăt lại
          </button>
        </div>
      </form >
      <ListTable dataLegal={dataLegal} />
    </>
  )
}

export default FilterLegal