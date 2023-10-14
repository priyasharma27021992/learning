export default NameCard = ({ menuData }) => {
  const {
    name = "",
    cuisines = [],
    areaName = "",
    sla = {},
    avgRatingString = "",
  } = menuData;
  console.log("menuData", menuData);

  return (
    <div className="name-card flex-row">
      <div>
        <div className="title">{name}</div>
        <div>{cuisines?.join(", ")}</div>
        <div>{`${areaName}, ${sla?.lastMileTravelString}`}</div>
      </div>
      <div>{avgRatingString} </div>
    </div>
  );
};
