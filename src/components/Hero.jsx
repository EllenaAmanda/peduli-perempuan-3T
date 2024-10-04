import hero from '../assets/hero.jpg'
import logo from '../assets/PP3T Logo.svg'

function Hero() {
  return (
    <section className='pt-8 pb-16'>
        <div className='text-center grid grid-cols-1 place-items-center gap-8 '>
            <img src={hero} className='w-2/5 rounded'></img>
            <h1 className='font-semibold text-slate-800 text-5xl flex items-center gap-2'><img src={logo} className='w-16'/> PP3T Peduli Perempuan 3T</h1>
            <p className='px-48'>Peduli Perempuan 3T adalah platform yang berkomitmen memberdayakan perempuan dari daerah <span className='text-byzantine font-semibold'> Tertinggal, Terdepan, dan Terluar (3T) </span> di Indonesia melalui akses pendidikan dan pelatihan keterampilan. Kami hadir untuk membuka peluang, menghubungkan perempuan hebat dengan donatur yang peduli, demi masa depan yang lebih cerah.</p>
            <div className='grid grid-cols-2 gap-8'>
                <a className='cursor-pointer border-b-2 border-byzantine text-byzantine font-semibold py-2 px-3 rounded'>Saya perempuan 3T!</a>
                <a className='cursor-pointer bg-byzantine text-white font-semibold py-2 px-3 rounded'>Dukung Sekarang</a>
            </div>
        </div>
    </section>
  )
}

export default Hero