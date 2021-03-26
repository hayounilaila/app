import { Link } from "react-router-dom";

import { IoLockClosedSharp, IoMail } from "react-icons/io5";

export const Login = ({ t }) => {
  return (
    <div className="form-container form-container--left">
      <h1 className="title">Login</h1>
      <form className="form-container__form">
        <div className="textfield" tabIndex="0">
          <IoMail />
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="textfield__input"
          />
        </div>
        <div className="textfield" tabIndex="0">
          <IoLockClosedSharp />
          <input
            type="text"
            placeholder="Password"
            className="textfield__input"
            name="password"
          />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
      <Link to="/register" className="form-container__link">
        {t("signup-link") + " " + t("signup-btn")}
      </Link>
    </div>
  );
};
