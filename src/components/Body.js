import RestaurantCard from "./RestaurantCard";

export default Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="restaurant-container">
            <RestaurantCard />
        </div>
      </div>
    );
  };