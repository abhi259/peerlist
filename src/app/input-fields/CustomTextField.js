'use client';

import React, { useState } from 'react';
import { AlignLeft, ChevronDown } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DragHandle } from '@/app/utils/common/DragHandle';
import { FIELDTYPE } from '@/app/utils/enums';
import { DropDown } from '@/app/utils/common/DropDown';
import { CustomInputField } from '@/app/components/CustomInputField';
import Image from 'next/image';
import { useInputFieldStore } from '@/app/zustand-store/input-field-store';

export const CustomTextField = ({
  id,
  fieldData,
  index,
  fieldState,
  setFieldState,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    renderItem: ({ dragHandleProps }) => <DragHandle {...dragHandleProps} />,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    zIndex: isDragging ? 50 : 1,
    position: isDragging ? 'relative' : null,
  };

  const { inputFieldDataState, setInputFieldDataState } = useInputFieldStore();

  const handleTitleChange = (e) => {};
  const handleHelpTextChange = (e) => {};

  const handleInputClick = (item) => {
    const tempState = inputFieldDataState;
    tempState[index] = item;
    setInputFieldDataState(tempState);
    console.log(item);
  };

  return (
    <div ref={setNodeRef} style={style}>
      <div className=" flex flex-col gap-2 w-[580px] min-h-[100px] bg-white border border-gray-200 rounded-2xl p-4  ">
        <div className=" flex justify-between items-center ">
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
            <div className="flex items-center">
              <Image
                src={fieldData.icon}
                alt=""
                width={20}
                height={20}
                style={{ filter: 'grayscale(100%) brightness(0) invert(0.5)' }}
              />
              <DropDown
                icon={
                  <ChevronDown className="w-[15px] h-[15px] cursor-pointer z-10" />
                }
                handleInputClick={handleInputClick}
              />
            </div>
            <DragHandle attributes={attributes} listeners={listeners} />
          </div>
        </div>
        <CustomInputField fieldType={fieldData.fieldType} />
      </div>
    </div>
  );
};
