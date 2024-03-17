import Card from "../../components/Card";
import "./homepage.css";
import { MdOutlineEmail } from "react-icons/md";
import { GrKey } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaLock } from "react-icons/fa";
import { BiHide } from "react-icons/bi";
import { useState } from "react";
import { RxEyeOpen } from "react-icons/rx";

function Homepage() {
  const [displayPassword, setDisplayPassword] = useState(false);
  const [loginFormData, setLoginFormData] = useState({email: '', password:''});
  console.log('login form data--->', loginFormData)
  const handleInputOnchange = (event)=>{
    console.log('event--->', event.target.name)
    setLoginFormData({...loginFormData, [event.target.name] : event.target.value})
  }


  const handleLoginButton = ()=>{

  }

  return (
    <div>
      <Card>
        <div className="container">
          <div className="left-part">
            <div className="left-login-area">
              <span>
                <FaRegCircleUser size={30} />
              </span>
              <label>Login</label>
            </div>
            <div className="left-register-area">
              <span>
                <HiMiniPencilSquare size={30} />
              </span>
              <label> Register</label>
            </div>

            <div className="left-forgot-password-area">
              <span>
                <FaLock size={30} />
              </span>
              <label>Forgot Password</label>
            </div>
          </div>

          <div className="right-part">
            <h2>Login here</h2>
            <div className="email-input-container">
              <input className="email-input" type="text" placeholder="Email" name="email" onChange={handleInputOnchange} />
              <span className="email-icon">
                <MdOutlineEmail size={30} />
              </span>
            </div>
            <div className="email-input-container">
              <input placeholder="Password" type={ displayPassword=== true ? 'text' : "password"} name="password" onChange={handleInputOnchange} />
              <span className="password-icon">
                <GrKey size={30} />
              </span>
              {displayPassword ? (
                <span onClick={()=>{
                    setDisplayPassword(false)
                }} className="hide-icon">
                  <BiHide size={30} />
                </span>
              ) : (
                <span className="hide-icon" onClick={()=>{
                    setDisplayPassword(true)
                }}>
                  <RxEyeOpen size={30} />
                </span>
              )}
            </div>
            <button onClick={handleLoginButton}>Login</button>
            <label>Forgot Password?</label>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Homepage;
