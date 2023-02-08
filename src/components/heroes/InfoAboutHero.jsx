import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import banner from "../../images/Banner.png";
import "./infoabouthero.css";

export const InfoAboutHero = () => {
  const { id } = useParams();
  const selectedCard = useSelector((state) => state.heroes).find(
    (item) => item.id === Number(id)
  );
  return (
    <>
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="wrapper">
        <div className="just-block-for-formate">
          <img
            className="hero-photo"
            src={`${selectedCard.thumbnail?.path}.${selectedCard.thumbnail?.extension}`}
            alt={selectedCard.name}
          />
          <div className="main-information">
            <h2 className="name-heroes">{selectedCard.name}</h2>
            <p className="description">{selectedCard.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
