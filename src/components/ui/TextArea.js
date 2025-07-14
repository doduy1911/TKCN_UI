import React, { forwardRef } from 'react'

const TextArea = forwardRef(({ label, placeholder, height, ...rest }, ref) => {
  return (
    <div>
      <label className="text-[#0752A6] dark:text-[#fff] block text-[16px] font-medium leading-6 font-semibold mb-1">
        {label}
      </label>
      <textarea
        {...rest}
        ref={ref}
        className={`text-[#000] block w-full rounded-md border-0 py-2 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0 sm:text-sm sm:leading-6 dark:text-[#fff] h-full ${height || 'h-auto'}`}
        placeholder={placeholder}
      />
    </div>
  )
})
TextArea.displayName = "TextArea"
export default TextArea
