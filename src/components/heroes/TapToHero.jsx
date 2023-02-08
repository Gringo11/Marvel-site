import { Link } from "react-router-dom";
import "./taptohero.css";

export const TapToHero = ({ selectedCard }) => {
  return (
    <>
      {Object.keys(selectedCard).length > 0 ? (
        <div className="all-block">
          <div className="flexing-block">
            <img
              className="pictures-of-heroes"
              src={`${selectedCard.thumbnail?.path}.${selectedCard.thumbnail?.extension}`}
              alt={selectedCard.name}
            />
            <div className="information-block">
              <h2 className="name-of-heroes">
                {selectedCard.name.length > 16
                  ? `${selectedCard.name.substring(0, 16)}...`
                  : selectedCard.name}
              </h2>
              <Link key={selectedCard} to={`/character/${selectedCard.id}`}>
                <button className="homepage-button">Homepage</button>
              </Link>
              <Link key={selectedCard.id} to={selectedCard.urls[1].url}>
                <button className="wiki-button">Wiki</button>
              </Link>
            </div>
          </div>
          <p className="description-right-block">{selectedCard.description}</p>
        </div>
      ) : (
        <div className="shadow-blocks">
          <h1 className="text">Please select a character to see information</h1>
          <div className="shadow">
            <div className="shadow-circle"></div>
            <div className="shadow-string"></div>
          </div>
          <div className="shadow-block"></div>
          <div className="shadow-block"></div>
          <div className="shadow-block"></div>
        </div>
      )}
    </>
  );
};
