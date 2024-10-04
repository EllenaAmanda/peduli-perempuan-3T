import React, { useContext } from 'react'
import { DataContext } from '../DataProvider'

function Detail() {
    const { dataPerempuan, setDataPerempuan } = useContext(DataContext)
    console.log(dataPerempuan)
  return (
    <div className='py-16 px-24'>
        
        <h2 className='text-center text-3xl font-thin mb-16'>{dataPerempuan[0].judul}</h2>

        <div className='grid grid-cols-3 grid-rows-2 w-full'>
            <img src={dataPerempuan[0].avatar} className= 'w-2/3 row-span-2' />
            <div><h4 className='text-byzantine font-semibold'>Nama</h4><p>{dataPerempuan[0].name}</p></div>
            <div><h4 className='text-byzantine font-semibold'>Asal Daerah</h4><p>{dataPerempuan[0].daerah}</p></div>
            <div className='col-span-2'><h4 className='text-byzantine font-semibold'>Kisahku</h4><p>{dataPerempuan[0].deskripsi}</p></div>
        </div>
        <div className='mt-8 grid grid-cols-2 w-1/4'>
          <span className='text-byzantine font-semibold'>Dana terkumpul (Rp) </span><h3> {dataPerempuan[0].terkumpul} </h3>
          <span className='text-byzantine font-semibold'>Target Dana (Rp)  </span><h3>{dataPerempuan[0].target} </h3>
        </div>
        <div className="flex justify-center mt-8">
          <span className='bg-byzantine text-white font-semibold py-2 px-3 rounded cursor-pointer'>Donasi</span>
        </div>
    </div>
  )
}

export default Detail