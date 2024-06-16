export const BasicTag = ({ label, className = "", props }) => {
  return (
    <div
      className={`px-1 py-1 bg-gray-300 rounded-[4px] text-white text-xs text-center cursor-pointer ${className}`}
      {...props}
    >
      {label}
    </div>
  );
};
