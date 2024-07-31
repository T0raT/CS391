import { ProductList } from "./components/ProductList.jsx";
import useSWR from "swr";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-full w-full">
      <header className="bg-[#9d0020] py-5 text-center font-futura text-4xl text-white">
        Guitar Store Admin Panel
      </header>
      <main className="flex h-auto w-full flex-col items-center pb-10">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
