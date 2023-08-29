export const BasicDropdown = ({
  value,
  onChange,
  dropdownItems,
  className = "",
  props,
}) => {
  return (
    <select
      className={`basic-select border border-gray-500 p-2 rounded-sm !max-w-[200px] text-ellipsis ${className}`}
      value={value}
      onChange={onChange}
      {...props}
    >
      {dropdownItems.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};
