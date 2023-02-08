import { Link } from "react-router-dom";

export const ComicsCards = ({ item }) => {
  return (
    <div className="comics-card" key={item.id}>
      <Link to={`/comics/${item.id}`}>
        <img
          className="img"
          src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
          alt={item.title}
        />
      </Link>
      <div className="title">{item.title}</div>
      <div className="price-comic">
        {item.prices[0].price === 0
          ? "NOT AVAILABLE"
          : `${item.prices[0].price} $`}
      </div>
    </div>
  );
};
