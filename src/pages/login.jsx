import "./login.css";

function login() {
  return (
    <>
      {/* <img
        style={{ width: "100%", height: "100%" }}
        src="/src/img/bg-img.jpg"
      /> */}
      <body>
        <div class="login-from">
          <div class="header-text">Login</div>
          <input placeholder="Your Username" type="text" className="Username" />
          <input placeholder="Your Password" type="Password" className="a" />

          <button>login</button>
        </div>
      </body>
    </>
  );
}

export default login;
