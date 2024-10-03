import logo from '../assets/PP3T Logo.svg'

function Navigation() {
  return (
    <div className="px-24 py-4 border-b-2">
        <nav className="flex justify-between items-center">
            <div className='flex gap-2'>
                <img src={logo} className='w-12'/>
                <h3 className="font-bold text-2xl text-byzantine">PP3T</h3>
            </div>
        
            <ul className="flex gap-16 font-semibold text-slate-600">
                <li>Home</li>
                <li >About</li>
                <li >Donate</li>
            </ul>

            <button className='bg-byzantine text-white font-semibold py-2 px-3 rounded'>Log Out</button>
        </nav>
    </div>
  )
}

export default Navigation