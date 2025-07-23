import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import EastNestHomeStay from "./pages/EastNestHomeStay";
import EastNestPropertyCare from "./pages/EastNestPropertyCare";
import EastSideChronicles from "./pages/EastSideChronicles";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Privacy from "./pages/Privacy";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import TermsAndConditions from "./pages/TermsAndConditions";
import ThriveEastStudio from "./pages/ThriveEastStudio";
import ThriveStore from "./pages/ThriveStore";

const routes = [
  {
    id: 1,
    path: "projects",
    element: <Projects />,
  },
  {
    id: 2,
    path: "services",
    element: <Services />,
  },
  {
    id: 3,
    path: "aboutus",
    element: <AboutUs />,
  },
  {
    id: 4,
    path: "terms",
    element: <TermsAndConditions />,
  },
  {
    id: 5,
    path: "privacy",
    element: <Privacy />,
  },
  {
    id: 6,
    path: "contact",
    element: <ContactUs />,
  },
  {
    id: 7,
    path: "/services/chronicles",
    element: <EastSideChronicles />,
  },
  {
    id: 8,
    path: "studio",
    element: <ThriveEastStudio />,
  },
  {
    id: 9,
    path: "propertycare",
    element: <EastNestPropertyCare />,
  },
  {
    id: 10,
    path: "thrivestore",
    element: <ThriveStore />,
  },
  {
    id: 11,
    path: "homestay",
    element: <EastNestHomeStay />,
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
