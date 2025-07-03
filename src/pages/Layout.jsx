import { Link, Outlet } from "react-router-dom";
import hero_bg from "../assets/buildings_bg.jpg";
import logo from "../assets/logo_xs.png";
import Button from "../components/Button";
import Footer from "../components/Footer";
import useScrollToTop from "../hooks/useScrollToTop";
import AboutUs from "./AboutUs";
import Home from "./Home";
import Projects from "./Projects";
import Services from "./Services";

export default function Layout() {
  useScrollToTop();

  return (
    <div
      className="relative min-h-screen bg-cover bg-c bg-fixed"
      style={{
        backgroundImage: `url(${hero_bg})`,
      }}
    >
      <div className="sticky top-0 flex justify-between w-full items-center px-12 py-4 bg-[#043029] z-10">
        <div>
          <img src={logo} alt="" width={72} />
        </div>
        <nav className="bg-transparent py-4 px-6 rounded-full flex gap-14 text-white">
          <Link className="hover:text-primary" to="/">
            Home
          </Link>
          <Link className="hover:text-primary" to="Projects">
            Projects
          </Link>
          <Link className="hover:text-primary" to="Services">
            Service
          </Link>
          <Link className="hover:text-primary" to="AboutUs">
            About Us
          </Link>
        </nav>
        <Button text={"Contact Us"} />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
