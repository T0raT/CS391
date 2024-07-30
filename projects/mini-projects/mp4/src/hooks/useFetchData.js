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

export default async function useFetchData() {
  const { data, error, isLoading } = await useSWR(
    "https://my-json-server.typicode.com/T0raT/mp4jsonserver/items",
    fetcher,
  );
  return { data, error, isLoading };
}