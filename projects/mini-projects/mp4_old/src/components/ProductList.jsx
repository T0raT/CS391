import useSWR from "swr";
import { ProductCard } from "./ProductCard.jsx";
import { useParams } from "react-router-dom";

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

  if (error)
    return (
      <div className="m-auto self-center font-futura text-4xl text-white">
        Failed to load
      </div>
    );
  if (isLoading)
    return (
      <div className="m-auto self-center font-futura text-4xl text-white">
        loading...
      </div>
    );

  let { manufacturerId } = useParams();
  manufacturerId = parseInt(manufacturerId);
  // console.log("manufacturerId:", manufacturerId);

  const filterData = data.filter((item) => item.listId === manufacturerId);
  // console.log("filterData:", filterData);

  return filterData.map((item) => (
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
  ));
}
