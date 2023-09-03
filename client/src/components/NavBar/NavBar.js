// import "./NavBar.css";
import styles from "./NavBar.module.css";

function NavBar(props) {
  const loggedIn = localStorage.getItem("loggedIn");

  return (
    // <div>
    <div className={styles["nav"]}>
      <div className={styles["nav-header"]}>
        <div className={styles["nav-title"]}>
          <b>UniMarketPlace</b>
        </div>
      </div>
      <div className={styles["nav-links"]}>
        <a href="/">Home</a>
        <a href="/sell">Sell</a>
        <a href="/about">About Us</a>
        <a href="/message">Messages</a>
        {loggedIn === "false" ? (
          <a href="/login">Log In</a>
        ) : (
          <a href="/myprofile">My Profile</a>
        )}
      </div>
      {/* <nav className={styles["navbar"]}>
        <div className={styles["navbar-left"]}>
          <span className={styles["company-name"]}>UniMarketPlace</span>
        </div>
        <div className={styles["navbar-right"]}>
          <ul className={styles["navbar-links"]}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/sell">Sell</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/message">Messages</a>
            </li>
            {loggedIn === "false" ? (
              <li>
                <a href="/login">Log In</a>
              </li>
            ) : (
              <li>
                <a href="/myprofile">My Profile</a>
              </li>
            )}
          </ul>
        </div>
      </nav> */}
    </div>
  );
}

export default NavBar;
