import {Link} from "react-router-dom";

function Signup() {
  return (
    <div id="signup">
      <div class="container">
        <div
          id="login-row"
          class="row justify-content-center align-items-center"
        >
          <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12 ">
              <form id="login-form" class="form" action="" method="post">
                <h3 class="text-center C-text">Signup</h3>
                <div class="form-group">
                  <label for="username" class="C-text">
                    Name:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    class="form-control mt-1"
                  />
                </div>
                <div class="form-group mt-3">
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
                  <label for="password" class="C-text">
                    Role:
                  </label>
                  <br />
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">Doctor</option>
                    <option value="2">Patient</option>
                  </select>
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    name="submit"
                    class="btn btn-info btn-md submit-btn"
                    value="submit"
                  >
                    Submit
                  </button>
                </div>
                <div class="d-flex align-items-baseline mt-3">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="Checkbox"
                  />
                  <p class="ms-2 m-0">
                    I agree with the <strong>terms and conditions</strong>
                  </p>
                </div>
                <p class="text-center mt-4">
                  Already have an account?
                  <Link to="/" id="a" className="ms-1">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
