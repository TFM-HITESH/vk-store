import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  showSubmit?: boolean;
}

const Input1: React.FC<InputProps> = ({ showSubmit, ...props }) => {
  return (
    <div className="flex items-center ">
      <input
        className="border bg-[#224f34] p-1.5 h-8 w-30"
        style={{ borderColor: "#A3F3BE" }}
        {...props}
      />
      {showSubmit && (
        <button
          type="submit"
          className="p-2 bg-[#CBC3E3] text-[#224F34] w-18 h-8 flex justify-center font-poppins text-sm "
        >
          SUBMIT
        </button>
      )}
    </div>
  );
};

export default Input1;