// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// import { Button } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JeeAdvance from './components/JeeAdvance';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    // <div className="container">
    //   <h1>Hello, React with Vite and Bootstrap!</h1>
    //   <Button variant="primary">Bootstrap Button</Button>
    // </div>


    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<JeeAdvance />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
