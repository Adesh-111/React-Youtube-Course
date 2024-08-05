
# [React Full Course for Free ⚛️ (2024)](https://youtu.be/CgkZ7MvWUAA?si=Atyj69cuti6I9RR-)

<img src="https://wakatime.com/badge/github/Adesh-111/React-Youtube-Course.svg" />

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
12. [Managing State with Updator Functions](#managing-state-with-updator-functions)
13. [Handling Arrays](#handling-arrays)
14. [Managing Objects](#managing-objects)
15. [Color Picker Component](#color-picker-component)
16. [Conclusion](#conclusion)
17. [References](#references)

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

In this example, each fruit object has a unique `id` used as a key for the list items.

## Sorting and Filtering Arrays

JavaScript's array methods like `sort` and `filter` can be used to manipulate arrays before rendering them in React.

### Example

```jsx
import React from "react";

const SortedFruitList = ({ fruits }) => {
  const sortedFruits = [...fruits].sort((a, b) => a.calories - b.calories);

  return (
    <ul>
      {sortedFruits.map((fruit) => (
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

<SortedFruitList fruits={fruits} />;
```

## Reusable Components with Props

Props can be used to make components reusable by passing different data to them.

### Example: Button Component

```jsx
import React from "react";

const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

// Usage
<Button label="Click me" onClick={() => alert("Button clicked!")} />;
```

## Handling Click Events with useState

The `useState` hook allows managing component state in functional components.

### Example: Counter Component

```jsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Usage
<Counter />;
```

## Stateful Components with Input Handling

React's `useState` can also be used to handle input changes and form submissions.

### Example: Form Component

```jsx
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted with name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

// Usage
<Form />;
```

## Managing State with Updator Functions

Updating the state in React can be done with updater functions to ensure the state is updated correctly.

### Example

```jsx
import React, { useState } from "react";

const UpdaterExample = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// Usage
<UpdaterExample />;
```

## Handling Arrays

Managing arrays in React involves using `useState` to keep track of array state and methods like `push`, `pop`, `splice`, and `filter` for modifying them.

### Example

```jsx
import React, { useState } from "react";

const ArrayExample = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, { id: items.length, name: `Item ${items.length}` }]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Usage
<ArrayExample />;
```

## Managing Objects

Similar to arrays, objects in React state can be managed using `useState`.

### Example

```jsx
import React, { useState } from "react";

const ObjectExample = () => {
  const [user, setUser] = useState({ name: "John", age: 30 });

  const updateName = () => {
    setUser((prevUser) => ({ ...prevUser, name: "Jane" }));
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateName}>Change Name</button>
    </div>
  );
};

// Usage
<ObjectExample />;
```

## Color Picker Component

Creating a color picker component involves using `useState` to track the selected color and updating it based on user interaction.

### Example

```jsx
import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#000000");

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <input type="color" value={color} onChange={handleChange} />
      <p>Selected Color: {color}</p>
    </div>
  );
};

// Usage
<ColorPicker />;
```

## Conclusion

This course provided a comprehensive introduction to React, covering everything from setting up the development environment to creating components, handling state, rendering lists, and more. React is a powerful library that enables developers to build complex user interfaces efficiently and effectively.

## References

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [MDN Web Docs - React](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [PropTypes Documentation](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [React Full Course for Free (2024) Video](https://youtu.be/CgkZ7MvWUAA?si=Atyj69cuti6I9RR-)

---