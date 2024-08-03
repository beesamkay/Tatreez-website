import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomepageTrial from "./pages/homepage-trial";
import WelcomePage from "./pages/welcome-page";
import WelcomePage1 from "./pages/welcome-page1";
import MapHover from "./pages/map-hover";
import SideMenu from "./pages/side-menu";
import SymbolsOfAlKhalil from "./pages/symbols-of-al-khalil";
import SymbolsOfRamallah4 from "./pages/symbols-of-ramallah4";
import TatreezOfAlKhalil1 from "./pages/tatreez-of-al-khalil1";
import Ramallah from "./pages/ramallah";
import SymbolsOfAlKhalil1 from "./pages/symbols-of-al-khalil1";
import SymbolsOfRamallah3 from "./pages/symbols-of-ramallah3";
import TatreezOfAlKhalil2 from "./pages/tatreez-of-al-khalil2";
import ColoursOfRamallah from "./pages/colours-of-ramallah";
import SymbolsOfRamallah5 from "./pages/symbols-of-ramallah5";
import SymbolsOfRamallah1 from "./pages/symbols-of-ramallah1";
import ColoursOfAlKhalil1 from "./pages/colours-of-al-khalil1";
import TatreezOfAlKhalil from "./pages/tatreez-of-al-khalil";
import SymbolsOfAlKhalil2 from "./pages/symbols-of-al-khalil2";
import SymbolsOfRamallah2 from "./pages/symbols-of-ramallah2";
import SymbolsOfRamallah from "./pages/symbols-of-ramallah";
import ColoursOfAlKhalil from "./pages/colours-of-al-khalil";

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
      case "/welcome-page":
        title = "";
        metaDescription = "";
        break;
      case "/welcome-page1":
        title = "";
        metaDescription = "";
        break;
      case "/map-hover":
        title = "";
        metaDescription = "";
        break;
      case "/side-menu":
        title = "";
        metaDescription = "";
        break;
      case "/symbols-of-al-khalil-1":
        title = "";
        metaDescription = "";
        break;
      case "/symbols-of-ramallah-10":
        title = "";
        metaDescription = "";
        break;
      case "/tatreez-of-al-khalil-4":
        title = "";
        metaDescription = "";
        break;
      case "/ramallah":
        title = "";
        metaDescription = "";
        break;
      case "/symbols-of-al-khalil-2":
        title = "";
        metaDescription = "";
        break;
      case "/symbols-of-ramallah-9":
        title = "";
        metaDescription = "";
        break;
      case "/tatreez-of-al-khalil-5":
        title = "";
        metaDescription = "";
        break;
      case "/colours-of-ramallah":
        title = "";
        metaDescription = "";
        break;
      case "/symbols-of-ramallah-11":
        title = "";
        metaDescription = "";
        break;
      case "/symbols-of-ramallah-8":
        title = "";
        metaDescription = "";
        break;
      case "/colours-of-al-khalil1":
        title = "";
        metaDescription = "";
        break;
      case "/tatreez-of-al-khalil-1":
        title = "";
        metaDescription = "";
        break;
      case "/symbols-of-al-khalil-3":
        title = "";
        metaDescription = "";
        break;
      case "/symbols-of-ramallah-4":
        title = "";
        metaDescription = "";
        break;
      case "/symbols-of-ramallah-2":
        title = "";
        metaDescription = "";
        break;
      case "/colours-of-al-khalil":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomepageTrial />} />
      <Route path="/welcome-page" element={<WelcomePage />} />
      <Route path="/welcome-page1" element={<WelcomePage1 />} />
      <Route path="/map-hover" element={<MapHover />} />
      <Route path="/side-menu" element={<SideMenu />} />
      <Route path="/symbols-of-al-khalil-1" element={<SymbolsOfAlKhalil />} />
      <Route path="/symbols-of-ramallah-10" element={<SymbolsOfRamallah4 />} />
      <Route path="/tatreez-of-al-khalil-4" element={<TatreezOfAlKhalil1 />} />
      <Route path="/ramallah" element={<Ramallah />} />
      <Route path="/symbols-of-al-khalil-2" element={<SymbolsOfAlKhalil1 />} />
      <Route path="/symbols-of-ramallah-9" element={<SymbolsOfRamallah3 />} />
      <Route path="/tatreez-of-al-khalil-5" element={<TatreezOfAlKhalil2 />} />
      <Route path="/colours-of-ramallah" element={<ColoursOfRamallah />} />
      <Route path="/symbols-of-ramallah-11" element={<SymbolsOfRamallah5 />} />
      <Route path="/symbols-of-ramallah-8" element={<SymbolsOfRamallah1 />} />
      <Route path="/colours-of-al-khalil1" element={<ColoursOfAlKhalil1 />} />
      <Route path="/tatreez-of-al-khalil-1" element={<TatreezOfAlKhalil />} />
      <Route path="/symbols-of-al-khalil-3" element={<SymbolsOfAlKhalil2 />} />
      <Route path="/symbols-of-ramallah-4" element={<SymbolsOfRamallah2 />} />
      <Route path="/symbols-of-ramallah-2" element={<SymbolsOfRamallah />} />
      <Route path="/colours-of-al-khalil" element={<ColoursOfAlKhalil />} />
    </Routes>
  );
}
export default App;
