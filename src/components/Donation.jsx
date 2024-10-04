import { useState } from "react";
import { Link } from "react-router-dom";

function Donation({ id, currentTerkumpul, onDonationSuccess }) {
    const [donation, setDonation] = useState(0);
    
    const nilai = [10000,50000,750000,100000]
    function handleNilai(item){
        setDonation(item)
    }

    function submit(e){
        e.preventDefault()

    }
  return (
    
    <div>
        <div className="py-16 px-24 h-auto">
            <h2 className="text-center text-3xl mb-8">Masukkan Nominal Donasi</h2>
            <form className='w-1/2 mx-auto flex flex-col gap-8'>
                <div className='flex justify-between'>
                    {nilai.map((item,index) => (
                        <span key={index} className='border rounded p-4 cursor-pointer' onClick={ () => handleNilai(item)}>Rp {item}</span>
                    ))
                    }
                </div>
                
                <div>
                <p className='mb-4'>Nominal donasi lainnya</p>
                    <input
                        type="number"
                        value= {donation}                        
                        className="border border-gray-300 px-4 py-2 mb-4 w-full"
                        placeholder="Masukkan Nominal Donasi"
                    />
                    
                </div>
                <Link to="/confirmation" className="bg-byzantine text-white font-semibold py-2 px-4 rounded text-center">
                <button onClick={submit} >
                        Donate
                </button>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default Donation