import Layout from '../components/Layout/Layout'
import  '../styles/login.css'
export default function Login(){
    return(
        <Layout>
            <div className='body'>
        <div className="main">  
		  <input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form>
					<label for="chk" aria-hidden="true" className='label'>Sign up</label>
					<input type="text" name="txt" placeholder="User name" required="" className='input'></input>
					<input type="email" name="email" placeholder="Email" required="" className='input'/>
					<input type="password" name="pswd" placeholder="Password" required="" className='input'/>
					<button className='button'>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label for="chk" aria-hidden="true" className='label'>Login</label>
					<input type="email" name="email" placeholder="Email" required=""className='input'/>
					<input type="password" name="pswd" placeholder="Password" required=""className='input'/>
					<button className='button'>Login</button>
				</form>
			</div>
	  </div>
      </div>
      </Layout>
    )
}