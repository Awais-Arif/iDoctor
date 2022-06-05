import {Link} from "react-router-dom";
function Login() {
  return (
    <div id="login">
      <div class="container">
        <div
          id="login-row"
          class="row justify-content-center align-items-center"
        >
          <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
              <form id="login-form" class="form" action="" method="post">
                <h3 class="text-center C-text">Login</h3>
                <div class="form-group">
                  <label for="username" class="C-text">
                    Username:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="form-control mt-1"
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="password" class="C-text">
                    Password:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="password"
                    id="password"
                    class="form-control mt-1"
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="remember-me" class="C-text ">
                    <span>Remember me</span> 
                    <span class="align-middle">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="Checkbox"
                      />
                    </span>
                  </label>
                  <div class="float-end">
                    <Link to="signup" id="a">
                      Register here
                    </Link>
                  </div>
                  <br />
                </div>
                <div className="mt-3">
                  <Link to="dashboard" class="btn btn-info btn-md submit-btn">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
