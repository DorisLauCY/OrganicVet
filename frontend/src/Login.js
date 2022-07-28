import React from 'react'
import Title from './Title'
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div>
  
      <Title mainTitle="Login" />
      <div class="container py-5">
        <div id="logreg-forms">
          <form class="form-signin">
              <h1 class="h3 mb-3 font-weight-normal" style={{textAlign: 'center'}}> Sign in</h1>
              <div class="social-login">
                  <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                  <button class="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
              </div>
              <p style={{textAlign: 'center'}}> OR  </p>
              <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
              
              <button class="btn btn-success btn-block" type="submit"><i class="fas fa-sign-in-alt"></i> Sign in</button>
              <a href="#" id="forgot_pswd">Forgot password?</a>
              <hr />
              {/* <!-- <p>Don't have an account!</p>  --> */}

              <Link to="/register" className='btn btn-primary btn-block text-white' id="btn-signup">  <i class="fas fa-user-plus"></i> Sign up New Account</Link>
             
                
              </form>

              {/* <form action="/reset/password/" class="form-reset">
                  <input type="email" id="resetEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
                  <button class="btn btn-primary btn-block" type="submit">Reset Password</button>
                  <a href="#" id="cancel_reset"><i class="fas fa-angle-left"></i> Back</a>
              </form> */}
              
              
              
      </div>  
    </div>
    </div>
  )
}
