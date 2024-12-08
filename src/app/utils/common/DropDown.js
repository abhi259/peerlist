import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

import shortAnswerSvg from '../../../../public/assets/short_answer.svg';
import longAnswerSvg from '../../../../public/assets/long_answer.svg';
import singleSelectSvg from '../../../../public/assets/single_select.svg';
import urlSvg from '../../../../public/assets/url.svg';
import dateSvg from '../../../../public/assets/date.svg';
import { FIELDTYPE } from '@/app/utils/enums';

export const DropDown = ({ icon, handleInputClick }) => {
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const inputTypesData = [
    {
      icon: shortAnswerSvg,
      text: 'Short answer',
      fieldType: FIELDTYPE.SHORT,
      title: '',
      helpTitle: '',
    },
    {
      icon: longAnswerSvg,
      text: 'Long answer',
      fieldType: FIELDTYPE.LONG,
      title: '',
      helpTitle: '',
    },
    {
      icon: singleSelectSvg,
      text: 'Single select',
      fieldType: FIELDTYPE.SINGLE,
      title: '',
      helpTitle: '',
    },
    {
      icon: urlSvg,
      text: 'URL',
      fieldType: FIELDTYPE.URL,
      title: '',
      helpTitle: '',
    },
    {
      icon: dateSvg,
      text: 'Date',
      fieldType: FIELDTYPE.DATE,
      title: '',
      helpTitle: '',
    },
  ];

  const handleDropDownClick = (event) => {
    event.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative ">
      <div onClick={handleDropDownClick} ref={buttonRef}>
        {icon}
      </div>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full  mt-2 right-0 bg-white border border-gray-200 rounded-xl shadow-lg z-50 w-[300px] p-1 flex flex-col "
        >
          <div>
            <p className="p-2 text-[12px] bg-gray-50 rounded-xl text-gray-500 ">
              INPUT TYPES
            </p>
          </div>
          <ul>
            {inputTypesData.map((item, index) => (
              <li key={item.text + '-' + index}>
                <div
                  className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer "
                  onClick={() => {
                    handleInputClick(item);
                    setIsDropdownOpen(false);
                  }}
                >
                  <Image src={item.icon} alt="" />
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
