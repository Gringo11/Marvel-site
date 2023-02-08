import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ComicsCards } from "./ComicsCards";
import "./comics.css";
import banner from "../../images/Banner.png";

export const Comics = () => {
  const comic = useSelector((state) => state.comics);
  const [comicsCard, setComicsCard] = useState(8);
  const dispatch = useDispatch();

  function loadMoreComicsCards() {
    setComicsCard(comicsCard + 4);
  }

  async function fetchComics() {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/comics?limit=30&apikey=be2f579e4ea247841b74bbb3fb8e7292`
    );
    const data = await response.json();
    console.log(data);
    dispatch({
      type: "MORE_COMICS",
      payload: {
        comics: data.data.results,
      },
    });
  }

  useEffect(() => {
    fetchComics();
  }, []);

  return (
    <>
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="comics-cards">
        {comic.slice(0, comicsCard).map((item) => (
          <ComicsCards key={item} item={item} />
        ))}
        <button className="load-more" onClick={loadMoreComicsCards}>
          LOAD MORE
        </button>
      </div>
    </>
  );
};
