import React, { useState } from 'react';
import { AlignLeft, ChevronDown, Trash2 } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DragHandle } from '@/app/utils/common/DragHandle';
import { FIELDTYPE } from '@/app/utils/enums';
import { DropDown } from '@/app/utils/common/DropDown';
import { CustomInputField } from '@/app/components/CustomInputField';
import Image from 'next/image';
import { useInputFieldStore } from '@/app/zustand-store/input-field-store';

export const CustomTextField = ({ id, fieldData, index }) => {
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

  const handleDelete = () => {
    const tempState = inputFieldDataState;
    tempState.splice(index, 1);
    setInputFieldDataState(tempState);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex m-auto gap-2 max-w-[600px]"
    >
      <div className=" flex flex-col gap-2 grow w-full min-h-[100px] bg-white border border-gray-200 rounded-2xl p-4  ">
        <div className=" flex justify-between items-center  ">
          <div className="flex flex-col w-full ">
            <input
              className="focus:outline-none text-[14px] font-semibold "
              placeholder="Write a question"
              onChange={handleTitleChange}
            />
            <input
              className="focus:outline-none text-[12px] font-semibold  placeholder:whitespace-nowrap placeholder:overflow-hidden placeholder:block placeholder:text-ellipsis"
              placeholder="Write a help text or caption (leave empty if not needed)."
              onChange={handleHelpTextChange}
            />
          </div>

          <div className="flex items-center gap-3 ">
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
      <div
        onClick={handleDelete}
        className="flex justify-center items-center text-gray-400 hover:text-gray-700 hover:bg-gray-200 rounded-2xl w-10"
      >
        <Trash2 />
      </div>
    </div>
  );
};
