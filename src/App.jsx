import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import PageTemplate from "./PageTemplate";
import Detail from "./components/Detail";

function App() {

  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path="/" element = {<Login/>}/>

        <Route path="/" element = {<PageTemplate />}>
          <Route path="/home" element = {<Home />}/>
          <Route path="/detail" element={<Detail />} />
        </Route> 
      </Routes>

      
      </BrowserRouter>
    </>
  );
}

export default App;
