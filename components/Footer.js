import footerStyles from "../styles/Footer.module.scss";
import layoutStyles from "../styles/Layout.module.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={layoutStyles.container}>
          <div className={footerStyles["footer-content"]}>
            <div className={footerStyles["footer-content-about"]}>
              <p>Design et intégration par VivienG. © 2022</p>
            </div>
          </div>
        </div>
      </footer>
      <script defer src="main.js"></script>
      {/* <script src="headroom.js"></script> */}
      {/* <script>
        var myElement = document.querySelector("header"); // construct an
        instance of Headroom, passing the element var headroom = new
        Headroom(myElement); // initialise headroom.init();
      </script> */}
    </>
  );
};

export default Footer;
