'use client';

import DraggableList from '@/app/components/TestComponent';
import {
  LongAnswerField,
  NumberField,
  ShortAnswerField,
  SingleSelectField,
  UrlField,
} from '@/app/input-fields/InputFields';
import { CustomTextField } from '@/app/input-fields/CustomTextField';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-00">
      {/*<DraggableList />*/}
      <CustomTextField />
      {/*<ShortAnswerField />*/}
      {/*<LongAnswerField />*/}
      {/*<SingleSelectField />*/}
      {/*<NumberField />*/}
      {/*<UrlField />*/}
    </div>
  );
}
