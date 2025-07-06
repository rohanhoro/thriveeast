import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Privacy from "./pages/Privacy";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import TermsAndConditions from "./pages/TermsAndConditions";

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
