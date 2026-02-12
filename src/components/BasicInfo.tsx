import React from "react";

const BasicInfo = ({
  value,
  text,
  className,
}: {
  value: number;
  text: string;
  className?: string;
}) => {
  return (
    <div className={`bg-gradient-to-br ${className} rounded-lg p-6`}>
      <h3 className="text-lg font-semibold !text-gray-700 mb-2">{text}</h3>
      <p className="text-xl sm:text-3xl font-bold">
        {value / 10} m
      </p>
    </div>
  );
};

export default BasicInfo;
