export const ValueItem = ({ color, title, subtitle, percent }) => {
  return (
    <div className="flex items-center w-full gap-4">
      <span className={`${color} w-2.5 h-2.5 flex-none rounded-sm`} />

      <div className="w-full">
        <p className="mb-2 text-xs text-gray-800 leading-none">{title}</p>

        <div className="flex justify-between">
          <p className="text-xs text-gray-400 font-medium leading-none">
            {subtitle}
          </p>
          <p className="text-xs text-gray-800 leading-none">{percent}</p>
        </div>
      </div>
    </div>
  );
};
