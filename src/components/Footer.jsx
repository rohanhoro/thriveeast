import { Link } from "react-router-dom";
import facebookIcon from "../assets/icons/facebook.svg"
import xIcon from "../assets/icons/x.svg"
import instagramIcon from "../assets/icons/instagram.svg"

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8">
      <div>
        <div className="max-w-6xl mx-auto px-12 m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 col-span-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <ul>
              <li>
                <Link to="/aboutus" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-primary">
                  Meet Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Support</h4>
            <ul>
              <li>
                <Link to="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Legal</h4>
            <ul>
              <li>
                <Link to="/privacy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4 -ml-2">
              <a href="#" className="hover:text-primary">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#" className="hover:text-primary">
                <img src={xIcon} alt="Twitter" />
              </a>
              <a href="#" className="hover:text-primary">
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} ThriveEast LLP. All rights reserved.
      </div>
    </footer>
  );
}
