import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import PageTemplate from "./PageTemplate";
import Detail from "./components/Detail";
import Donation from "./components/Donation";
import Confirmation from "./components/Confirmation";

function App() {

  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path="/" element = {<Login/>}/>

        <Route path="/" element = {<PageTemplate />}>
          <Route path="/home" element = {<Home />}/>
          <Route path="/donate/:id" element = {<Donation />}/>
          <Route path="/confirmation" element = {<Confirmation />}/>
          <Route path="/detail/:id" element={<Detail />} />
        </Route> 
      </Routes>

      
      </BrowserRouter>
    </>
  );
}

export default App;
