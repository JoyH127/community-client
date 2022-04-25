import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="Register">
        <h1>Register</h1>
        <form action="/register" method="POST">
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
          <button type="submist">Register</button>
        </form>
        <NavLink to={"/Login"}> Login </NavLink>
      </div>
    </>
  );
}
