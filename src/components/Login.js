import "../CSS/Login.css";

const Login = () => {
  return (
    <div className="login-main-container mt-36">
      <div className="login-header flex justify-center text-4xl">LOGIN</div>
      <form className="login-form flex justify-center items-center h-full">
        <div className="login-name-container flex flex-col m-4 w-56">
          <label>Name</label>
          <input className="h-10 font-bold" type="text" />
        </div>
        <div className="login-password-container flex flex-col m-4 w-56">
          <label>Password</label>
          <input className="h-10" type="password" />
        </div>
      </form>
      <div className="form-footer flex justify-center">
            <input className="form-footer-button m-4 h-10 w-28 cursor-pointer" type="submit" value="SIGN IN"/>
        </div>
    </div>
  );
};

export default Login;