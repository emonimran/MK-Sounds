import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../assets/logo name.png";
import icon1 from "../../assets/download (1) 1.png";
import icon2 from "../../assets/download (2) 1.png";
import icon3 from "../../assets/download (3) 1.png";
import icon4 from "../../assets/download (4) 1.png";
import icon5 from "../../assets/download (5) 1.png";
import icon6 from "../../assets/download (6) 1.png";
import icon7 from "../../assets/download (7) 1.png";
import icon8 from "../../assets/download (8) 1.png";
import icon9 from "../../assets/download (9) 1.png";
import vectorBottom from "../../assets/Vector 1.png";
import vectorTop from "../../assets/Vector 1-1.png";
import ellipse from "../../assets/Ellipse 1.png";

function Navbar() {
  return (
    <div className="flex">
      <nav className="w-[271px] h-full shadow-lg -z-10">
        {/* LOGO */}
        <div className="logo flex items-center justify-center mt-8">
          <img src={Logo} alt="logo name" />
        </div>
        {/* NAVBAR ITEMS */}
        <div>
          <ul className="nav-links mt-16">
            <li className="text-xl font-medium flex items-center mb-11 ml-11 gap-6">
              <img src={icon1} alt="home-icon" />
              <NavLink to="/">
                <h4>Home</h4>
              </NavLink>{" "}
            </li>
            <li className="text-xl font-medium flex items-center mb-11 ml-11 gap-6">
              <img src={icon2} alt="home-icon" />
              <NavLink to="/">
                <h4>Explore</h4>
              </NavLink>
            </li>
            <li className="text-xl font-medium flex items-center mb-11 ml-11 gap-6">
              <img src={icon3} alt="home-icon" />
              <NavLink to="/">
                <h4>Saved</h4>
              </NavLink>{" "}
            </li>
            <li className="text-xl font-medium flex items-center mb-11 ml-11 gap-6">
              <img src={icon4} alt="home-icon" />
              <NavLink to="/">
                <h4>Cart</h4>
              </NavLink>{" "}
            </li>
            <li className="text-xl font-medium flex items-center mb-11 ml-11 gap-6">
              <img src={icon5} alt="home-icon" />
              <NavLink to="/">
                <h4>Selling</h4>
              </NavLink>
            </li>
            <li className="text-xl font-medium flex items-center mb-11 ml-11 gap-6">
              <img src={icon6} alt="home-icon" />
              <NavLink to="/">
                <h4>Profile</h4>
              </NavLink>
            </li>
            <li className="text-xl font-medium flex items-center mb-11 ml-11 gap-6">
              <img src={icon7} alt="home-icon" />
              <NavLink to="/">
                <h4>History</h4>
              </NavLink>
            </li>
            <li className="text-xl font-medium flex items-center mb-11 ml-11 gap-6">
              <img src={icon8} alt="home-icon" />
              <NavLink to="/">
                <h4>Contact</h4>
              </NavLink>
            </li>
            <li className="text-xl font-medium flex items-center mb-11 ml-11 gap-6">
              <img src={icon9} alt="home-icon" />
              <NavLink to="/">
                <h4>Setting</h4>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* CUSTOMER SERVICE BANNER */}
        <div className="flex items-center justify-center">
          <div className="w-[229px] h-[236px] rounded-lg relative mb-16 bg-light-green flex items-center justify-center">
            <img
              src={vectorTop}
              alt=""
              className="absolute top-0 left-0 rounded-lg"
            />
            <img
              src={vectorBottom}
              alt=""
              className="absolute bottom-0 right-0 rounded-lg"
            />
            <img src={ellipse} alt="" className="absolute top-4 left-24" />
            <div className="z-10 mx-8 text-center">
              <h4 className="font-semibold text-lg mt-3">Need Help</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                maxime.
              </p>
            </div>
            <button className="bg-dark-green shadow-xl text-white font-semibold absolute bottom-4 px-4 py-1 rounded">
              Customer Service
            </button>
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default Navbar;
