'use client';

import { ArrowUpRight } from 'lucide-react';
import { useInputFieldStore } from '@/app/zustand-store/input-field-store';

export const Header = () => {
  const { inputFieldDataState, formTitle, setFormTitle } = useInputFieldStore();

  const isActive = inputFieldDataState.length > 0;

  const handleFormTitle = (event) => {
    const formTitle = event.target.value;
    setFormTitle(formTitle);
  };
  const handleClick = () => {};

  return (
    <div className="h-[56px] border border-gray-300 w-full flex justify-between items-center p-4 ">
      <input
        onChange={handleFormTitle}
        className="focus:outline-none "
        placeholder="Untitled form"
        value={formTitle}
      />
      <button
        onClick={handleClick}
        disabled={isActive}
        className={`flex  justify-center items-center  gap-1 border  px-3 p-1 rounded-2xl text-[14px]  ${isActive ? '  text-gray-700 border-gray-400 hover:scale-125 transition' : 'text-gray-400 border-gray-200'}  `}
      >
        <p>Preview</p>
        <ArrowUpRight size={16} />
      </button>
    </div>
  );
};
