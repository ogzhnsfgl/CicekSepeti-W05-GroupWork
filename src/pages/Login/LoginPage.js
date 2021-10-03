import "./loginPage.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';

function LoginPage() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  let history = useHistory();

  function handleClick(user, pass) {
    if (user === "admin" && pass === "admin") {
      history.push("/home");
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
  }

  const handleUsernameInput = (e) => {
    setUsernameInput(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPasswordInput(e.target.value);
  };
  const loginProcess = (e) => {
    e.preventDefault();
    handleClick(usernameInput, passwordInput);
  };

  return (
    <div className="will-del">
      <div className="form-container">
        <form className="login-form">
          <div className="login-logo"></div>
          <div className="login-title">Group 2</div>
          <div className="login-inputs">
            <label htmlFor="name">Username: </label>
            <input
              value={usernameInput}
              onChange={handleUsernameInput}
              type="text"
              name="name"
              placeholder="admin"
            />
            <label htmlFor="password">Password: </label>
            <input
              value={passwordInput}
              onChange={handlePasswordInput}
              type="password"
              name="password"
              placeholder="admin"
            />
            <button onClick={(e) => loginProcess(e)}>
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
