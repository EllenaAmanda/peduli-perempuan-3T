import hero from '../assets/hero.jpg'

function Hero() {
  return (
    <div className='text-center flex justify-center flex-col'>
        <img src={hero} className='w-1/2 rounded '></img>
        <h1>Peduli Perempuan 3T</h1>
        <p>Peduli Perempuan 3T adalah platform yang berkomitmen memberdayakan perempuan dari daerah Tertinggal, Terdepan, dan Terluar (3T) di Indonesia melalui akses pendidikan dan pelatihan keterampilan. Kami hadir untuk membuka peluang, menghubungkan perempuan hebat dengan donatur yang peduli, demi masa depan yang lebih cerah.</p>
    </div>
  )
}

export default Hero