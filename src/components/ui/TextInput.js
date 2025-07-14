import React from 'react';

const TextInput = React.forwardRef(({ label, placeholder, ...rest }, ref) => {
  return (
    <div>
      <label className="text-[#0752A6] dark:text-[#fff] block text-[16px] font-medium leading-6 font-semibold">{label}</label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type="text"
          ref={ref}
          className="text-[#000] block w-full rounded-md border-0 py-2 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0 sm:text-sm sm:leading-6 dark:text-[#fff]"
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  );
});

TextInput.displayName = "TextInput"
export default TextInput;
