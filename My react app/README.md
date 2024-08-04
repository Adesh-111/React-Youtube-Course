

# React Full Course for Free ⚛️ (2024) 
<img src="https://wakatime.com/badge/github/Adesh-111/React-Youtube-Course.svg" />

This repository contains resources and notes based on the "React Full Course for Free ⚛️ (2024)" video tutorial. This course provides a comprehensive introduction to React, a popular JavaScript library for building user interfaces.

## Table of Contents

1. [Introduction to React](#introduction-to-react)
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

## Introduction to React

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
import React from 'react';

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
import React from 'react';

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
import React from 'react';
import Header from './Header';
import Footer from './Footer';

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
import React from 'react';

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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
import React from 'react';
import './Card.css';

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
import React from 'react';
import PropTypes from 'prop-types';

function Student({ name, age, isStudent }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isStudent ? 'Student' : 'Not a Student'}</p>
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
import React from 'react';
import Student from './Student';

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
import React from 'react';

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
import React from 'react';
import Greeting from './Greeting';

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
import React from 'react';

const FruitList = ({ fruits }) => {
  return (
    <ul>
      {fruits.map(fruit => (
        <li key={fruit.id}>{fruit.name} - {fruit.calories} calories</li>
      ))}
    </ul>
  );
};

// Usage
const fruits = [
  { id: 1, name: 'Apple', calories: 95 },
  { id: 2, name: 'Banana', calories: 105 },
  { id: 3, name: 'Orange', calories: 62 },
];

<FruitList fruits={fruits} />
```

In this example, each fruit object has a unique `id` used as a key for the list items.

## Sorting and Filtering Arrays

JavaScript's array methods like `sort` and `filter` can be used to manipulate arrays before rendering them in React.

### Example

```jsx
import React from 'react';

const SortedFruitList = ({ fruits }) => {
  const sortedFruits = [...fruits].sort((a, b) => a.name.localeCompare(b.name));
  const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

  return (
    <div>
      <h2>Sorted Fruits</h2>
      <ul>
        {sortedFruits.map(fruit => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>


      <h2>Low-Calorie Fruits</h2>
      <ul>
        {lowCalFruits.map(fruit => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Usage
const fruits = [
  { id: 1, name: 'Apple', calories: 95 },
  { id: 2, name: 'Banana', calories: 105 },
  { id: 3, name: 'Orange', calories: 62 },
];

<SortedFruitList fruits={fruits} />
```

## Reusable Components with Props

React components can be made reusable by using props to customize their behavior and appearance.

### Example

```jsx
import React from 'react';

const Button = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};

// Usage
<Button label="Click Me" onClick={() => alert('Clicked!')} style={{ color: 'white', backgroundColor: 'blue' }} />
<Button label="Submit" onClick={() => console.log('Submitted')} style={{ color: 'black', backgroundColor: 'green' }} />
```

In this example, the `Button` component is reusable because its label, click handler, and styles can be customized using props.

## Handling Click Events with useState

React's `useState` hook is used to manage state in functional components, such as handling button clicks.

### Example

```jsx
import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
  );
};

export default ClickCounter;
```

## Stateful Components with Input Handling

React components can handle form input changes using the `useState` hook to manage the input state.

### Example

```jsx
import React, { useState } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
      <p>Hello, {name}!</p>
    </div>
  );
};

export default UserForm;
```

In this example, the `UserForm` component manages the state of the `name` input field using the `useState` hook.

## Conclusion

This guide provides an overview of the key concepts and techniques covered in the "React Full Course for Free ⚛️ (2024)" video. By understanding these foundational elements, you'll be well-equipped to build and manage complex React applications.

## References

For further reading and deeper understanding, refer to the following resources:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [PropTypes Documentation](https://reactjs.org/docs/typechecking-with-proptypes.html)