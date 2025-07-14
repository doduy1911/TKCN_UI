"use client"
import TextArea from '@/components/ui/TextArea'
import TextInput from '@/components/ui/TextInput'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

const defaultValues = {
  soHieu: '',
  hoTen: '',
  email: '',
  dienThoai: '',
  diaChi: '',
  gopY: '',
}

const ErrorMessage = ({ errors }) => (
  <>
    {errors?.type === "required" && <p className="text-red-500 dark:text-[#fff] text-[14px] mt-[10px]">⚠ Dữ liệu không được để trống! </p>}
    {errors?.type === "maxLength" && <p className="text-red-500 dark:text-[#fff] text-[14px] mt-[10px]">{errors?.message}</p>}
    {errors?.type === "minLength" && <p className="text-red-500 dark:text-[#fff] text-[14px] mt-[10px]">{errors?.message}</p>}
    {errors?.type === "pattern" && <p className="text-red-500 dark:text-[#fff] text-[14px] mt-[10px]">{errors?.message}</p>}
  </>
)

const renderTextInput = ({ name, label, placeholder, rules, control, errors }) => (
  <div className="flex flex-col mb-[20px]">
    <Controller
      name={name}
      control={control}
      rules={rules || { required: false }}
      render={({ field }) => (
        <TextInput {...field} label={label} placeholder={placeholder} />
      )}
    />
    {errors?.[name] && <ErrorMessage errors={errors?.[name]} />}
  </div>
)

const renderTextArea = ({ name, label, placeholder, height, rules, control, errors }) => (
  <>
    <Controller
      name={name}
      control={control}
      rules={rules || { required: false }}
      render={({ field }) => (
        <TextArea {...field} label={label} placeholder={placeholder} height={height} />
      )}
    />
    {errors[name] && <ErrorMessage errors={errors?.[name]} />}
  </>
)

const FeedBack = () => {
  const [isDisabled, setisDisabled] = useState(true)
  const { reset, control, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues })
  const watchedFields = watch(['soHieu', 'hoTen', 'email', 'dienThoai', 'diaChi', 'gopY'])

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
    alert("Tính năng đang phát triển. Vui lòng đợi bản cập nhật tiếp theo!")
  }

  return (
    <main className="container py-8">
      <div className="suggestion-header mb-[20px] flex justify-center text-[24px] font-[600] uppercase">
        <h1 className="text-[#008DCE]">Hòm thư góp ý</h1>
      </div>
      <div className="sugesstion-form m-auto max-[650px]:w-full w-3/4 rounded-[5px] border-[1px] border-solid border-[#ddd] p-[50px] dark:border-[#7a8f93]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between gap-[20px] max-[650px]:flex-col">
            <div className="w-1/2 max-[650px]:w-full">
              {renderTextInput({
                name: "soHieu",
                label: "Tiêu Đề (*)",
                placeholder: "Nhập vào tiêu đề thư",
                rules: {
                  required: true,
                  maxLength: {
                    value: 200,
                    message: "⚠ Tiêu đề không được quá 200 ký tự!"
                  },
                },
                control,
                errors,
              })}
              {renderTextInput({
                name: "hoTen",
                label: "Họ và Tên (*)",
                placeholder: "Nhập vào họ và tên",
                rules: {
                  required: true,
                  maxLength: {
                    value: 100,
                    message: "⚠ Họ Tên không được quá 100 ký tự!"
                  },
                },
                control,
                errors,
              })}
              {renderTextInput({
                name: "dienThoai",
                label: "Điện Thoại (*)",
                placeholder: "Nhập vào Số điện thoại",
                rules: {
                  required: true,
                  pattern: {
                    value: /^(0[1-9])+([0-9]{8,9})$/,
                    message: "⚠ Số điện thoại không hợp lệ!",
                  },
                },
                control,
                errors,
              })}
              {renderTextInput({
                name: "email",
                label: "Email",
                placeholder: "Nhập vào Email",
                rules: {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "⚠ Email không hợp lệ!",
                  },
                },
                control,
                errors,
              })}
              {renderTextInput({
                name: "diaChi",
                label: "Địa Chỉ (*)",
                placeholder: "Nhập vào địa chỉ liên hệ",
                rules: {
                  required: true,
                  maxLength: {
                    value: 200,
                    message: "⚠ Địa chỉ không được quá 200 ký tự!"
                  },
                },
                control,
                errors,
              })}
            </div>
            <div className="w-1/2 max-[650px]:w-full">
              {renderTextArea({
                name: "gopY",
                label: "Góp ý (*)",
                placeholder: "Nhập góp ý tại đây",
                height: "h-[300px] md:h-[394px]",
                rules: {
                  required: true,
                  minLength: {
                    value: 100,
                    message: "⚠ Góp ý cần ít nhất 100 ký tự!"
                  }
                },
                control,
                errors,
              })}
            </div>
          </div>
          <div className="flex justify-center mt-[25px] text-center h-[fit-content] md:h-[fit-content] dark:border-[#7a8f93] gap-5">
            <button className={`flex w-[120px] rounded-[5px] justify-center content-center text-white py-[7px] ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0AA4E2] hover:bg-blue-800 active:bg-blue-900 focus:outline-none focus:border-[#00456e] focus:ring focus:ring-[#00456e] focus:ring-opacity-50'}`}>Gửi góp ý</button>
            <button
              className={`flex w-[120px] rounded-[5px] justify-center content-center text-white py-[7px] ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FD0000] hover:bg-[#FD0000] active:bg-[#00456e] focus:outline-none focus:border-[#FD0000] focus:ring focus:ring-[#00456e] focus:ring-opacity-50'}`}
              onClick={(e) => {
                e.preventDefault()
                reset()
              }}
              disabled={isDisabled}
            >
              Đăt lại
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default FeedBack
