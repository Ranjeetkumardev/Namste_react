import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "./constrants";

// this is a custome Hooks
const useRestaurant = (resId) => {
  const [restoMenu, setRestoMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setRestoMenu(json.data);
  }
  return restoMenu;
};

export default useRestaurant;
