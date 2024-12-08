'use client';

import { DraggableFields } from '@/app/components/DraggableFields';
import { useState } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-00">
      {/*<DraggableList />*/}
      {/*<CustomTextField />*/}

      <DraggableFields />
    </div>
  );
}
