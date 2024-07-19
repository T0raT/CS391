import {BrowserRouter, createBrowserRouter, Outlet, Route, RouterProvider, Routes} from "react-router-dom";
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import './App.css'
import logo from "./assets/logo.svg"
import PropTypes from "prop-types";
import ReactDOM from "react-dom/client";


Profile.propTypes = {
  userName: PropTypes.string
};

const router = createBrowserRouter([
  {path: "/", element:<Layout />, children: [
      {path: "/", element: <Profile userName='T0raT' />},
      {path: "/projects", element:<Projects userName='T0raT'/> },
      {path: "/projects/:name", element:<ProjectDetail userName='T0raT'/> },
    ]},
  {path: "*", element: <div>404, page does not exist</div>},
]);

function Layout() {
  return (
      <>
        <Header logo={logo} />
        <Outlet/>
      </>
  )
}


export default function App() {

  return (
        <div className='App'>
          <RouterProvider router={router} />
        </div>
  )
}