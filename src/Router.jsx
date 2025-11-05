import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from './routes/Home';
import About from './routes/About.jsx';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import RideLocalPage from './routes/RideLocalPage';
import GoldenAmplePage from './routes/GoldenAmplePage';
import EdgeconPage from './routes/EdgeconPage';

export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/home', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/projects', element: <Projects /> },
    { path: '/projects/ridelocal', element: <RideLocalPage /> },
    { path: '/projects/goldenample', element: <GoldenAmplePage /> },
    { path: '/projects/edgecon', element: <EdgeconPage /> },
    { path: '/contact', element: <Contact /> },
]);
