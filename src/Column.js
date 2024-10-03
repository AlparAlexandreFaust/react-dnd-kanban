import React from 'react';
import { useDrop } from 'react-dnd';
import Card from './Card';
import { ItemTypes } from './ItemTypes';

const Column = ({ column, cards, moveCard }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      const sourceColumnId = item.columnId;
      if (sourceColumnId !== column.id) {
        moveCard(item.id, sourceColumnId, column.id, cards.length);
      }
    },
  });

  return (
    <div
      ref={drop}
      className="bg-gray-200 p-4 w-64 min-h-[400px] rounded-md shadow-md flex flex-col space-y-4"
    >
      <h2 className="text-lg font-bold">{column.title}</h2>
      {cards.map((card, index) => (
        <Card key={card.id} card={card} columnId={column.id} index={index} />
      ))}
    </div>
  );
};

export default Column;
