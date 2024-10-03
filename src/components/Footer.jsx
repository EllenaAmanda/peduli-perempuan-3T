import logo from '../assets/Logo Lime.svg'
import fb from '../assets/facebook.svg'
import ig from '../assets/insta.svg'

function Footer() {
  return (
    <div className='bg-byzantine'>
        <div className='container mx-auto '>
        <footer className="py-8 grid grid-cols-3 grid-rows-3 items-center">
            <div className='flex gap-2 pb-4'>
                <img src={logo} className='w-8'/>
                <h3 className='font-bold text-white'>PP3T</h3>
            </div>
            <ul className='flex text-white justify-center gap-16 pb-4'>
                <li>Home</li>
                <li>About</li>
                <li>Donate</li>
            </ul>
            <div className='justify-end flex gap-4'>
                <img src={fb} className='w-8'/>
                <img src={ig} className='w-8'/>
            </div>

            <hr className='col-span-3'/>
            <div className='flex justify-between col-span-3'>
                <p className='text-white'> &copy;2024 Peduli Perempuan 3T. All rights reserved </p>
                <div className='flex gap-3 text-white'>
                    <p>(+62) 812-3456-7890</p>
                    <p>·</p>
                    <p>info@peduliperempuan3T.com</p>
                </div>
            </div>
            
        </footer>
        </div>
    </div>
  )
}

export default Footer