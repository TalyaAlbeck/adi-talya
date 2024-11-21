import { Link, Outlet } from "react-router-dom";
import { PiGoogleDriveLogoThin } from "react-icons/pi";

export default function Layout() {
  function handleLogout() {
    localStorage.removeItem("currentusername");
  }

  const isLoggedIn = localStorage.getItem("currentusername");

  return (
    <>
      {typeof localStorage.getItem("currentusername") === "string" ? (
        <>
          <nav>
            <div>
              <PiGoogleDriveLogoThin className="icon" size={60} />
            </div>
            {/* <Link to="folder" className="nav folderLink">
              your folders
            </Link> */}
          </nav>
          <Outlet />
          <footer>
            <Link to="/login" onClick={handleLogout} replace>
              log out
            </Link>
          </footer>
        </>
      ) : (
        <>
          <p> you are not logged in </p>
          <br />
          <Link to="/login" replace>
            log in
          </Link>
        </>
      )}
    </>
  );
}
