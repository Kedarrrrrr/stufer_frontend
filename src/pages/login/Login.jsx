import './login.css'
import { Link } from 'react-router-dom'

const Login=()=>{
    return(
        <>
         <section className='login-section'>
            <div className=' login-section-card'>
                <div className='login-section-card-left'>
                    <h1 className='login-section-card-left-heading'>LOGIN</h1>
                    <p style={{fontSize:'15px',fontWeight:'400',textShadow:"1px 1px 20px black" , marginTop:"2rem"}}> 
                        Login into the world of STUFER again 
                    </p>
                    <span className='login-section-card-left-span'>Don't have an Account?</span>
                     <Link to='/register' >
                    <button className='login-section-card-left-button'>Register</button>
                    </Link>
                    
                </div>
                <div className='login-section-card-right'>
                    <h1 className='login-section-card-right-heading'>Login</h1>
                    <form className='login-section-card-right-form'>
                        <input className='login-section-card-right-form-input' type="text"placeholder='username' />
                        <input  className='login-section-card-right-form-input' type="password" placeholder='password' />
                        <button className='login-section-card-right-button'>Login</button>
                    </form>
                </div>

            </div>


         </section>
        </>
    )
}
export default Login