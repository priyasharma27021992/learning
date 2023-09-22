import { IMG_URL } from "../utils/constants";


export default RestaurantCard = ({resData}) => {
    const {info} = resData;
    const {avgRating, name, totalRatingsString, cloudinaryImageId} = info;
    return(
        <div className="res-card">
            <img src={`${IMG_URL}/${cloudinaryImageId}`} alt="Food Pic" height="200px" width="200px"/>
            <div>{name}</div>
            <div>{totalRatingsString}</div>
            <div>Cost for two: {avgRating}</div>
        </div>
    )
}