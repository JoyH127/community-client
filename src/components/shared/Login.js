import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      {" "}
      <div className="Login">
        <h1>Login</h1>
        <form action="/login" method="POST">
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required></input>
          </div>

          <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required></input>
          </div>
          <div>
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
            ></input>
          </div>
          <button type="submist">Login</button>
        </form>
        <NavLink to={"/Register"}> Register </NavLink>
      </div>
    </>
  );
}
