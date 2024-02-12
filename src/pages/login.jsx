import "./login.css";

function login() {
  return (
    <>
      <header>Welcom</header>

      <body>
        <div className="login-from">
        <div class="header-text">Sign In</div>
        <div className="form-group">
              <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <button type="submit" className="btn-login">Login</button>
        </div>
      </body>
    </>
  );
}

export default login;
