import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
import { useState } from "react";

export default Body = () => {
  const [topRestaurantList, setTopRestaurantList] = useState(resData);
  return (
    <div className="body">
      <div>
        <button
          className="find-top-restaurants"
          onClick={() => {
            let filteredResList = topRestaurantList.filter(
              (restaurant) => restaurant?.info?.avgRating > 4
            );
            setTopRestaurantList(filteredResList);
          }}
        >
          Find Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {topRestaurantList?.map((resCardData) => (
          <RestaurantCard resData={resCardData} />
        ))}
      </div>
    </div>
  );
};
