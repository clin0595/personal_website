import App from "./App";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/projects", element: <Projects /> },
            { path: "/about", element: <About /> }
        ]
    }

];

export default routes;
