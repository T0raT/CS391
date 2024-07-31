import { useState } from "react";
import { Suspense, lazy } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import AppContext from "./context/AppContext.jsx";

const Lists = lazy(() => import("./pages/Lists.jsx"));
const ListDetail = lazy(() => import("./pages/ListDetail.jsx"));
const ListForm = lazy(() => import("./pages/ListForm.jsx"));

function App() {
  return (
    <>
      <div className="h-full w-full">
        <BrowserRouter>
          <Header />
          <div className="flex h-auto w-full flex-col items-center pb-10">
            <Suspense fallback={<div>Loading...</div>}>
              <AppContext>
                <Routes>
                  <Route
                    path="/tigerliu/cs391/projects/mini-projects/mp4/dist/"
                    element={<Lists />}
                  />
                  <Route
                    path="/tigerliu/cs391/projects/mini-projects/mp4/dist/list/:listId/new"
                    element={<ListForm />}
                  />
                  <Route
                    path="/tigerliu/cs391/projects/mini-projects/mp4/dist/list/:listId"
                    element={<ListDetail />}
                  />
                </Routes>
              </AppContext>
            </Suspense>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
