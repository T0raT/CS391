import { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar.jsx";
import FormItem from "../components/FormItem/FormItem.jsx";
import Button from "../components/Button/Button.jsx";
import ItemsContext from "../context/ItemsContext.jsx";

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const SubmitButton = styled(Button)`
  background: blue;
  margin: 2% 0;
`;

function ListForm() {
  let navigate = useNavigate();
  const { listId } = useParams();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState("");
  const [rating, setRating] = useState("");
  const [finish, setFinish] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");

  const { addItem, items, setItems } = useContext(ItemsContext);

  function onSubmit(e) {
    e.preventDefault();
    if (name && type && price) {
      const newItem = {
        name,
        type,
        price,
        availability,
        rating,
        finish,
        imgUrl,
        description,
        listId,
      };
      addItem(newItem);

      // Update local state to reflect the new item
      items.push(newItem);
    }

    navigate(-1);
  }

  return (
    <>
      {navigate && <NavBar goBack={() => navigate(-1)} title={`Add Item`} />}
      <FormWrapper>
        <form onSubmit={onSubmit}>
          <FormItem
            id="name"
            label="Guitar Model Name"
            placeholder="Insert guitar model name"
            value={name}
            handleOnChange={(e) => setName(e.currentTarget.value)}
          />
          <FormItem
            id="type"
            label="Type"
            placeholder="Electric, Acoustic, etc..."
            value={type}
            handleOnChange={(e) => setType(e.currentTarget.value)}
          />
          <FormItem
            id="price"
            label="Price"
            type="number"
            placeholder="0.00"
            value={price}
            handleOnChange={(e) => setPrice(parseFloat(e.currentTarget.value))}
          />
          <FormItem
            id="availability"
            label="Availability"
            placeholder="In Stock, Out of Stock, etc..."
            value={availability}
            handleOnChange={(e) => setAvailability(e.currentTarget.value)}
          />
          <FormItem
            id="rating"
            label="Rating"
            type="number"
            placeholder="4.5"
            value={rating}
            handleOnChange={(e) => setRating(e.currentTarget.value)}
          />
          <FormItem
            id="finish"
            label="Finish"
            placeholder="Dusk Sun Red, Sunburst, etc..."
            value={finish}
            handleOnChange={(e) => setFinish(e.currentTarget.value)}
          />
          <FormItem
            id="image_url"
            label="Image URL"
            placeholder="Insert image link here..."
            value={imgUrl}
            handleOnChange={(e) => setImgUrl(e.currentTarget.value)}
          />
          <FormItem
            id="description"
            label="Product Description"
            placeholder="Detailed lore..."
            value={description}
            handleOnChange={(e) => setDescription(e.currentTarget.value)}
          />

          <SubmitButton>Add Item</SubmitButton>
        </form>
      </FormWrapper>
    </>
  );
}

export default ListForm;
