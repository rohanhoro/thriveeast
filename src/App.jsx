import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Button from "./components/Button";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import TermsAndConditions from "./pages/TermsAndConditions";

const routes = [
  {
    id: 1,
    path: "Projects",
    element: <Projects />,
  },
  {
    id: 2,
    path: "Services",
    element: <Services />,
  },
  {
    id: 3,
    path: "AboutUs",
    element: <AboutUs />,
  },
  {
    id: 4,
    path: "terms",
    element: <TermsAndConditions />,
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
