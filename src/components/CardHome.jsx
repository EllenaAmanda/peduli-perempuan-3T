function CardHome() {
  return (
    <div className=" grid grid-cols-4 gap-4 pt-16">
        <article>
            <div className="p-6 border flex flex-col gap-4 rounded">
                <div className="flex gap-4 items-center">
                    <img src="https://avatar.iran.liara.run/public/69" className="w-12 h-12"/>
                    <div className="">
                        <h5 className="text-byzantine font-semibold">Pal Sriadi</h5>
                        <p className="font-thin">Maluku Utara</p>
                    </div>
                    
                </div>
                

                <h4 className="text-start text-lg font-semibold">Butuh biaya untuk melanjutkan sekolah menengah atas</h4>

                <div className="flex gap-2 justify-between">
                    <span className="text-sm text-slate-400">Terkumpul<p className="font-semibold text-byzantine text-base">Rp 2.500.000</p></span>
                    
                    <span className="text-end text-sm text-slate-400">Target <p className="font-semibold text-byzantine text-base">Rp 3.200.000</p> </span>
                    
                </div>
                
                <button className="bg-lime rounded py-1 font-semibold">Bantu</button>
            </div>
        </article>
    </div>
  )
}

export default CardHome