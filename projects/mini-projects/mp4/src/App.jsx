import { ProductList } from "./components/ProductList.jsx";

function App() {
  return (
    <div className="h-full w-full">
      <header className="bg-[#9d0020] py-5 text-center font-futura text-4xl text-white">
        Guitar Store Admin Panel
      </header>
      <main className="flex h-screen w-screen flex-col items-center overflow-auto pb-10">
        <ProductList />
      </main>
    </div>
  );
}

export default App;
