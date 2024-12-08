'use client';

import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CustomTextField } from '@/app/input-fields/CustomTextField';
import { Plus } from 'lucide-react';
import { DropDown } from '@/app/utils/common/DropDown';
import { useInputFieldStore } from '@/app/zustand-store/input-field-store';

export const DraggableFields = () => {
  const { inputFieldDataState, setInputFieldDataState } = useInputFieldStore();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = inputFieldDataState.indexOf(active.id);
      const newIndex = inputFieldDataState.indexOf(over.id);

      setInputFieldDataState(
        arrayMove(inputFieldDataState, oldIndex, newIndex)
      );
    }
  };

  const handleDropDownClick = (item) => {
    setInputFieldDataState([...inputFieldDataState, item]);
  };

  return (
    <div className="py-5">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={inputFieldDataState}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-2">
            {inputFieldDataState.map((item, index) => (
              <CustomTextField
                key={item.text + '-' + index}
                fieldData={item}
                id={item}
                index={index}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
      <div className="py-4 w-32  m-auto ">
        <DropDown
          icon={
            <div className="flex items-center gap-1 border border-gray-200 rounded-xl p-1 px-2 hover:bg-gray-200 cursor-pointer ">
              <Plus size={16} />
              <p className="text-[14px]">Add Question</p>
            </div>
          }
          handleInputClick={handleDropDownClick}
        />
      </div>
    </div>
  );
};
