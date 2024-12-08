import { GripVertical } from 'lucide-react';
import React from 'react';

export const DragHandle = ({ attributes, listeners }) => {
  return (
    <div {...attributes} {...listeners}>
      <GripVertical className="w-[15px] h-[15px]" />
    </div>
  );
};
