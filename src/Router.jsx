import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Components/Layout/RootLayout";

import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import LawLensPage from './routes/LawLensPage';
import OpenWayPage from './routes/OpenWayPage';
import FarmGuardPage from './routes/FarmGuardPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/lawlens", element: <LawLensPage /> },
      { path: "/projects/openway", element: <OpenWayPage /> },
      { path: "/projects/farmguard", element: <FarmGuardPage /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
