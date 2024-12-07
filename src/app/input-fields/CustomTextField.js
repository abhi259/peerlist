import React, { useState } from 'react';
import { GripVertical, ChevronDown, AlignLeft } from 'lucide-react';
import { previewState } from '@/app/utils/utils';

export const CustomTextField = ({
  id,
  fieldType,
  fieldState,
  setFieldState,
}) => {
  const handleTitleChange = (e) => {};
  const handleHelpTextChange = (e) => {};

  return (
    <div className=" flex flex-col gap-2 w-[580px] min-h-[100px] border border-gray-200 rounded-2xl p-4  ">
      <div className=" flex justify-between items-center  ">
        <div>
          <div className="flex flex-col w-full ">
            <input
              className="focus:outline-none text-[14px] font-semibold "
              placeholder="Write a question"
              onChange={handleTitleChange}
            />
            <input
              className="focus:outline-none text-[12px] font-semibold  min-w-[400px] "
              placeholder="Write a help text or caption (leave empty if not needed)."
              onChange={handleHelpTextChange}
            />
          </div>
        </div>

        <div className="flex items-center gap-2  ">
          <div className="flex">
            <AlignLeft className="w-[15px] h-[15px] " />
            <ChevronDown className="w-[15px] h-[15px] " />
          </div>
          <GripVertical className="w-[15px] h-[15px] " />
        </div>
      </div>

      <input
        className="w-full h-[32px] border border-gray-200 rounded-[8px] bg-gray-100 px-4 focus:outline-none focus:border-gray-700 "
        type="text"
        disabled
      />
    </div>
  );
};
