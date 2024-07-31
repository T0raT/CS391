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

function getFinishColor(color) {
  switch (color) {
    case "Greenburst":
      return "bg-[#3a6920]";
    case "Natural":
      return "bg-[#936605]";
    case "Dusk Sun Red":
      return "bg-[#9d0020]";
    case "Sunburst":
      return "bg-[#b25f15]";
    case "Desert Sun Yellow":
      return "bg-[#cfdc52]";
    default:
      return "";
  }
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
    <div className="delay-50 font-family mt-10 flex h-auto w-full max-w-[70%] items-center border-y-[0.1rem] border-zinc-300/80 py-5 text-center font-futura text-white transition ease-in-out hover:-translate-y-1 hover:scale-105">
      <div id="item-baisc-info" className="basis-[25%]">
        <img src={imgUrl} alt="Guitar pic here" className="mb-1" />
        <h1 className="text-calc-lg">{name}</h1>
        <p className="text-calc-base">${price}</p>
        <p className="text-calc-base">{stock}</p>
        <p className="text-calc-base">
          {rating === "N/A" ? "N/A" : `${getStarRating(rating)} ${rating}`}
        </p>
      </div>
      <div
        id="item-details-info"
        className="relative flex h-auto basis-[75%] flex-col justify-center"
      >
        <div className="absolute left-3 top-[-1.7rem]">
          <p
            className={`inline rounded-lg px-1 ${type === "Acoustic" ? `bg-[#b57614]` : `bg-[#076678]`} text-calc-base`}
          >
            {type}
          </p>
          <p
            className={`ml-5 inline rounded-lg px-1 ${getFinishColor(finish)} text-calc-base`}
          >
            {finish}
          </p>
        </div>
        <p className="px-4 text-start text-calc-base">{description}</p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.string, // This really should have been a boolean or number
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imgUrl: PropTypes.string,
  type: PropTypes.string,
  finish: PropTypes.string,
  description: PropTypes.string,
};
