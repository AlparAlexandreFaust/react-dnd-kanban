# Kanban Board with React and React DnD

This project is a simple Kanban board implemented using React, React DnD, and Tailwind CSS. It allows users to drag and drop cards between columns and rearrange them within the same column.

## Features

- Drag and drop functionality for cards using React DnD.
- Move cards between different columns.
- Reorganize cards within the same column.
- Responsive design using Tailwind CSS.

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/)

## Getting Started

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/alexandrebfaust/react-dnd-kanban.git
cd react-dnd-kanban
```

### 2. Install Dependencies

After navigating into the project folder, install the project dependencies:

```bash
# If you are using npm
npm install

# Or, if you prefer yarn
yarn install
```

### 3. Start the Development Server

Once the dependencies are installed, start the development server:

```bash
# If you are using npm
npm start

# Or, if you prefer yarn
yarn start
```

The project should now be running locally. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

The main components of the project are:

- `src/Kanban.js`: The main Kanban board component that renders columns and manages state.
- `src/Column.js`: The component that represents each column, allowing cards to be dropped into it.
- `src/Card.js`: The draggable card component.
- `src/ItemTypes.js`: Defines constants for React DnD item types.
- `src/index.js`: The entry point of the application.

## Customization

You can easily extend or customize this Kanban board by adding more columns, cards, or features like editing card content, adding new cards, or deleting them.

To add a new column or card, modify the `initialData` object in the `Kanban.js` file:

```js
const initialData = {
  columns: {
    'column-1': { id: 'column-1', title: 'To Do', cardIds: ['card-1', 'card-2'] },
    // Add your new column here
  },
  cards: {
    'card-1': { id: 'card-1', content: 'First task' },
    // Add your new card here
  },
  columnOrder: ['column-1', 'column-2'], // Update this array with your new column ID
};
```

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React DnD**: Library for drag-and-drop interactions in React.
- **Tailwind CSS**: A utility-first CSS framework for styling.

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.