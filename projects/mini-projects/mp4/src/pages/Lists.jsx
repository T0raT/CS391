import styled from "styled-components";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar.jsx";
import ListsContext from "../context/ListsContext.jsx";

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5%;
`;

const Lists = () => {
  let navigate = useNavigate();

  const { loading, error, lists, fetchLists } = useContext(ListsContext);

  useEffect(() => {
    !lists.length && fetchLists();
  }, [fetchLists, lists]);

  return (
    <>
      {navigate && <NavBar title="Select Manufacturer" />}
      <div className="flex flex-col transition lg:flex-row">
        {loading || error ? (
          <span>{error || "Loading..."}</span>
        ) : (
          lists.map((list) => (
            <Link key={list.id} to={`list/${list.id}`}>
              <button className="group relative m-auto mt-10 inline-flex h-[5rem] w-[10rem] min-w-0 items-center justify-center self-center overflow-hidden rounded-md bg-neutral-950 text-calc-base font-medium text-neutral-200 transition hover:scale-110 lg:mx-5">
                <span>{list.manufacturer}</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20"></div>
                </div>
              </button>
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Lists;
