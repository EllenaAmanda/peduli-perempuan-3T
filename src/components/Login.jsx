import { useState } from "react"
import logo from "../assets/PP3T Logo.svg"
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        email:"",
        password: ""
    })

    const [error, setError] = useState('')

    const user =
        {   
            email: 'ellena@gmail.com',
            password: '123'
        }

    function handleChange (event) {
        // console.log(event.target.name, event.target.value)
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    function submit (e){
        e.preventDefault()
        // console.log(input)

        if (user.email == input.email){
            if (user.password == input.password){
                setError('')
                navigate('/home')
            }
        }else{
            setError("E-mail or password is incorrect")
            console.log("wrong")
        } 
    }

    // console.log(user.email)
  return (
    <section className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 h-screen">
        <div className="px-16 text-slate-800 ">
            <h1 className="text-center text-5xl font-semibold p-8 text-byzantine">Masuk</h1>
            <form className="rounded p-16 w-1/2 mx-auto bg-white/50 shadow-md ">
                <div className="flex flex-col px-10 gap-6">
                    <img src={logo} className="w-10"/>
                    <div>
                        <h3 className="mb-2">Email</h3>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="example@gmail.com" 
                            onChange={handleChange}
                            className="border rounded w-full p-2 bg-white/55"/>
                    </div>
                    
                    <div>
                        <h3 className="mb-2">Password</h3>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="password" 
                            onChange={handleChange}
                            className="border rounded w-full p-2 bg-white/55"/>
                    </div>
                    
                    {error && <p className="text-red-500 text-xs">{error}</p>}

                    <button onClick={submit} className="text-center rounded bg-byzantine/75 text-white font-semibold p-1 ">Masuk</button>

                    <h2 className="text-center">Belum punya akun? <span className="text-byzantine font-semibold">Sign up</span></h2>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Login