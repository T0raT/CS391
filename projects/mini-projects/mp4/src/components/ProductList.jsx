import useSWR from "swr";
import { ProductCard } from "./ProductCard.jsx";


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

export function ProductList() {
  const { data, error, isLoading } = useSWR(
    "https://my-json-server.typicode.com/T0raT/mp4jsonserver/items",
    fetcher,
  );


  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    data.map((item) => (
        <ProductCard
          key={item.id}
          name={item.name}
          type={item.type}
          price={item.price}
          stock={item.availability}
          imgUrl={item.image_url}
          rating={item.rating}
          finish={item.finish}
          description={item.description}
        />
      ))
  );
}