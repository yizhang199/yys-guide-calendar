# Task Management System

This is a web application for managing personal tasks. It allows you to organize tasks based on their frequency and type, set start and due dates, and prioritize them.

## Features

- Create and manage one-time tasks
- Create and manage tasks that occur weekly
- Create and manage tasks that need to be done daily
- Categorize tasks as dungeon completion or shikigami development
- Dependencies between shikigami development tasks and dungeon completion tasks
- Set customizable start and due dates for tasks
- Manual modification of task start and due dates
- Display tasks that need to be completed today or immediately
- Visual distinction between tasks that can be started immediately and those that cannot
- Prioritize tasks based on their frequency and importance

## Tech Stack

- React.js
- JavaScript
- HTML
- CSS

## Project Structure

The project follows the following structure:

- src
  - components
  - TaskList
  - TaskItem
  - TaskForm
  - ...
- pages
  - HomePage
  - TaskPage
  - ...
- services
  - TaskService
  - ...
- utils
  - DateUtils
  - ...
- styles
  - global.css
  - ...
- App.js
- index.js

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open the application in your browser at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Contributing

Contributions are welcome! If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
