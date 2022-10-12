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
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import About from "./components/About";
import Montreal from "./components/Montreal";
import GlobalStyles from "./components/GlobalStyles";
import Toggle from "./components/Toggle";
import HamburgerNav from "./components/HamburgerNav";
import Karachi from "./components/Karachi";

const App = () => {

  return (
    <>
      <Router>
        <GlobalStyles />
        <Wrapper>
          <Header />
  
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/About" element={<About />} />

            <Route path="/Form" element={<Form />} />
            <Route path="/Form2" element={<Form2 />} />
            <Route path="/Form3" element={<Form3 />} />
            <Route path="/Montreal" element={<Montreal />} />
            <Route path="/Karachi" element={<Karachi />} />

          </Routes>
        </Wrapper>
      </Router>
    </>
  );
};

const Wrapper = styled.div``;

export default App;
