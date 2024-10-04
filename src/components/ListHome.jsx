import { useContext } from "react"
import { DataContext } from "../DataProvider"

import CardHome from "./CardHome"
import { Link } from "react-router-dom"

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
            
            {dataPerempuan.length == 0 ? <h1>Loading...</h1> : 
            <div className="grid grid-cols-4 gap-4 pt-16">
                
                {dataPerempuan.map((item,index) => (
                    <div key={index}>
                        <Link key={item.id} to={"/detail/" + item.id}>
                            <CardHome item={item}/>
                        </Link>
                    </div>
                ))}
            </div>

            }


        <div className="flex justify-center mt-10">
            <span className="bg-byzantine text-white font-semibold py-2 px-3 rounded cursor-pointer text-center">Selengkapnya</span>
        </div>
        </section>
    </div>
  )
}

export default ListHome