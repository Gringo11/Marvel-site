import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeroesCards } from "./HeroesCards";
import "./heroes.css";
import image from "../../images/Sulim.png";
import thor from "../../images/Decoration.png";
import { TapToHero } from "./TapToHero";
import { Link } from "react-router-dom";

export const Heroes = () => {
  const hero = useSelector((state) => state.heroes);
  const [heroCard, setHeroCard] = useState(9);
  const dispatch = useDispatch();
  const [selectedCard, setSelectedCard] = useState({});
  const [defaultRandomHero, setDefaultRandomHero] = useState("");
  const [randomHero, setRandomHero] = useState("");
  function loadMoreHeroesCards() {
    setHeroCard(heroCard + 3);
  }

  function clickOnImage(heroes) {
    setSelectedCard(heroes);
  }

  async function fetchHeroes() {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?limit=30&apikey=be2f579e4ea247841b74bbb3fb8e7292`
    );
    const data = await response.json();
    setDefaultRandomHero(data.data.results[4]);
    setRandomHero(data.data.results);
    dispatch({
      type: "MORE_HEROES",
      payload: {
        heroes: data.data.results,
      },
    });
  }

  function clickOnButtonTry() {
    const randomIndex = Math.floor(Math.random() * (randomHero.length - 1));
    const result = randomHero[randomIndex];
    setDefaultRandomHero(result);
  }

  useEffect(() => {
    fetchHeroes();
  }, []);

  return (
    <>
      <div className="random-hero">
        <div className="heroes-block">
          <img
            className="img"
            src={`${defaultRandomHero.thumbnail?.path}.${defaultRandomHero.thumbnail?.extension}`}
            alt={defaultRandomHero.name}
          />
          <div className="random-hero-info">
            <p className="random-hero-name">{defaultRandomHero.name}</p>
            <p className="random-hero-text">{defaultRandomHero.description}</p>
          </div>
          <div>
            {/* <Link key={selectedCard} to={`/character/${selectedCard.id}`}>
              <button className="homepage-button">Homepage</button>
            </Link>
            <Link key={selectedCard.id} to={selectedCard.urls[1].url}>
              <button className="wiki-button">Wiki</button>
            </Link> */}
          </div>
        </div>
        <div className="button-to-try-block">
          <div className="random-character">
            <p className="txt">Random character for today!</p>
            <p className="txt">Do you want to get to know him better?</p>
          </div>
          <div className="random-choose">Or choose another one</div>
          <div>
            <button className="try-it" onClick={clickOnButtonTry}>
              TRY IT
            </button>
          </div>
        </div>
        <div className="capitan-thor">
          <img className="thor" src={thor} />
        </div>
      </div>
      <div className="container-for-display-flexing">
        <div className="hero-cards">
          {hero.slice(0, heroCard).map((item) => (
            <HeroesCards
              item={item}
              clickOnImage={clickOnImage}
              selectedCard={selectedCard}
            />
          ))}
          <div>
            <button className="load-more" onClick={loadMoreHeroesCards}>
              LOAD MORE
            </button>
          </div>
        </div>
        <TapToHero selectedCard={selectedCard} />
        <img src={image} alt="image" className="low-image" />
      </div>
    </>
  );
};
