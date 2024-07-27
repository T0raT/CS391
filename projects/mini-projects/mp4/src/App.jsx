import useSWR from "swr";
import {ProductCard} from "./components/ProductCard.jsx";


async function fetcher(...args) {
    const res = await fetch(...args);
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    // console.log("res: ", res);
    const data = await res.json();
    console.log("data fetching:", data);
    return data;
}

function App() {
    const { data, error, isLoading } = useSWR(
        "https://my-json-server.typicode.com/T0raT/mp4jsonserver/items",
        fetcher,
    );

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    return (
        <div className="flex h-full w-full">
            {/*<nav className="h-screen w-screen max-w-[18%]"></nav>*/}
            <main className="h-screen w-screen grid grid-cols-2 place-items-center">
              {data.map((item) => (
                <ProductCard
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  stock={item.availability}
                  imgUrl={item.image_url}
                  rating={item.rating}
                />
              ))}
            </main>
        </div>
    );
}

export default App;
