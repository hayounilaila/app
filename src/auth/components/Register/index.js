import { IoPerson, IoLockClosedSharp, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Register = ({ t }) => {
  return (
    <div className="form-container form-container--right">
      <h1 className="title">Sign up</h1>
      <form className="form-container__form">
        <div className="textfield" tabIndex="0">
          <IoPerson />
          <input
            type="text"
            placeholder="Full name"
            className="textfield__input"
            name="full_name"
          />
        </div>
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
          Sign up
        </button>
      </form>
      <Link to="/login" className="form-container__link">
        {t("login-link") + " " + t("login-btn")}
      </Link>
    </div>
  );
};
