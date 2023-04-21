import { createBrowserRouter } from "react-router-dom"
import MainPage from "../pages/MainPage"
import AboutPage from '../pages/AboutPage'
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
]);

export default router
