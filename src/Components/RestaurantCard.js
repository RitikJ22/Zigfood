import { IMG_CDN_URL } from "../utils/Config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwo,
  sla,
  
}) => {
  //const { cloudinaryImageId , name , cuisines , avgRating , lastMileTravelString } = restaurant.data;

  return (
    <div className="m-2 p-4 justify-items-center w-[300px]  duration-300 hover:scale-105 hover:border-b-4
    max-w-md max-h-[450] bg-white shadow-md rounded-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={IMG_CDN_URL + cloudinaryImageId}
      />

      <h2 className="font-bold py-4 text-lg whitespace-nowrap">{name}</h2>
      <h4 className="whitespace-nowrap">{cuisines?.join(" ,")}</h4>
      <h4> {avgRating}Stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.slaString} </h4>
      <h4>{sla.lastMileTravelString}Away</h4>
    </div>
  );
};

export const withPromotedLabel =(RestaurantCard)=>{

  return (props)=>{
    return(<div>
      <label className="absolute bg-black text-white m-2 p-2"> Promoted </label>
      <RestaurantCard {...props}/>
    </div>
);
    
};
};

export default RestaurantCard;
