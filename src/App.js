import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Forma from "./components/pages/Forma";
import Home from "./components/pages/Home";
import Header from "./components/pages/Header";
import ItInfo from "./components/pages/ItInfo";
import JsComponent from "./components/pages/JsComponent";
import JsWhatIs from "./components/pages/JsWhatIs";
import ParammDetail from "./components/ParammDetail";

function App() {
  return (
    <div className="App">
      <ParammDetail/>
      <main>
        <Routes>
          <Route path="/header" element={<Header />}>
            <Route path="/header" element={<MainImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiL0Kw4vEgpJgQ8X7JBK2cBvadHAzi2MC0_MHUtco3d_frZvwXH6HeiKgk8f56zTcQjS4&usqp=CAU" alt=""/>} />
            <Route path="/header/forma" element={<Forma />} />
          </Route>
          <Route path="/home" element={<Home />} >
            <Route path="/home" element={<ItInfo/>}/>
            <Route path="html" element={<h1>HTML</h1>} />
            <Route path="css" element={<h1>CSS</h1>} />
            <Route path="java" element={<h1>JAVA</h1>} />
            <Route path="js" element={<JsComponent/>} >
              <Route path="" element={<JsWhatIs/>}/>
              <Route path="react-js" element={<h1>REACT JS</h1>}/>
              <Route path="vue-js" element={<h1>VUE JS</h1>}/>
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

  const MainImage = styled.img`
    width: 700px;
    margin-top: 40px;
  `;
