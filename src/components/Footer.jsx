import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
<div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
    <li className="nav-item">
        <NavLink className="nav-link px-2 text-body-secondary" to="/">
        Home
        </NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link px-2 text-body-secondary" to="/menu">
        Menu
        </NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link px-2 text-body-secondary" to="/booking">
        Book a table
        </NavLink>
    </li>
    </ul>
    <p className="text-center text-body-secondary">© 2023 🌯 resto, Inc</p>
  </footer>
</div>

    </>
  )
}

export default Footer