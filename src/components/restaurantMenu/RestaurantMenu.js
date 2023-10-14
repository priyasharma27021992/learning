import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";
import NameCard from "./NameCard";
import ItemCards from "./ItemCards";
import Separator from "../common/Separator";
import Collapsible from "../common/Collapsible";
import { itemCategoryType } from "../../types/common";
import ItemCardShimmer from "./ItemCardShimmer";

export default RestaurantMenu = () => {
  const [menuData, setMenuData] = useState();
  const [multipleCards, setMultipleCards] = useState([]);
  const { id } = useParams();

  console.log("params", id);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(RES_MENU_URL + id);
    const json = await response.json();
    setMenuData(json?.data);
    const regularCards =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const multipleItemCards =
      (regularCards.length &&
        regularCards.filter(
          (regularCard) =>
            "itemCards" in regularCard?.card?.card &&
            Array.isArray(regularCard?.card?.card?.itemCards)
        )) ||
      [];
    setMultipleCards(multipleItemCards);
    console.log("json?.data", multipleItemCards);
  };

  if (!multipleCards || (multipleCards && !multipleCards.length))
    return <ItemCardShimmer />;

  return (
    <div className="res-menu-container">
      <div className="res-menu flex-col">
        <NameCard menuData={menuData?.cards[0]?.card?.card?.info || {}} />
        <Separator />
        {multipleCards.map((cards) => {
          const itemCards = cards?.card?.card?.itemCards || [];
          return (
            <Collapsible
              title={cards?.card?.card?.title}
              key={itemCards[0]?.info?.id}
            >
              <ItemCards itemCards={itemCards} />
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
};
