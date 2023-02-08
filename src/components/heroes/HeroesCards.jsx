export const HeroesCards = ({ item, clickOnImage, selectedCard }) => {
  return (
    <div
      className={`${selectedCard.id === item.id ? "button" : "hero-card"}`}
      key={item.id}
      onClick={() => clickOnImage(item)}
    >
      <img
        className="img"
        src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
        alt={""}
      />
      <p className="name">{item.name}</p>
    </div>
  );
};
