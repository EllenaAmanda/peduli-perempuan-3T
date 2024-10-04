function Login() {
  return (
    <div>
        <h1>Log In</h1>
        <form>
            <h3>Email</h3>
            <input type="text" placeholder="example@gmail.com" />
            <h3>Password</h3>
            <input type="password" placeholder="password" />

            <button>Login</button>

            <h2>Belum punya akun? <span>Sign up</span></h2>
        </form>
        
        
    </div>
  )
}

export default Login