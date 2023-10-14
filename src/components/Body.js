import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { RES_URL } from "../utils/constants";
import Shimmer from './Shimmer';

export default Body = () => {
  const [topRestaurantList, setTopRestaurantList] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async () => {
    const resData = await fetch(RES_URL);
    const json = await resData.json();
    const { restaurants = [] } = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle;
    setListOfRestaurants(restaurants);
  }
  if (listOfRestaurants.length === 0)
    return <Shimmer />

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
        {listOfRestaurants?.map((resCardData) => (
          <RestaurantCard resData={resCardData} />
        ))}
      </div>
    </div>
  );
};
