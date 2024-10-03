import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './Column';

const initialData = {
  columns: {
    'column-1': { id: 'column-1', title: 'To Do', cardIds: ['card-1', 'card-2'] },
    'column-2': { id: 'column-2', title: 'In Progress', cardIds: ['card-3'] },
    'column-3': { id: 'column-3', title: 'Done', cardIds: [] },
  },
  cards: {
    'card-1': { id: 'card-1', content: 'First task' },
    'card-2': { id: 'card-2', content: 'Second task' },
    'card-3': { id: 'card-3', content: 'Third task' },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

const Kanban = () => {
  const [state, setState] = useState(initialData);

  const moveCard = (cardId, sourceColumnId, destinationColumnId, destinationIndex) => {
    const sourceColumn = state.columns[sourceColumnId];
    const destinationColumn = state.columns[destinationColumnId];

    // Remover o card da coluna de origem
    const newSourceCardIds = Array.from(sourceColumn.cardIds);
    newSourceCardIds.splice(newSourceCardIds.indexOf(cardId), 1);

    // Adicionar o card à coluna de destino
    const newDestinationCardIds = Array.from(destinationColumn.cardIds);
    newDestinationCardIds.splice(destinationIndex, 0, cardId);

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [sourceColumnId]: {
          ...sourceColumn,
          cardIds: newSourceCardIds,
        },
        [destinationColumnId]: {
          ...destinationColumn,
          cardIds: newDestinationCardIds,
        },
      },
    };

    setState(newState);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-row justify-center space-x-4">
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const cards = column.cardIds.map((cardId) => state.cards[cardId]);

          return (
            <Column
              key={column.id}
              column={column}
              cards={cards}
              moveCard={moveCard}
            />
          );
        })}
      </div>
    </DndProvider>
  );
};

export default Kanban;
