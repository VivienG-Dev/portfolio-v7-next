import navStyles from "../styles/Nav.module.scss";
import layoutStyles from "../styles/Layout.module.scss";
import Link from "next/link";
import Image from "next/image";
import logoPic from "../public/vivieng-logo.png";

const Nav = () => {
  return (
    <header className={navStyles.headroom}>
      <div className={layoutStyles.container}>
        <nav className={navStyles.nav}>
          <a href="/" className={navStyles.logo}>
            <Image src={logoPic} alt="Logo de VivienG" />
          </a>
          <div className={navStyles["menu-toggle"]}>
            <i className={`${navStyles["fa-bars"]} ${navStyles.fas}`}></i>
            <i className={`${navStyles["fa-times"]} ${navStyles.fas}`}></i>
          </div>
          <ul className={navStyles["nav-list"]}>
            <li className={navStyles["nav-item"]}>
              <Link href="/" activeClassName={navStyles.active}>
                <a className={navStyles["nav-link"]}>Accueil</a>
              </Link>
            </li>
            <li className={navStyles["nav-item"]}>
              <Link href="/projects" activeClassName={navStyles.active}>
                <a className={navStyles["nav-link"]}>Réalisations</a>
              </Link>
            </li>
            <li className={navStyles["nav-item"]}>
              <Link href="/contact" activeClassName={navStyles.active}>
                <a className={navStyles["nav-link"]}>Contact</a>
              </Link>
            </li>
            <li id="nav-darkmode" className={navStyles["nav-item"]}>
              <a
                id="darkmode"
                className={navStyles["nav-link"]}
                onClick="myFunction()"
              ></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
