import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import hero_bg from "../assets/buildings_bg.jpg";
import Hamburger from "../assets/Hamburger";
import logo from "../assets/logo_xs.png";
import Button from "../components/Button";
import Footer from "../components/Footer";
import useScrollToTop from "../hooks/useScrollToTop";
import AboutUs from "./AboutUs";
import Home from "./Home";
import Projects from "./Projects";
import Services from "./Services";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(); 

  useScrollToTop();

  return (
    <div
      className="relative min-h-screen bg-cover bg-c bg-fixed"
      style={{
        backgroundImage: `url(${hero_bg})`,
      }}
    >
      <div className="sticky top-0 flex justify-between w-full items-center px-12 py-4 bg-secondary z-10">
        <div>
          <img src={logo} alt="" width={72} />
        </div>
        <nav className={`bg-secondary py-4 px-6  flex gap-14 text-white max-md:pl-22 max-md:w-[50%] max-md:pt-16  max-md:flex-col max-md:absolute max-md:h-screen max-sm:pl-12 max-xs:w-[70%] ${menuOpen ? "top-0 right-0":"top-0 hidden" } `}>
          <Link className="hover:text-primary" onClick={() => setMenuOpen(false)} to="/">
            Home
          </Link>
          <Link className="hover:text-primary" onClick={() => setMenuOpen(false)} to="Projects">
            Projects
          </Link>
          <Link className="hover:text-primary" onClick={() => setMenuOpen(false)} to="Services">
            Service
          </Link>
          <Link className="hover:text-primary" onClick={() => setMenuOpen(false)} to="AboutUs">
            About Us
          </Link>
          <Button classname={"md:hidden"} text={"Contact Us"} />
        </nav>
        <Hamburger
          stroke={"white"}
          className={"md:hidden"}
          onClick={() => setMenuOpen(!menuOpen)}
          syncState={menuOpen}
        />
        <Button classname={"max-md:hidden"} text={"Contact Us"} />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
