import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Navs from "./components/Navs";
import ShoppingPage from "./pages/shopping-page";
import ShoppingPageEmpty from "./pages/shopping-page-empty";
import DashboardLogin from "./pages/dashboard-login";
import ArrowRightCircle from "./pages/arrow-right-circle";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/shopping-page":
        title = "";
        metaDescription = "";
        break;
      case "/shopping-page-empty":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-login":
        title = "";
        metaDescription = "";
        break;
      case "/arrowrightcircle":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Navs />} />
      <Route path="/shopping-page" element={<ShoppingPage />} />
      <Route path="/shopping-page-empty" element={<ShoppingPageEmpty />} />
      <Route path="/dashboard-login" element={<DashboardLogin />} />
      <Route path="/arrowrightcircle" element={<ArrowRightCircle />} />
    </Routes>
  );
}
export default App;
