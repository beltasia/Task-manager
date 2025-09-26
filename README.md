# TaskManager

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
# Task Manager (Angular Startup)

This project is a simple Task Manager web application built with Angular. It is designed as a starting point for learning Angular concepts, including standalone components, modern Angular features, and basic state management. The UI is styled with a modern dashboard look and supports adding and deleting tasks, with persistence using localStorage (browser only).

## Features

- Add new tasks
- Delete existing tasks
- Tasks are saved in your browser's localStorage
- Responsive, modern dashboard UI
- Built with Angular standalone components (no NgModules)
- SSR (Server-Side Rendering) compatible (guards for browser-only APIs)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher recommended)

### Installation

1. Clone this repository:
	```sh
	git clone https://github.com/your-username/your-repo-name.git
	cd task-manager
	```
2. Install dependencies:
	```sh
	npm install
	```

### Running the App

To start the development server:
```sh
npm run start
```

The app will be available at `http://localhost:4200` (or the port shown in your terminal).

### Building for Production
```sh
npm run build
```

### SSR (Server-Side Rendering)
This project is set up for SSR. To run the server-rendered version:
```sh
npm run build:ssr
npm run serve:ssr
```

## Project Structure

- `src/app/task.component.ts` — Main task dashboard component (standalone)
- `src/app/task.component.html` — Task dashboard UI
- `src/app/task.component.css` — Dashboard styles
- `src/app/app.component.ts` — Root Angular component
- `src/main.ts` — Client bootstrap
- `src/main.server.ts` — Server bootstrap (SSR)

## Notes
- This project is just a startup for learning Angular. It is intentionally simple and meant for experimentation and practice.
- The app uses localStorage, so tasks persist only in your browser and are not shared across devices.
- For SSR, all browser-only code is guarded to prevent errors.

## Contributing
Feel free to fork this repo and experiment! Suggestions and pull requests are welcome for learning purposes.

## License
MIT License
