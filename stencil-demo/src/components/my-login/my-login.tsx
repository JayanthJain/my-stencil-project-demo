import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-login',
  styleUrls: ['my-login.scss'],
  shadow: false,
})
export class MyLogin {
  render() {
    return (
      <div>
        <my-header></my-header>
        <div>
          {/* <div class="login">
            <h2>Log in to your account</h2>
            <p>Welcome back! Please enter your details.</p>
          </div> */}

          <div class="login-container">
            <h1>Log in to your account</h1>
            <p class="subtitle">Welcome back! Please enter your details.</p>

            <label>Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" placeholder="***************" />

            <div class="options">
              <label><input type="checkbox" /> Remember for 30 days</label>
              <a href="#">Forgot Password ?</a>
            </div>

            <custom-button variant="primary" width="lg">Sign In</custom-button>
            <custom-button variant="secondary" width="lg">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" class="icon" />
              Sign in with Google
            </custom-button>

            <p class="footer">
              Don't have an account? <a href="#">Sign up</a>
            </p>
          </div>

        </div>
      </div>

      

    );
  }
}
