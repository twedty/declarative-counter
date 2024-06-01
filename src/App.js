// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Let's Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';

function App() {
    const [counter, setCounter] = useState(1);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <h1>{counter}</h1>
            <h2>{counter + 1}</h2>
            <h4>{counter + 2}</h4>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    );
}

export default App;
