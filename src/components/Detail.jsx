import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Detail() {
    const [ dataPerempuan, setDataPerempuan ] = useState({})
    const {id} = useParams ()


    useEffect( ()=> {
      getDetailId()
    }, [])

    async function getDetailId (){
      const response = await fetch(`https://66ff649b2b9aac9c997f225a.mockapi.io/dataperempuan3t/${id}`)
      const result = await response.json()

      setDataPerempuan(result)
    }

    console.log(dataPerempuan)
  return (
    <div className='py-16 px-24'>
      
      {dataPerempuan.length == 0 ? <h1>Loading...</h1> : 
        <div>
            <h2 className='text-center text-3xl font-thin mb-16'>{dataPerempuan.judul}</h2>

            <div className='grid grid-cols-3 grid-rows-2 w-full'>
                <img src={dataPerempuan.avatar} className= 'w-2/3 row-span-2' />
                <div><h4 className='text-byzantine font-semibold'>Nama</h4><p>{dataPerempuan.name}</p></div>
                <div><h4 className='text-byzantine font-semibold'>Asal Daerah</h4><p></p>{dataPerempuan.daerah}</div>
                <div className='col-span-2'><h4 className='text-byzantine font-semibold'>Kisahku</h4><p>{dataPerempuan.deskripsi}</p></div>
            </div>
            <div className='mt-8 grid grid-cols-2 w-1/4 grid-rows-2'>
              <span className='text-byzantine font-semibold'>Dana terkumpul (Rp) </span><h3 className='text-end'> {dataPerempuan.terkumpul} </h3>
              <span className='text-byzantine font-semibold'>Target Dana (Rp)  </span><h3 className='text-end'>{dataPerempuan.target} </h3>
               
              <Link to={`/donate/${id}`} className='bg-byzantine text-white font-semibold py-2 px-3 rounded cursor-pointer col-span-2 mt-4 text-center'><span >Donasi</span></Link>
            </div>
        </div>
      }
    </div>
  )
}

export default Detail