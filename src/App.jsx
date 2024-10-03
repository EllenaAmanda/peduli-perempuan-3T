import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navigation />
      <div className="container mx-auto">
        
        <Hero />
      </div>
    </>
  );
}

export default App;
