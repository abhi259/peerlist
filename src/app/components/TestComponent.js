import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';

// Drag Handle Component
const DragHandle = ({ ...props }) => (
  <div
    {...props}
    className="cursor-grab active:cursor-grabbing p-1 hover:bg-gray-100 rounded mr-3"
  >
    <GripVertical className="text-gray-400" size={20} />
  </div>
);

// Sortable Item Component
const SortableItem = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
      renderItem: ({ dragHandleProps }) => <DragHandle {...dragHandleProps} />,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white p-4 mb-2 rounded shadow border border-gray-200 hover:bg-gray-50 flex items-center"
    >
      <div className="select-none"> {id}</div>
      <DragHandle {...attributes} {...listeners} />
    </div>
  );
};

// Main Component
const DraggableList = () => {
  const [items, setItems] = useState([
    'Component 1',
    'Component 2',
    'Component 3',
    'Component 4',
    'Component 5',
  ]);

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
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-700">
        Draggable Components List
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Use the grip handle to drag and reorder items
      </p>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <div className="space-y-2">
            {items.map((id) => (
              <SortableItem key={id} id={id} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default DraggableList;
