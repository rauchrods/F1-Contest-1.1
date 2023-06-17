import './App.css';
import { useState } from "react";

function App() {
  let [user, setUser] = useState({
    fname: "",
    email: "",
    password: "",
    cnf_password: "",
    token: "",
  });

  let [msg, setMsg] = useState({
    msg_info: "",
    status: "",
  });

  function submitform(e) {

    e.preventDefault();

    if (user.fname === "" || user.email === "" || user.password === "" || user.cnf_password === "") {
      setMsg({ msg_info: "Error : All the fields are mandatory", status: "error" });
      return;
    }

    else if (user.password !== user.cnf_password) {
      setMsg({ msg_info: "Password not matching", status: "error" });
      return;
    }
    else {
      setMsg({ msg_info: "Successfully Signed Up!", status: "success" });
      setUser({ ...user, token: generatetoken() });
    }

  };


  function generatetoken() {
    let str = "";
    for (let i = 0; i < 16; i++) {
      str += String.fromCharCode(Math.floor(Math.random() * 89) + 33); //33 to 122
    }
    return str;
  }

  console.log("user", user);

  return (
    <div className="form-cont">
      <h1>Signup</h1>

      <form>
        <input type="text" placeholder="Full Name" id="name-inp" onChange={(e) => { setUser({ ...user, fname: e.target.value }) }} />
        <input type="email" name="" id="email-inp" placeholder="Email" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
        <input type="password" name="" id="pass-inp" placeholder="Password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
        <input type="password" name="" id="cnf-pass-inp" placeholder="Confirm Password" onChange={(e) => { setUser({ ...user, cnf_password: e.target.value }) }} />
        <span id="err-msg" className={msg.status === "error" ? "error-msg" : "success-msg"}>{msg.msg_info}</span>
        <button type="submit" id="sign-up" onClick={submitform}>Signup</button>
      </form>

    </div>

  )
}

export default App;
