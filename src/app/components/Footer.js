'use client';

import { Check, SquarePen, Trash2 } from 'lucide-react';
import {
  useInputFieldStore,
  usePublishedStore,
  useSaveAsDraftStore,
} from '@/zustand-store/input-field-store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortUUID from 'short-uuid';
import { validateAllForms } from '@/utils/validateAllForms';

export const Footer = () => {
  const {
    inputFieldDataState,
    setInputFieldDataState,
    formTitle,
    setFormTitle,
  } = useInputFieldStore();
  const { saveAsDraftState, setSaveAsDraftState } = useSaveAsDraftStore();
  const { publishedForms, setPublishedForms } = usePublishedStore();

  const handleSaveAsDraft = () => {
    setSaveAsDraftState({
      formTitle: formTitle,
      formData: inputFieldDataState,
    });
  };

  const handlePublishForm = () => {
    const validate = validateAllForms({
      state: inputFieldDataState,
      setState: setInputFieldDataState,
    });

    if (!validate) {
      toast.error('Please fill out the form');
      return;
    }
    const uniqueID = shortUUID.generate();
    const newPublishedForm = { [uniqueID]: saveAsDraftState };

    handleSaveAsDraft();
    setPublishedForms({ ...publishedForms, ...newPublishedForm });
    toast.info('Published');

    setInputFieldDataState([]);
    setFormTitle('');
  };

  const handleReset = () => {
    setInputFieldDataState([]);
    setFormTitle('');
    setSaveAsDraftState([]);
  };

  return (
    <div className="h-[64px] border-t border-gray-300 w-full flex justify-between items-center p-4   ">
      <div className="flex gap-2">
        <button
          onClick={() => {
            handleSaveAsDraft();
            toast.info('Saved as draft');
          }}
          className="flex gap-1 border border-gray-200 px-3 p-1 rounded-2xl text-[14px] text-gray-400 justify-center items-center hover:text-gray-800 hover:border-gray-300 hover:bg-gray-300 hover:scale-110 transition "
        >
          <SquarePen size={16} />
          <p>Save as Draft</p>
        </button>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => {
            handleReset();
          }}
          className="flex gap-1 border border-gray-200 px-3 p-1 rounded-2xl text-[14px] text-gray-400 justify-center items-center hover:text-gray-800 hover:border-gray-300 hover:bg-gray-300 hover:scale-110 transition "
        >
          <Trash2 size={16} />
          <p>Reset</p>
        </button>
        <button
          onClick={handlePublishForm}
          className="flex gap-1 bg-green-700  px-3 p-1 rounded-2xl text-[14px] text-gray-100 justify-center items-center hover:border-gray-300 hover:bg-green-600 hover:scale-110 transition  "
        >
          <Check size={16} />
          <p>Publish</p>
        </button>
      </div>
    </div>
  );
};
