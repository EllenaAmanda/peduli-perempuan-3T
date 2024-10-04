import Hero from "./Hero"
import ListHome from "./ListHome"

function Home() {
  return (
    <div>
        <div className="container mx-auto px-24 text-slate-800 ">
          
          <Hero />
          <hr />
          <ListHome />
          
        </div>
        
    </div>
  )
}

export default Home