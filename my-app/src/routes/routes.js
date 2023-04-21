import { createBrowserRouter } from "react-router-dom"
import MainPage from "../pages/MainPage"
import AboutPage from '../pages/AboutPage'
import PortfolioPage from "../pages/PortfolioPage"
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />
  },
]);
export default router
