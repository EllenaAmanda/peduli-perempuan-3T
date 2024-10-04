import logo from "../assets/PP3T Logo.svg"

function Login() {

  return (
    <section className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 h-screen">
        <div className="px-16 text-slate-800 ">
            <h1 className="text-center text-5xl font-semibold p-8 text-byzantine">Masuk</h1>
            <form className="rounded p-16 w-1/2 mx-auto bg-white/50 shadow-md ">
                <div className="flex flex-col px-10 gap-6">
                    <img src={logo} className="w-10"/>
                    <div>
                        <h3 className="mb-2">Email</h3>
                        <input type="text" placeholder="example@gmail.com" className="border rounded w-full p-2 bg-white/55"/>
                    </div>
                    
                    <div>
                        <h3 className="mb-2">Password</h3>
                        <input type="password" placeholder="password" className="border rounded w-full p-2 bg-white/55"/>
                    </div>
                    

                    <button className="text-center rounded bg-byzantine/75 text-white font-semibold p-1 ">Masuk</button>

                    <h2 className="text-center">Belum punya akun? <span className="text-byzantine font-semibold">Sign up</span></h2>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Login