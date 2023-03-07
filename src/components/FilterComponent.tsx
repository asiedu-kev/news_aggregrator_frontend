import React from "react";

export type FilterComponentProps = {
  selectAction: React.RefCallback<any>;
  data: any;
  defaultValue: string;
  placeholder: string;
};
export default function FilterComponent({
  selectAction,
  data,
  defaultValue,
  placeholder,
}: FilterComponentProps) {
  return (
    <div>
      <select
        placeholder={placeholder}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue={defaultValue}
        onChange={(value) => selectAction(value.target.value)}
      >
        {data.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name.replace(/_/g, " ")}
          </option>
        ))}
      </select>
    </div>
  );
}
