import { Link } from 'react-router-dom'
import '../login/login.css'

const Register=()=>{
    return(
        <>
        <section className='register-section'>
            <div className=' register-section-card'>
                <div className='register-section-card-left'>
                    <h1 className='register-section-card-left-heading'>Register</h1>
                    <p style={{fontSize:'15px',fontWeight:'200', textShadow:"1px 1px 20px black" }}>
                    Register into the world of STUFER and get to know your college like never before , Get appdates about events Explore various Communities around the campus
                    </p>
                    <span className='register-section-card-left-span'>Do have an Account?</span>
                    <Link to='/login'>
                    <button className='register-section-card-left-button'>Login</button>
                    </Link>
                    
                </div>
                <div className='register-section-card-right'>
                    <h1 className='register-section-card-right-heading'>register</h1>
                    <form className='register-section-card-right-form'>
                        <input className='register-section-card-right-form-input' type="text"placeholder='username' />
                        <input className='register-section-card-right-form-input' type="email" placeholder="Email" />
                        <input  className='register-section-card-right-form-input' type="password" placeholder='password' />
                        <input className='register-section-card-right-form-input' type="text" placeholder="Name" />
                        <button className='register-section-card-right-button'>Register</button>
                    </form>
                </div>

            </div>


         </section>
        </>
    )
}
export default Register