export default ItemCards = ({ itemCards }) => {
  if (!itemCards.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="regular-card">
      {itemCards?.map((itemCard) => {
        const { name, id, imageId } = itemCard?.card?.info;
        return (
          <div key={id} className="dish-item flex-row justify-space-between">
            <div className="name">{name}</div>
            <div>
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${imageId}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
