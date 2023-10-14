export default ItemCardShimmer = () => {
  return (
    <div className="item-card-shimmer">
      {new Array(10).fill(0).map((ele) => (
        <div className="flex-row justify-space-between item-card-container">
          <div>
            <div className="name"></div>
            <div className="name"></div>
          </div>
          <div className="img"></div>
        </div>
      ))}
    </div>
  );
};
