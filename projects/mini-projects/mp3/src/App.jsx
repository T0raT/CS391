import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
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
  { path: "/", element: <Profile userName="T0raT"/> },
  { path: "*", element: <Root /> },

]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {

  return (
        <div className='App'>
            <Header logo={logo}/>
            <Routes>
              <Route path='/projects' element={<Projects userName='T0raT'/>}/>
              <Route
                  path='/projects/:name'
                  element={<ProjectDetail userName='T0raT'/>}
              />
            </Routes>
        </div>
  )
}
