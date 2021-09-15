const ItemCard = ({ item }) => {
  const imgStyle = {
    width: "200px",
    height: "200px",
    padding: "5px"
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  return (
    <div className="ItemCard" style={cardStyle}>
      <img src={item.url} alt="" style={imgStyle} />
      <div className="item-title">{item.title}</div>
    </div>
  );
};

export default ItemCard;
