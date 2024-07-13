# Simple Calculator

A simple, user-friendly calculator application built with React. This project demonstrates the use of `useReducer` for state management and component-based architecture.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Clear all input (AC) and delete the last digit (DEL) functions.
- Supports decimal numbers.
- Automatically limits the number of digits for operands and results to ensure usability.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/simple-calculator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd simple-calculator
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the calculator in action.

## Project Structure

simple-calculator/
├── public/
│ ├── index.html
├── src/
│ ├── components/
│ │ ├── DigitButton.js
│ │ ├── OperationButton.js
│ ├── styles/
│ │ ├── styles.css
│ ├── App.js
│ ├── index.js
├── package.json
├── README.md
