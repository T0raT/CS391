import { Link } from "react-router-dom";
import useSWR from "swr";

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

export function ManufacturerList() {
  const { data, error, isLoading } = useSWR(
    "https://my-json-server.typicode.com/T0raT/mp4jsonserver/lists",
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

  return data.map((manufacturer) => (
    <Link key={manufacturer.id} to={`/${manufacturer.id}`}>
      <button className="group relative m-auto mt-10 inline-flex h-[5rem] w-[10rem] min-w-0 items-center justify-center self-center overflow-hidden rounded-md bg-neutral-950 font-medium text-neutral-200 transition hover:scale-110">
        <span>{manufacturer.manufacturer}</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20"></div>
        </div>
      </button>
    </Link>
  ));
}
