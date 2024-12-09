'use client';

import { CustomTextField } from '@/app/components/CustomTextField';
import useDraftStorage from '@/utils/customHooks/useDraftStorage';
import {
  useInputFieldStore,
  useSaveAsDraftStore,
} from '@/zustand-store/input-field-store';

export default function Preview() {
  const {
    inputFieldDataState,
    setInputFieldDataState,
    formTitle,
    setFormTitle,
  } = useInputFieldStore();
  const { saveAsDraftState, setSaveAsDraftState } = useSaveAsDraftStore();

  useDraftStorage();

  const title = formTitle.length > 0 ? formTitle : 'Untitled Form';

  return (
    <div className=" w-full max-w-[600px] min-h-dvh  m-auto border ">
      <div className="h-[56px] border-b border-gray-300 w-full flex justify-between items-center p-4  ">
        <p>{title}</p>
        <div className="flex flex-col items-end gap-1">
          <p className="text-[14px]  ">Form completeness — 80%</p>
          <div className="w-[200px] md:w-[300px] bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{ width: `${80}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className=" p-4  space-y-2 ">
        {inputFieldDataState?.map((item, index) => (
          <CustomTextField
            key={item.text + '-' + index}
            fieldData={item}
            id={item}
            index={index}
            preview={true}
          />
        ))}
      </div>
      <div className="px-4 py-4 md:px-6 w-full ">
        <div className="flex justify-end m-auto">
          <button className="bg-green-600 border border-green-900 text-white rounded-xl p-1 px-3 text-[14px] ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
