import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navigation />
      <div className="container mx-auto">
        
        <Hero />
        
      </div>
      <Footer />
    </>
  );
}

export default App;
