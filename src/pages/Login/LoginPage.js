import "./loginPage.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  let history = useHistory();

  function handleClick(user, pass) {
    if (user === "admin" && pass === "admin") {
      history.push("/home");
    } else {
      alert("Hatalı girdi.");
    }
  }

  const handleUsernameInput = (e) => {
    setUsernameInput(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPasswordInput(e.target.value);
  };
  const loginProcess = (user, pass) => {
    handleClick(user, pass);
  };

  return (
    <div className="will-del">
      <div className="form-container">
        <form className="login-form">
          <ul>
            <li>
              <label htmlFor="name">Username: </label>
              <input
                value={usernameInput}
                onChange={handleUsernameInput}
                type="text"
                name="name"
                placeholder="admin"
              />
            </li>
            <li>
              <label htmlFor="password">Password: </label>
              <input
                value={passwordInput}
                onChange={handlePasswordInput}
                type="password"
                name="password"
                placeholder="admin"
              />
            </li>
          </ul>

          <button onClick={() => loginProcess(usernameInput, passwordInput)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
