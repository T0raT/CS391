import PropTypes from 'prop-types';

function getStarRating(rating) {
    const numericRating = typeof rating === 'string' ? parseFloat(rating) : rating;
    if (isNaN(numericRating) || numericRating < 0) {
        return 'N/A';
    }
    const fullStars = Math.floor(numericRating);
    const halfStar = numericRating % 1 >= 0.5 ? 1 : 0;
    let starRating = '★'.repeat(fullStars) + '☆'.repeat(halfStar);
    return starRating;
}

export function ProductCard(props) {
    const name = props.name;
    const price = props.price;
    const stock = props.stock;
    const rating = props.rating;
    const imgUrl = props.imgUrl;
    return (
        <div className="card-container text-white border-2 border-zinc-300 w-full max-w-[20rem] h-[23rem]">
            <img src={imgUrl} alt="Guitar pic here" className="w-full h-[50%] object-contain"/>
            <p>{name}</p>
            <p>{price}</p>
            <p>{stock}</p>
            <p>{rating === "N/A" ? "N/A" : `${getStarRating(rating)} ${rating}`}</p>
        </div>
    )
}

ProductCard.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    imgUrl: PropTypes.string
}