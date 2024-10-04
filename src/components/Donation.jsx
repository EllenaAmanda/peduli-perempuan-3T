import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Donation() {
    const [donation, setDonation] = useState(0);
    const [error, setError] = useState('')

    let navigate = useNavigate();

    const nilai = [10000,50000,750000,100000]
    function handleNilai(item){
        setDonation(item)
    }

    function submit(e){
        e.preventDefault()
        if (donation == 0) {
            setError('Maaf nominal yang di input masih 0')
        }else {
            navigate('/confirmation')
        }
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
                        onChange={(e) => setDonation(e.target.value)}                  
                        className="border border-gray-300 px-4 py-2 mb-4 w-full"
                        placeholder="Masukkan Nominal Donasi"
                    />
                    
                </div>

                {error && <p className="text-red-500 text-xs">{error}</p>}
                
                {/* <Link to="/confirmation" className="bg-byzantine text-white font-semibold py-2 px-4 rounded text-center"> */}
                <button onClick={submit} className="bg-byzantine text-white font-semibold py-2 px-4 rounded text-center">
                        Donate
                </button>
                {/* </Link> */}
            </form>
        </div>
    </div>
  )
}

export default Donation