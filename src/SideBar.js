import { FaHome, FaSun, FaMoon } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { NavLink } from "react-router-dom";

import useDarkMode from "./hooks/useDarkMode";

const SideBar = () => {
  return (
    <div className="sidebar-bar">
      <SideBarIcon
        icon={<FaHome size="28" />}
        exact
        path={"/"}
        text={"Home page"}
      />
      <Divider />
      <SideBarIcon
        icon={<MdOutlineWeb size="28" />}
        path={"/Gallery"}
        text={"Web & App portfolio"}
      />
      <ThemeIcon />
    </div>
  );
};

const SideBarIcon = ({ icon, path = "/", text = `tooltip 💡` }) => {
  return (
    <NavLink exact={`${path === "/"}`} to={path} className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </NavLink>
  );
};

const SideBarNoLinkIcon = ({ icon, text = `tooltip 💡` }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <SideBarNoLinkIcon
          icon={<FaMoon size="24" />}
          text="switch to 🌞 light mode?"
        />
      ) : (
        <SideBarNoLinkIcon
          icon={<FaSun size="24" />}
          text="switch to 🌜 dark mode?"
        />
      )}
    </span>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
