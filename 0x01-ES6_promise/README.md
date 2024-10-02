# 0x01. ES6 Promises

This repository contains a series of JavaScript tasks focused on handling promises, error handling, and asynchronous programming. The tasks demonstrate various aspects of JavaScript's Promise API and async/await functionality.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Tasks Overview](#tasks-overview)
  - [Task 0: Promise](#task-0-promise)
  - [Task 1: Full Response from API](#task-1-full-response-from-api)
  - [Task 2: Handle Response from API](#task-2-handle-response-from-api)
  - [Task 3: Profile Signup](#task-3-profile-signup)
  - [Task 4: User Promise](#task-4-user-promise)
  - [Task 5: Photo Reject](#task-5-photo-reject)
  - [Task 6: Handle Profile Signup](#task-6-handle-profile-signup)
  - [Task 7: Load Balancer](#task-7-load-balancer)
  - [Task 8: Divide Function](#task-8-divide-function)
  - [Task 9: Guardrail](#task-9-guardrail)
  - [Task 10: Async Upload User](#task-10-async-upload-user)

## Requirements

- Node.js (version 14 or higher)
- npm (Node package manager)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/MBajily/alx-backend-javascript
   cd javascript-promise-tasks
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To run a specific task, use the following command:

```bash
npm run dev <task-name>
```

Replace `<task-name>` with the name of the main file corresponding to the task.

## Tasks Overview

### Task 0: Promise

- **File**: `0-promise.js`
- **Description**: Return a Promise using the function prototype `getResponseFromAPI()`.
- **Example**:
  ```javascript
  const response = getResponseFromAPI();
  console.log(response instanceof Promise); // true
  ```

### Task 1: Full Response from API

- **File**: `1-promise.js`
- **Description**: Create a function `getFullResponseFromAPI(success)` that resolves or rejects a promise based on the boolean input.
  
### Task 2: Handle Response from API

- **File**: `2-then.js`
- **Description**: Implement `handleResponseFromAPI(promise)` to handle promise resolutions and log appropriate messages.

### Task 3: Profile Signup

- **File**: `3-all.js`
- **Description**: Use `uploadPhoto` and `createUser` to log user profile details after resolving promises.

### Task 4: User Promise

- **File**: `4-user-promise.js`
- **Description**: Create a resolved promise returning user details based on given first name and last name.

### Task 5: Photo Reject

- **File**: `5-photo-reject.js`
- **Description**: Create a function `uploadPhoto(filename)` that rejects a promise with an error if the filename cannot be processed.

### Task 6: Handle Profile Signup

- **File**: `6-final-user.js`
- **Description**: Combine `signUpUser` and `uploadPhoto` to handle user signup and photo upload, returning their statuses.

### Task 7: Load Balancer

- **File**: `7-load_balancer.js`
- **Description**: Implement `loadBalancer(chinaDownload, USDownload)` to return the result of the first resolved promise.

### Task 8: Divide Function

- **File**: `8-try.js`
- **Description**: Create `divideFunction(numerator, denominator)` that divides two numbers or throws an error for division by zero.

### Task 9: Guardrail

- **File**: `9-try.js`
- **Description**: Implement `guardrail(mathFunction)` that executes a math function and handles its return or error messages.

### Task 10: Async Upload User

- **File**: `100-await.js`
- **Description**: Create an async function `asyncUploadUser()` that calls `uploadPhoto` and `signUpUser`, returning their results.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

