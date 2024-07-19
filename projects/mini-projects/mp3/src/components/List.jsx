import styled from "styled-components";
import PropTypes from "prop-types";

const StyledUl = styled.ul`
    list-style: none;
    padding: 0;
    text-align: left;

    li {
        display: flex;
        justify-content: center;
    }

    li span {
        font-weight: 600;
    }
`

function List({ items }) {
  return (
    <StyledUl>
      {items.map((item) => (
        <li key={item.field}>
          <span>{item.field}: </span>
          {item.value}
        </li>
      ))}
    </StyledUl>
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired,
}

export default List;
