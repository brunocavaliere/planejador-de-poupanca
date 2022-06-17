import { useRef } from "react";
import NumberFormat from "react-number-format";

export const Fieldset = ({
  label,
  type,
  prefix,
  decimalScale,
  fixedDecimalScale,
  name,
  placeholder,
  text,
  ...props
}) => {
  const inputRef = useRef(null);

  return (
    <fieldset className="w-full">
      <label className="block mb-2.5 text-2xs font-medium leading-none text-gray-900">
        {label}
      </label>

      <NumberFormat
        className="w-full mb-1.5 px-5 pt-4 pb-3 text-gray-900 text-xs leading-none border border-gray-200 rounded outline-0"
        prefix={prefix}
        thousandSeparator="."
        decimalSeparator=","
        decimalScale={2}
        fixedDecimalScale={fixedDecimalScale}
        name={name}
        id={name}
        onBlur={props.onBlur}
        ref={inputRef}
        placeholder={placeholder}
      />

      <p className="text-5xs leading-normal text-gray-700">{text}</p>
    </fieldset>
  );
};
