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

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import About from "./components/About";
import GlobalStyles from "./components/GlobalStyles";



const App = () =>{
  return (
    <Router>
      <GlobalStyles/>
      <Wrapper>
        <Header/> 
        {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<HomePage/>} />
            {/* <HomePage /> */}
          {/* </Route> */}
         <Route path="/About" element={<About/>}/>
            {/* <About />
          </Route> */}
          <Route path="/Form" element={<Form/>}/>
          <Route path="/Form2" element={<Form2/>}/>
          <Route path="/Form3" element={<Form3/>}/>


            {/* <MyForm/> */}
            {/* <Form />
          </Route> */}
        </Routes>
      </Wrapper>
    </Router>
  );
};

const Wrapper = styled.div``

export default App;