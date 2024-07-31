import { useEffect, useContext } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import ItemsContext from "../context/ItemsContext.jsx";
import ListsContext from "../context/ListsContext.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import ListItem from "../components/ListItem/ListItem.jsx";

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

function ListDetail() {
  let navigate = useNavigate();
  const { listId } = useParams();

  const { loading, error, items, fetchItems } = useContext(ItemsContext);
  const { list, fetchList } = useContext(ListsContext);

  useEffect(() => {
    console.log("useEffect for fetchItems called with listId:", listId);
    if (listId) {
      fetchItems(listId);
    }
  }, [fetchItems, listId]);

  useEffect(() => {
    console.log("useEffect for fetchList called with listId:", listId);
    listId && fetchList(listId);
  }, [fetchList, listId]);

  console.log("listId passed from params: ", listId);
  return (
    <>
      {navigate && (
        <NavBar
          goBack={() => navigate(-1)}
          openForm={() =>
            navigate(
              `/tigerliu/cs391/projects/mini-projects/mp4/dist/list/${listId}/new`,
            )
          }
          title={list && list.manufacturer}
        />
      )}
      <ListItemWrapper>
        <p className="self-center text-white">
          I believe no new items can be actually saved since Changes aren't
          persisted between calls to "my-json-server.typicode.com" as per the
          website instructions.
        </p>
        {loading || error ? (
          <span>{error || "Loading..."}</span>
        ) : (
          items.map((item) => (
            <ListItem
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
        )}
      </ListItemWrapper>
    </>
  );
}

export default ListDetail;
