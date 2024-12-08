import { Check, SquarePen } from 'lucide-react';

export const Footer = () => {
  return (
    <div className="h-[64px] border border-gray-300 w-full flex justify-between items-center p-4 ">
      <button className="flex gap-1 border border-gray-200 px-3 p-1 rounded-2xl text-[14px] text-gray-400 justify-center items-center hover:text-gray-800 hover:border-gray-300 hover:bg-gray-300 hover:scale-125 transition ">
        <SquarePen size={16} />
        <p>Save as Draft</p>
      </button>
      <button
        disabled
        className="flex gap-1 bg-green-700  px-3 p-1 rounded-2xl text-[14px] text-gray-100 justify-center items-center hover:border-gray-300 hover:bg-green-600 hover:scale-125 transition  "
      >
        <Check size={16} />
        <p>Publish</p>
      </button>
    </div>
  );
};
