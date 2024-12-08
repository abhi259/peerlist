'use client';

import { Check, SquarePen } from 'lucide-react';
import {
  useInputFieldStore,
  usePublishedStore,
  useSaveAsDraftStore,
} from '@/app/zustand-store/input-field-store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortUUID from 'short-uuid';

export const Footer = () => {
  const { inputFieldDataState, formTitle } = useInputFieldStore();
  const { saveAsDraftState, setSaveAsDraftState } = useSaveAsDraftStore();
  const { publishedForms, setPublishedForms } = usePublishedStore();

  const handleSaveAsDraft = () => {
    setSaveAsDraftState({
      formTitle: formTitle,
      formData: inputFieldDataState,
    });
  };

  const handlePublishForm = () => {
    const uniqueID = shortUUID.generate();
    const newPublishedForm = { [uniqueID]: saveAsDraftState };
    handleSaveAsDraft();
    setPublishedForms({ ...publishedForms, ...newPublishedForm });
  };

  return (
    <div className="h-[64px] border border-gray-300 w-full flex justify-between items-center p-4 ">
      <button
        onClick={() => {
          handleSaveAsDraft();
          toast.info('Saved as draft');
        }}
        className="flex gap-1 border border-gray-200 px-3 p-1 rounded-2xl text-[14px] text-gray-400 justify-center items-center hover:text-gray-800 hover:border-gray-300 hover:bg-gray-300 hover:scale-125 transition "
      >
        <SquarePen size={16} />
        <p>Save as Draft</p>
      </button>
      <button
        onClick={() => {
          handlePublishForm();
          toast.info('Published');
        }}
        className="flex gap-1 bg-green-700  px-3 p-1 rounded-2xl text-[14px] text-gray-100 justify-center items-center hover:border-gray-300 hover:bg-green-600 hover:scale-125 transition  "
      >
        <Check size={16} />
        <p>Publish</p>
      </button>
    </div>
  );
};
