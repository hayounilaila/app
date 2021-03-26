import { withNamespaces } from "react-i18next";
import { useLocation, useHistory } from "react-router-dom";
import { Login } from "./Login";

import { Register } from "./Register";

const UserForm = ({ t }) => {
  let location = useLocation();
  let history = useHistory();

  const changeLocation = () => {
    location.pathname === "/login"
      ? history.push("/register")
      : history.push("/login");
  };
  return (
    <div className="auth">
      <div
        className={
          location.pathname === "/login"
            ? "auth__card auth__card--left"
            : "auth__card"
        }
      >
        <div className="auth__card__nav">
          <h2 className="auth__card__nav__title">
            {location.pathname === "/login"
              ? t("signup-link")
              : t("login-link")}
          </h2>
          <button className="btn" onClick={changeLocation}>
            {location.pathname === "/login" ? t("signup-btn") : t("login-btn")}
          </button>
        </div>
        {location.pathname === "/login" ? <Login t={t} /> : <Register t={t} />}
      </div>
    </div>
  );
};
export default withNamespaces()(UserForm);
