import { createContext } from "react"
import { useEffect, useState } from "react"

export const DataContext = createContext()

function DataProvider({children}) {
    const [dataPerempuan, setDataPerempuan] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            let URL = "https://66ff649b2b9aac9c997f225a.mockapi.io/dataperempuan3t";
            const response = await fetch(URL, { 
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
              })
            const result = await response.json()

            setDataPerempuan(result)
        }catch(e){
            console.log(e)
        }
    }

    // console.log(dataPerempuan)
    return (
    <DataContext.Provider value={{dataPerempuan, setDataPerempuan}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider