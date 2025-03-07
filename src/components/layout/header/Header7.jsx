import { useEffect, useState } from "react";

import Currency from "../components/Currency";
import MobileMenu from "../components/MobileMenu";
import Menu from "../components/Menu";

import { Link, useNavigate } from "react-router-dom";

export default function Header7() {
  const navigate = useNavigate();

  const pageNavigate = (pageName) => {
    navigate(pageName);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [addClass, setAddClass] = useState(false);


  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setAddClass(true);
    } else {
      setAddClass(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`header -type-8 js-header  ${addClass ? "-is-sticky" : ""}`}
      >
        <div className="header__container container">
          <div className="headerMobile__left">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="header__menuBtn js-menu-button"
            >
              <i className="icon-main-menu text-white"></i>
            </button>
          </div>

          <div className="header__left">
            <div className="header__logo">
              <Link to="/" className="header__logo">
                <img src="/img/general/logo-light.svg" alt="logo icon" />
              </Link>

              <div className="text-white">
                <Menu />
              </div>
            </div>
          </div>

          <div className="headerMobile__right">
            <button
              onClick={() => pageNavigate("/tour-list-1")}
              className="d-flex"
            >
              <i className="icon-search text-18 text-white"></i>
            </button>

            <button
              onClick={() => pageNavigate("/login")}
              className="d-flex ml-20"
            >
              <i className="icon-person text-18 text-white"></i>
            </button>
          </div>

          <div className="header__right">
            <div className="text-white">
              <Currency
                parentClass={
                  "headerDropdown -hover-light text-white js-form-dd"
                }
              />
            </div>

            <Link to="/register" className="text-white ml-10">
              Sign up
            </Link>

            <Link
              to="/login"
              className="button -sm -outline-white text-white rounded-200 ml-30"
            >
              Log in
            </Link>
          </div>
        </div>
      </header>
      <MobileMenu
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
    </>
  );
}
