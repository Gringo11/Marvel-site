import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./taptocomic.css";
import banner from "../../images/Banner.png";

export const TapToComic = () => {
  const { id } = useParams();
  const selectComic = useSelector((state) => state.comics).find(
    (item) => item.id === Number(id)
  );
  return (
    <>
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="info-about-comic">
        <div className="wrapper">
          <img
            className="comic-photo"
            src={`${selectComic.thumbnail?.path}.${selectComic.thumbnail?.extension}`}
            alt={selectComic.title}
          />
          <div className="comic-info">
            <h2 className="title">{selectComic.title}</h2>
            <p className="main-info">{selectComic.description}</p>
            <p className="pages">{selectComic.pageCount} pages</p>
            <p className="language">Language: en-us</p>
            <span className="price">
              {selectComic.prices[0].price === 0
                ? "NOT AVAILABLE"
                : `${selectComic.prices[0].price} $`}{" "}
            </span>
          </div>
          <div className="back">
            <Link to="/comics">
              <p className="back">Back to all</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
