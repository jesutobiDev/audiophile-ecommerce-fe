import React from "react";

interface InputProps {
  type: string;
  label: string;
  value: string;
  name: string;
  placeholder?: string;
  error?: string|null;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled = false,
  onChange,
  className = '',
}) => {
  return (
    <div className={`flex flex-col space-y-2 w-full lg:min-w-1/2 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className={`text-sm text-black font-semibold`}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className={`p-3 border-[1.35px] rounded-lg outline-none transition duration-200 ease-in-out placeholder:font-semibold placeholder:text-sm ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-primary"
        }`}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
