import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import './App.css'
import logo from "./assets/logo.svg"
import PropTypes from "prop-types";


Profile.propTypes = {
  userName: PropTypes.string
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider
        router={router}
        fallbackElement={<BigSpinner />}
    />
);


function App() {

  return (
        <div className='App'>
          <BrowserRouter>
            <Header logo={logo}/>
            <Routes>
              <Route path='/' element={<Profile userName='T0raT'/>}/>
              <Route path='/projects' element={<Projects userName='T0raT'/>}/>
              <Route
                  path='/projects/:name'
                  element={<ProjectDetail userName='T0raT'/>}
              />
            </Routes>
          </BrowserRouter>
        </div>
  )
}

export default App
