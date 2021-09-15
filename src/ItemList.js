import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
  const listStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)"
  };

  return (
    <div className="card-container" style={listStyle}>
      {items.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemList;
