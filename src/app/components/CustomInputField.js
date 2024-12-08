import React from 'react';
import { FIELDTYPE } from '@/app/utils/enums';
import { Plus } from 'lucide-react';

export const CustomInputField = ({ fieldType }) => {
  if (fieldType === FIELDTYPE.SHORT)
    return (
      <input
        className="w-full h-[32px] border border-gray-200 rounded-[8px] bg-gray-100 px-2 focus:outline-none focus:border-gray-700 "
        type="text"
        disabled
      />
    );

  if (fieldType === FIELDTYPE.LONG)
    return (
      <input
        className="w-full h-[64px] border border-gray-200 rounded-[8px] bg-gray-100 px-2 focus:outline-none focus:border-gray-700 "
        type="text"
        disabled
      />
    );

  if (fieldType === FIELDTYPE.SINGLE)
    return (
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input type="radio" disabled />
          <input
            className="w-full h-[32px] border border-gray-200 rounded-[8px] bg-white px-2 focus:outline-none focus:border-gray-700 "
            type="text"
            disabled
          />
        </div>
        <div className="flex items-center gap-2">
          <input type="radio" disabled />
          <input
            className="w-full h-[32px] border border-gray-200 rounded-[8px] bg-white px-2 focus:outline-none focus:border-gray-700 "
            type="text"
            placeholder="Option 2"
            disabled
          />
          <Plus size={16} />
        </div>
      </div>
    );

  if (fieldType === FIELDTYPE.URL)
    return (
      <input
        className="w-full h-[32px] border border-gray-200 rounded-[8px] bg-gray-100 px-2 focus:outline-none focus:border-gray-700 "
        type="text"
        disabled
      />
    );

  if (fieldType === FIELDTYPE.DATE)
    return (
      <input
        className="w-full h-[64px] border border-gray-200 rounded-[8px] bg-gray-100 px-2 focus:outline-none focus:border-gray-700 "
        type="text"
        disabled
      />
    );
};
