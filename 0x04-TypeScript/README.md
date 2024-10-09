# TypeScript Learning Project

## Description
This project contains a series of TypeScript exercises that cover fundamental to advanced concepts in TypeScript. The exercises include working with interfaces, classes, ambient namespaces, and advanced types.

## Project Structure
```
.
├── task_0/
│   ├── js/
│   │   └── main.ts
│   ├── package.json
│   ├── .eslintrc.js
│   ├── tsconfig.json
│   └── webpack.config.js
├── task_1/
│   ├── js/
│   │   └── main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
├── task_2/
│   ├── js/
│   │   └── main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
├── task_3/
│   ├── js/
│   │   ├── crud.d.ts
│   │   ├── crud.js
│   │   ├── interface.ts
│   │   └── main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
├── task_4/
│   ├── js/
│   │   ├── subjects/
│   │   │   ├── Cpp.ts
│   │   │   ├── Java.ts
│   │   │   ├── React.ts
│   │   │   ├── Subject.ts
│   │   │   └── Teacher.ts
│   │   └── main.ts
│   ├── package.json
│   └── tsconfig.json
└── task_5/
    ├── js/
    │   └── main.ts
    ├── package.json
    ├── tsconfig.json
    └── webpack.config.js
```

## Tasks

### Task 0: Creating an Interface for a Student
- Create an interface `Student` with specific attributes
- Create and work with an array of students
- Render a table using vanilla JavaScript

### Task 1: Building Interfaces and Classes
- Create a `Teacher` interface
- Work with class inheritance
- Implement a `printTeacher` function
- Create a `StudentClass`

### Task 2: Advanced Types
- Create `Director` and `Teacher` interfaces
- Implement classes with interface requirements
- Create type-specific functions
- Work with string literal types

### Task 3: Ambient Namespaces
- Create interfaces and types
- Work with ambient module declarations
- Implement CRUD operations
- Use triple-slash directives

### Task 4: Namespaces & Declaration Merging
- Create and work with namespaces
- Implement declaration merging
- Create subject-specific classes
- Work with teacher interfaces

### Task 5: Brand Convention & Nominal Typing
- Create branded interfaces
- Implement functions with nominal typing
- Work with credits systems

## Setup and Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Navigate to the task directory:
```bash
cd task_[number]
```

3. Install dependencies:
```bash
npm install
```

4. Build the project:
```bash
npm run build
```

5. For development with webpack dev server:
```bash
npm run start-dev
```

## Requirements
- Node.js (v12 or higher recommended)
- npm (v6 or higher)
- TypeScript knowledge
- Basic understanding of webpack

## Configuration Files

### TypeScript Configuration (tsconfig.json)
Basic configuration includes:
- Source map support
- Strict type checking
- ES6 module support
- DOM type definitions

### Webpack Configuration (webpack.config.js)
Includes:
- TypeScript loader configuration
- Development server setup
- Source map support
- HTML plugin configuration

### ESLint Configuration (.eslintrc.js)
Implements:
- TypeScript ESLint parser
- Recommended TypeScript ESLint rules
- Custom rule configurations

## Running Tests
```bash
npm test
```

## Building for Production
```bash
npm run build
```

## Author
Mohammed Elgaily

## License
ISC
