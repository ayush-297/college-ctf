import Layout from '../components/Layout/Layout'
import '../styles/login.css';
import bg from '../assets/background.png';
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import ErrorIcon from '@mui/icons-material/Error';
import { Lock, Person, Email, Call, Paid } from '@mui/icons-material';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useLogin } from '../hooks/useLogin';
import qr from '../assets/qr3.png'
import { Link } from 'react-router-dom';

export default function Login() {
  // Login Data 
  const [workshop,setWorkshop]=useState(true);
  const [loginMail, setLoginMail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const { login, loginError, is_Loading } = useLogin();
  // Sign Up Data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [transactionid, setTransactionID] = useState('');
  const { signup, error, isLoading } = useSignup();

  // Password Visibility Toggle Function
  const [showPassword, setShowPassword] = useState(false);

  function showHidePW() {
    const pw = document.getElementById("user_password");
    const pwIcon = document.getElementById("pw_icon");
    if (pw.type === "password") {
      pw.type = "text";
      pwIcon.style.color = "#000";
    } else {
      pw.type = "password";
      pwIcon.style.color = "#ccc";
    }
  }

  // Login Data Post
  const verifyAndPostData = async (event) => {
    event.preventDefault();
    await login(loginMail, loginPassword);
  };
  // Sign Up Data Post
  const CreateAccount = async (event) => {
    event.preventDefault();
    await signup(name, email, phone, password, transactionid);
  }
  const toggle1 =()=>{
          setWorkshop(true);
  }
  const toggle2 =()=>{
    setWorkshop(false);
}
  if(workshop){
  return (
    <Layout>
      <div className='body'>
        <div className='left'>
      <div className='change-button'>
        <div className='change-button'>
        <button onClick={toggle1}><span>Workshop+CTF</span><i></i></button>
        <button onClick={toggle2}><span>CTF</span><i></i></button>
        </div>
          <div className='qr1'>
          <p className='para'>SCAN THE QR CODE FOR PAYMENT</p>
          UPI Id:pankajbarman269@oksbi
        <img src={qr}></img>
        </div>
        </div>
        </div>  
        <div className='right'>
        <div className="buttons">
          <button onClick={toggle1}><span>Workshop+CTF</span><i></i></button>
           <button onClick={toggle2}><span>CTF</span><i></i></button>
          </div>
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          {/* For Sign Up Part */}
          <div className="signup">
            <label for="chk" aria-hidden="true" className='label'>Sign up</label>
            <form method='POST' className='user_acc_info'>
              <div className='acc__credentials'>
                <div className='user_name_field info_field'>
                  <Person className='info_icon' />
                  <input type='text' autoComplete='off' className='input' placeholder='Enter your name' name='name' onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className='user_email_field info_field'>
                  <Email className='info_icon' />
                  <input type='email' autoComplete='off' className='input' placeholder='Enter your mail ID' name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className='user_number_field info_field'>
                  <Call className='info_icon' />
                  <input type='number' autoComplete='off' className='input' placeholder='Enter your Phone number' name='phone' onChange={(e) => setPhone(e.target.value)} value={phone} />
                </div>
                <div className='user_password_field info_field'>
                  <Lock className='info_icon' />
                  <input type='password' autoComplete='off' className='input' placeholder='Enter your password' name='password' id='user_password' onChange={(e) => setPassword(e.target.value)} value={password} />
                  {showPassword ? (
                    <AiFillEye
                      size={20}
                      onClick={() => {
                        setShowPassword(!showPassword);
                        showHidePW();
                      }}
                      id="pw_icon"
                    />
                  ) : (
                    <AiFillEyeInvisible
                      size={20}
                      onClick={() => {
                        setShowPassword(!showPassword);
                        showHidePW();
                      }}
                      id="pw_icon"
                    />
                  )}
                </div>
                <div className='transactionid_field info_field'>
                  <Paid className='info_icon' />
                  <input type='text' className='input' autoComplete='off' placeholder='Transaction ID' name='transactionid' id='transaction_id' onChange={(e) => setTransactionID(e.target.value)} value={transactionid} />
                </div>
              </div>
              {error && <div className="error"><ErrorIcon fontSize='small' /> {error}</div>}
              <div className='btns_submit'>
                <input type='submit' name='signup__btn' className='button' onClick={CreateAccount} value='Sign Up'  />
              </div>
            </form>
            <div className='pay'>
            <Link to="upi://pay?pa=pankajbarman269@oksbi&pn=PANKAJ%20BARMAN&cu=INR&am=250" target='_blank'><button className='py'>PAY</button></Link>
            </div>
          </div>
          
          {/* For Login Part */}

          <div className="login">
            <label for="chk" aria-hidden="true" className='label'>Login</label>

            <form method='POST'>
              <input
                type="email"
                name="email"
                className='input'
                autoComplete="off"
                placeholder="Enter your mail ID"
                onChange={(e) => setLoginMail(e.target.value)}
                value={loginMail}
                required
                id="user_mail"
              />
              <input
                required
                className='input'
                type="password"
                name="password"
                autoComplete="off"
                placeholder="Enter your password"
                onChange={(e) => setLoginPassword(e.target.value)}
                value={loginPassword}
                id="user_password"
              />
              {loginError && (
                <div className="error">
                  <ErrorIcon fontSize="small" /> {loginError}
                </div>
              )}
              <input
                type="submit"
                name="login__btn"
                className="login__btn button"
                id="login__btn"
                onClick={verifyAndPostData}
                value="Sign In"
                // disabled={is_Loading}
              />
            </form>


          </div>



        </div>
        </div>
      </div>
      {/* For background image */}
      <div
        className="bg-wrap"
        style={{
          position: "fixed",
          left: "0",
          top: "0",
          right: "0",
          bottom: "0",
          backgroundImage: `url(${bg})`,
          backgroundPosition: "50% 0",
          backgroundSize: "cover",
          zIndex: "-10900",
        }}
      ></div>
      
    </Layout>
  )
      }
      else 
      return(
        <Layout>
        <div className='body'>
        <div className='left'>
          <div className='change-button'>
        <button onClick={toggle1}><span className='t1'>Workshop+CTF</span><i></i></button>
        <button onClick={toggle2}><span className='t2'>CTF</span><i></i></button>
        </div>
          <div className='qr'>
        </div>
        </div>
        <div className='right'>
        <div className="buttons">
          <button onClick={toggle1}><span>Workshop+CTF</span><i></i></button>
           <button onClick={toggle2}><span>CTF</span><i></i></button>
          </div>
          <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />
            {/* For Sign Up Part */}
            <div className="signup">
              <label for="chk" aria-hidden="true" className='label'>Sign up</label>
              <form method='POST' className='user_acc_info'>
                <div className='acc__credentials'>
                  <div className='user_name_field info_field'>
                    <Person className='info_icon' />
                    <input type='text' autoComplete='off' className='input' placeholder='Enter your name' name='name' onChange={(e) => setName(e.target.value)} value={name} />
                  </div>
                  <div className='user_email_field info_field'>
                    <Email className='info_icon' />
                    <input type='email' autoComplete='off' className='input' placeholder='Enter your mail ID' name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                  </div>
                  <div className='user_number_field info_field'>
                    <Call className='info_icon' />
                    <input type='number' autoComplete='off' className='input' placeholder='Enter your Phone number' name='phone' onChange={(e) => setPhone(e.target.value)} value={phone} />
                  </div>
                  <div className='user_password_field info_field'>
                    <Lock className='info_icon' />
                    <input type='password' autoComplete='off' className='input' placeholder='Enter your password' name='password' id='user_password' onChange={(e) => setPassword(e.target.value)} value={password} />
                    {showPassword ? (
                      <AiFillEye
                        size={20}
                        onClick={() => {
                          setShowPassword(!showPassword);
                          showHidePW();
                        }}
                        id="pw_icon"
                      />
                    ) : (
                      <AiFillEyeInvisible
                        size={20}
                        onClick={() => {
                          setShowPassword(!showPassword);
                          showHidePW();
                        }}
                        id="pw_icon"
                      />
                    )}
                  </div>
  
                </div>
                {error && <div className="error"><ErrorIcon fontSize='small' /> {error}</div>}
                <div className='btns_submit'>
                  <input type='submit' name='signup__btn' className='button' onClick={CreateAccount} value='Sign Up'  />
                </div>
              </form>
            </div>
            
            {/* For Login Part */}
  
            <div className="login">
              <label for="chk" aria-hidden="true" className='label'>Login</label>
  
              <form method='POST'>
                <input
                  type="email"
                  name="email"
                  className='input'
                  autoComplete="off"
                  placeholder="Enter your mail ID"
                  onChange={(e) => setLoginMail(e.target.value)}
                  value={loginMail}
                  required
                  id="user_mail"
                />
                <input
                  required
                  className='input'
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Enter your password"
                  onChange={(e) => setLoginPassword(e.target.value)}
                  value={loginPassword}
                  id="user_password"
                />
                {loginError && (
                  <div className="error">
                    <ErrorIcon fontSize="small" /> {loginError}
                  </div>
                )}
                <input
                  type="submit"
                  name="login__btn"
                  className="login__btn button"
                  id="login__btn"
                  onClick={verifyAndPostData}
                  value="Sign In"
                  // disabled={is_Loading}
                />
              </form>
  
  
            </div>
  
  
          </div>
          </div>
          </div>
        {/* For background image */}
        <div
          className="bg-wrap"
          style={{
            position: "fixed",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            backgroundImage: `url(${bg})`,
            backgroundPosition: "50% 0",
            backgroundSize: "cover",
            zIndex: "-10900",
          }}
        ></div>
        
      </Layout>
      )
}