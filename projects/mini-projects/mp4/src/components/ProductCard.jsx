import PropTypes from "prop-types";

function getStarRating(rating) {
  const numericRating =
    typeof rating === "string" ? parseFloat(rating) : rating;
  if (isNaN(numericRating) || numericRating < 0) {
    return "N/A";
  }
  const fullStars = Math.floor(numericRating);
  const halfStar = numericRating % 1 >= 0.5 ? 1 : 0;
  let starRating = "★".repeat(fullStars) + "☆".repeat(halfStar);
  return starRating;
}

export function ProductCard(props) {
  const name = props.name;
  const price = props.price;
  const stock = props.stock;
  const rating = props.rating;
  const imgUrl = props.imgUrl;
  const type = props.type;
  const finish = props.finish;
  const description = props.description;
  return (
    // Font sizes uses the calc function with "text-calc-..." you can find the config written in the tailwind.config.js file
    <div
      className="
      text-white border-y-[0.1rem] border-zinc-300/80 
      w-full max-w-[70%] h-auto py-5 mt-10
      text-center flex items-center 
      transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105
      "
    >
      <div id="item-baisc-info" className="basis-[25%]">
        <img src={imgUrl} alt="Guitar pic here" className="mb-1" />
        <h1 className="text-calc-lg">{name}</h1>
        <p className="text-calc-base">{price}</p>
        <p className="text-calc-base">{stock}</p>
        <p className="text-calc-base">
          {rating === "N/A" ? "N/A" : `${getStarRating(rating)} ${rating}`}
        </p>
      </div>
      <div id="item-details-info" className="basis-[70%]">
        <p>{type}</p>
        <p>{finish}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imgUrl: PropTypes.string,
};
