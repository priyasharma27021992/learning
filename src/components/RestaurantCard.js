import { IMG_URL, RES_MENU_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default RestaurantCard = ({ resData }) => {
  const { info = {} } = resData;
  const {
    avgRating = 0,
    name = "",
    totalRatingsString = "",
    cloudinaryImageId = "",
    id,
  } = info;
  return (
    <Link to={"/restaurants/" + id} className="no-style-link">
      <div className="res-card">
        <img
          src={`${IMG_URL}/${cloudinaryImageId}`}
          alt="Food Pic"
          className="img"
        />
        <div className="card-name">{name}</div>
        <div className="card-ratings">{totalRatingsString}</div>
        <div className="card-cost">Cost for two: {avgRating}</div>
      </div>
    </Link>
  );
};
