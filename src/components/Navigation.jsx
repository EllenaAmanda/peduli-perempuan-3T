import { Link } from 'react-router-dom'
import logo from '../assets/PP3T Logo.svg'

function Navigation() {
  return (
    <div className="px-24 py-4">
        <nav className="flex justify-between items-center">
            <div className='flex gap-2'>
                <img src={logo} className='w-12'/>
                <h3 className="font-bold text-2xl text-byzantine">PP3T</h3>
            </div>
        
            <ul className="flex gap-16 font-semibold text-slate-600">
                <Link to='/home'><li>Home</li></Link> 
                <li >About</li>
                <li >Donate</li>
            </ul>

            <Link to='/'> <span className='bg-byzantine text-white font-semibold py-2 px-3 rounded cursor-pointer'>Log Out</span></Link>
        </nav>
    </div>
  )
}

export default Navigation