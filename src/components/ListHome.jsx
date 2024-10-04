import { useContext } from "react"
import { DataContext } from "../DataProvider"

import CardHome from "./CardHome"

function ListHome() {
    
    // const [dataPerempuan, setDataPerempuan] = useState([]);

    // useEffect(() => {
    //     getData();
    // }, []);

    // const getData = async () => {
    //     try {
    //         let URL = "https://66ff649b2b9aac9c997f225a.mockapi.io/dataperempuan3t";
    //         const response = await fetch(URL, { 
    //             method: 'GET',
    //             headers: {
    //               'Content-Type': 'application/json'
    //             }
    //           })
    //         const result = await response.json()

    //         setDataPerempuan(result)
    //     }catch(e){
    //         console.log(e)
    //     }
    // }
    // console.log(dataPerempuan)
    const { dataPerempuan, setDataPerempuan } = useContext(DataContext)
  return (
    <div>
        <section className="py-16 ">
            <h1 className="text-center font-thin text-4xl mb-4">Perempuan 3T Membutuhkan Bantuan Mu!</h1>
            <p className="text-center">Bantu perempuan daerah 3T tersebut agar mereka dapat melanjutkan pendidikan mereka.</p>
            
            <div className="grid grid-cols-4 gap-4 pt-16">
                {dataPerempuan.map((item,index) => (
                    <div key={index}>
                        
                            <CardHome item={item}/>
                    
                    </div>
                ))}
            </div>
        <div className="flex justify-center mt-10">
            <button className="bg-byzantine text-white font-semibold py-2 px-3 rounded cursor-pointer text-center">Selengkapnya</button>
        </div>
        </section>
    </div>
  )
}

export default ListHome