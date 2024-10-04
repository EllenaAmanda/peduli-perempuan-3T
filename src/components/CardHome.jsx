import { useContext } from "react"
import { DataContext } from "../DataProvider"

function CardHome({item}) {
    
    
    // console.log(dataPerempuan)
  return (
    // <div className=" grid grid-cols-4 gap-4 pt-16">
        <article>
            <div className="p-6 border flex flex-col gap-4 rounded">
                <div className="flex gap-4 items-center">
                    <img src={item.avatar} className="w-12 h-12"/>
                    <div className="">
                        <h5 className="text-byzantine font-semibold">{item.name}</h5>
                        <p className="font-thin">{item.daerah}</p>
                    </div>
                    
                </div>
                

                <h4 className="text-start text-lg font-semibold">{item.judul}</h4>

                <div className="flex gap-2 justify-between">
                    <span className="text-sm text-slate-400">Terkumpul<p className="font-semibold text-byzantine text-base">Rp {item.terkumpul}</p></span>
                    
                    <span className="text-end text-sm text-slate-400">Target <p className="font-semibold text-byzantine text-base">Rp {item.target}</p> </span>
                    
                </div>
                
                <span className="bg-lime rounded py-1 font-semibold text-center">Bantu</span>
            </div>
        </article>
    // </div>
  )
}

export default CardHome