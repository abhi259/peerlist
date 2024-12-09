'use client';
import {
  useInputFieldStore,
  useSaveAsDraftStore,
} from '@/zustand-store/input-field-store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const PublishedForms = () => {
  const router = useRouter();

  const {
    inputFieldDataState,
    setInputFieldDataState,
    formTitle,
    setFormTitle,
  } = useInputFieldStore();
  const { saveAsDraftState, setSaveAsDraftState } = useSaveAsDraftStore();

  const [publishedData, setPublishedData] = useState({});

  useEffect(() => {
    const publishedData = localStorage.getItem('published-storage');
    const parsedData = JSON.parse(publishedData);
    const tempPublishedData = parsedData?.state?.publishedForms;

    if (tempPublishedData) {
      setPublishedData(tempPublishedData);
    }
  }, []);

  const handleClick = (param) => {
    router.push(`/published-forms/${param}`);
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center  min-h-screen ">
      <div className="border-2 border-gray-200 rounded-2xl px-4 py-10 flex flex-col gap-2 transition">
        {Object.keys(publishedData).length > 0 ? (
          Object.keys(publishedData).map((key, index) => {
            let title =
              publishedData[key]?.formTitle?.length > 0
                ? publishedData[key]?.formTitle
                : `Published Form ${index + 1}`;
            return (
              <div
                key={key}
                className="hover:bg-gray-200 bg-gray-100 rounded-2xl px-4 py-2 cursor-pointer"
              >
                <button onClick={() => handleClick(key)}>{title}</button>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500">Waiting for data...</p>
        )}
      </div>
    </div>
  );
};
export default PublishedForms;
