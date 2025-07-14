import React, { forwardRef } from 'react';

const SelectOption = forwardRef(({ data, label, value, onChange }, ref) => {
  return (
    <div>
      <label className="block text-[16px] font-medium leading-6 text-[#0752A6] dark:text-[#fff] font-semibold">{label}</label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <select
          ref={ref}
          value={value}
          onChange={onChange}
          className="block w-full rounded-md border-0 py-2 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0 sm:text-sm min-h-[40px] dark:text-[#fff]"
        >
          <option className='font-medium' value=" ">Tất cả</option>
          {data?.data?.map(val =>
            <option className='font-medium dark:text-[#fff]' key={val?.id} value={val?.id}>{val?.name}</option>
          )}
        </select>
      </div>
    </div>
  );
});

SelectOption.displayName = "SelectOption"
export default SelectOption;
