'use client';
import { CustomTextField } from '@/app/components/CustomTextField';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function PublishedForm() {
  const params = useParams();
  const formKey = params?.slug || '';

  const [formData, setFormData] = useState({});

  useEffect(() => {
    const publishedData = localStorage.getItem('published-storage');
    const parsedData = JSON.parse(publishedData);
    const tempPublishedData = parsedData?.state?.publishedForms;

    if (tempPublishedData) {
      setFormData(tempPublishedData[formKey]);
    }
    console.log(tempPublishedData[formKey]);
  }, []);

  return (
    <div className="flex flex-col  w-full max-w-[600px]  m-auto border min-h-screen">
      <div className="h-[56px] border-b border-gray-300 w-full flex justify-between items-center p-4  ">
        <p>{formData?.formTitle || 'Untitled Form'}</p>
        <div className="flex flex-col items-end gap-1">
          <p className="text-[14px]  ">Form completeness — 80%</p>
          <div className="w-[300px] bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{ width: `${80}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className=" p-4  space-y-2  grow ">
        {formData?.formData?.map((item, index) => (
          <CustomTextField
            key={item.text + '-' + index}
            fieldData={item}
            id={item}
            index={index}
            preview={true}
          />
        ))}
      </div>
      <div className="px-4 py-4 md:px-6 w-full border-t border-gray-300">
        <div className="flex justify-end m-auto ">
          <button className="bg-green-600 border border-green-900 text-white rounded-xl p-1 px-3 text-[14px] ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
