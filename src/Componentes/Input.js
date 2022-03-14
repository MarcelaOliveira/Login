import React from "react";

export default function Input({
  label,
  type,
  className,
  name,
  onChange,
  placeholder,
  value,
}) {
  return (
    <>
      <label className="form-label">{label}</label>
      <input
        type={type}
        className={`Class-global-input ${className}`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
