import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ListHome from "./components/ListHome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navigation />
      <div className="container mx-auto px-24 text-slate-800 ">
        
        <Hero />
        <hr />
        <ListHome />
        
      </div>
      <Footer />
    </>
  );
}

export default App;
