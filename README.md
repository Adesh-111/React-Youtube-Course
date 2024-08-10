
# [React Full Course for Free ⚛️ (2024)](https://youtu.be/CgkZ7MvWUAA?si=Atyj69cuti6I9RR-)

<img src="https://wakatime.com/badge/github/Adesh-111/React-Youtube-Course.svg" >

This repository contains resources and notes based on the "React Full Course for Free ⚛️ (2024)" video tutorial. This course provides a comprehensive introduction to React, a popular JavaScript library for building user interfaces.

## Table of Contents

1. [Introduction](#introduction)
2. [Setting Up the Development Environment](#setting-up-the-development-environment)
3. [Creating Components](#creating-components)
4. [Styling Components](#styling-components)
5. [Props and Data Flow](#props-and-data-flow)
6. [Conditional Rendering](#conditional-rendering)
7. [Rendering Lists with Keys](#rendering-lists-with-keys)
8. [Sorting and Filtering Arrays](#sorting-and-filtering-arrays)
9. [Reusable Components with Props](#reusable-components-with-props)
10. [Handling Click Events with useState](#handling-click-events-with-usestate)
11. [Stateful Components with Input Handling](#stateful-components-with-input-handling)
12. [Managing State with Updater Functions](#managing-state-with-updater-functions)
13. [Handling Arrays](#handling-arrays)
14. [Managing Objects](#managing-objects)
15. [Color Picker Component](#color-picker-component)
16. [ToDo List](#todo-list)
17. [useEffect Hook](#useeffect-hook)
18. [Digital Clock Component](#digital-clock-component)
19. [useContext Example](#usecontext-example)
20. [useRef Example](#useref-example)
21. [Stopwatch Component](#stopwatch-component)
22. [Conclusion](#conclusion)
23. [References](#references)

## Introduction

React is a JavaScript library used for building user interfaces in web applications. It emphasizes a component-based architecture, where each component is a self-contained section of reusable code. React utilizes JSX, a syntax extension that allows writing HTML-like code within JavaScript files. It operates with a virtual DOM, enhancing rendering performance by reducing unnecessary updates to the actual DOM.

To get started with React, you should have a basic understanding of JavaScript and HTML. You'll also need Node.js and a text editor like Visual Studio Code.

## Setting Up the Development Environment

1. **Download and Install Node.js**: This is required to run React applications.
2. **Create a Project Folder**: Use the command line to create a new project folder.
3. **Start the Development Server**: Use npm to create a new React app and start the development server.

```bash
# Install create-react-app globally
npm install -g create-react-app

# Create a new React project
create-react-app my-react-app

# Navigate into the project directory
cd my-react-app

# Start the development server
npm start
```

### Project Structure

- **node_modules**: Contains external libraries.
- **public**: Contains public assets.
- **src**: Main source folder for development.
  - **assets**: Bundled assets.
  - **main.jsx**: Main JavaScript code.
  - **index.html**: Main entry point.
- **package.json**: Contains metadata about the project.

## Creating Components

React components are reusable sections of code that can be composed to build complex UIs.

### Header and Footer Components

```jsx
// Header.js
import React from "react";

function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
```

```jsx
// Footer.js
import React from "react";

function Footer() {
  return (
    <footer>
      <p>© 2024 My Website</p>
    </footer>
  );
}

export default Footer;
```

### JSX Fragments

Use JSX fragments (`<> </>`) to return multiple components from a single function.

```jsx
// App.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <h2>Welcome to My Website</h2>
        <p>This is a simple React application.</p>
      </main>
      <Footer />
    </>
  );
}

export default App;
```

### Card Component

- **Structure**: Includes an image, title, and description.
- **Accessibility**: Set the `alt` attribute for images.
- **Performance**: Use optimized image sizes.

```jsx
// Card.js
import React from "react";

function Card({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
```

## Styling Components

There are three methods for styling React components:

1. **External Stylesheets**: Offers flexibility but may lead to naming conflicts in large applications.
2. **CSS Modules**: Generates unique class names to avoid conflicts.
3. **Inline CSS**: Convenient for minimal styling but less maintainable for complex styles.

### Example: Card Styling

```css
/* Card.css */
.card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
}

.card h3 {
  margin: 8px 0;
}

.card p {
  color: #666;
}
```

```jsx
// Card.js (with styling)
import React from "react";
import "./Card.css";

function Card({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
```

## Props and Data Flow

Props are read-only properties used to pass data between components. They enable a parent component to send data to a child component.

### Example: Student Component

```jsx
// Student.js
import React from "react";
import PropTypes from "prop-types";

function Student({ name, age, isStudent }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isStudent ? "Student" : "Not a Student"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
};

Student.defaultProps = {
  isStudent: true,
};

export default Student;
```

```jsx
// App.js
import React from "react";
import Student from "./Student";

function App() {
  return (
    <div>
      <Student name="Alice" age={20} isStudent={true} />
      <Student name="Bob" age={25} isStudent={false} />
    </div>
  );
}

export default App;
```

## Conditional Rendering

React allows rendering components based on conditions using JavaScript logic.

### Techniques

- **If Statements**: Check conditions and render components accordingly.
- **Ternary Operator**: A concise way to conditionally render components.
- **CSS Styling**: Apply different styles based on conditions.

### Example: User Greeting Component

```jsx
// Greeting.js
import React from "react";

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign up.</h1>;
  }
}

export default Greeting;
```

```jsx
// App.js
import React from "react";
import Greeting from "./Greeting";

function App() {
  const userLoggedIn = true;

  return (
    <div>
      <Greeting isLoggedIn={userLoggedIn} />
    </div>
  );
}

export default App;
```

## Rendering Lists with Keys

When rendering lists in React, it is important to provide a unique key for each list item to help React identify which items have changed, been added, or removed.

### Example

```jsx
import React from "react";

const FruitList = ({ fruits }) => {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.id}>
          {fruit.name} - {fruit.calories} calories
        </li>
      ))}
    </ul>
  );
};

// Usage
const fruits = [
  { id: 1, name: "Apple", calories: 95 },
  { id: 2, name: "Banana", calories: 105 },
  { id: 3, name: "Orange", calories: 62 },
];

<FruitList fruits={fruits} />;
```

## Sorting and Filtering Arrays

JavaScript's array methods like `sort` and `filter` can be used to manipulate arrays before rendering them in React.

### Example

```jsx
import React from "react";

const SortedFruitList = ({ fruits }) => {
  const sorted

Fruits = fruits.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <ul>
      {sortedFruits.map((fruit) => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  );
};

const FilteredFruitList = ({ fruits }) => {
  const filteredFruits = fruits.filter((fruit) => fruit.calories < 100);
  return (
    <ul>
      {filteredFruits.map((fruit) => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  );
};
```

## Reusable Components with Props

Props can be used to create reusable components that can be configured differently for each use.

### Example: Button Component

```jsx
import React from "react";

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

// Usage
<Button label="Click Me" onClick={() => alert("Button clicked!")} />;
```

## Handling Click Events with useState

`useState` is a React hook that allows you to add state to functional components. You can use it to manage the state of user interactions, such as click events.

### Example

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// Usage
<Counter />;
```

## Stateful Components with Input Handling

Stateful components can manage user input by storing and updating input values in the component's state.

### Example: Input Component

```jsx
import React, { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Input: {text}</p>
    </div>
  );
}

// Usage
<TextInput />;
```

## Managing State with Updater Functions

Updater functions can be used with `useState` to update the state based on the current state value.

### Example

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// Usage
<Counter />;
```

## Handling Arrays

React allows managing arrays in state using `useState`. You can add, remove, or update items in the array.

### Example: To-Do List

```jsx
import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, { id: tasks.length, text: task }]);
    setTask("");
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

// Usage
<ToDoList />;
```

## Managing Objects

State in React can also manage objects. When updating an object, spread the previous state to retain existing properties.

### Example: User Profile

```jsx
import React, { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "Alice",
    age: 25,
    city: "New York",
  });

  const updateUser = () =>
    setUser((prevUser) => ({ ...prevUser, city: "San Francisco" }));

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
      <button onClick={updateUser}>Move to San Francisco</button>
    </div>
  );
}

// Usage
<UserProfile />;
```

## Color Picker Component

A color picker allows users to select a color, with the chosen color displayed as feedback.

### Example

```jsx
import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (e) => setColor(e.target.value);

  return (
    <div>
      <input type="color" value={color} onChange={handleColorChange} />
      <p>Selected Color: {color}</p>
    </div>
  );
}

// Usage
<ColorPicker />;
```

## ToDo List

A ToDo list allows users to add, remove, and mark tasks as complete.

### Example

```jsx
import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, { id: tasks.length, text: task, completed: false }]);
    setTask("");
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTaskCompletion(task.id)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Usage
<ToDoList />;
```

## useEffect Hook

The `useEffect` hook allows you to perform side effects in functional components, such as fetching data or updating the DOM.

### Example: Fetching Data

```jsx
import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 10)));
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

// Usage
<DataFetcher />;
```

## Digital Clock Component

A digital clock component displays the current time and updates every second using `useEffect` and `setInterval`.

### Example

```jsx
import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

// Usage
<DigitalClock />;
```

## useContext Example

`useContext` allows sharing state across components without passing props down the tree.

### Example: Theme Context

```jsx
import React, { createContext, useContext, useState } from "react";

// Create a Theme Context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemeToggleButton />
    </div>
  );
}

function ThemeToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Toggle Theme
    </button>
  );
}

// Usage
<App />;
```

## useRef Example

`useRef` creates a reference to a DOM element or a value that persists across renders without causing re-renders when updated.

### Example: Focus Input

```jsx
import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// Usage
<FocusInput />;
```



## Stopwatch Component

A stopwatch component allows users to start, stop, and reset the timer using `useState` and `useEffect`.

### Example

```jsx
import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const reset = () => {
    setTime(0);
    setIsActive(false);
  };

  return (
    <div>
      <h2>{time}s</h2>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Pause" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Usage
<Stopwatch />;
```

## Conclusion

React is a powerful tool for building dynamic web applications. By mastering components, state management, hooks, and context, you can create interactive and reusable UIs.

## References

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---
