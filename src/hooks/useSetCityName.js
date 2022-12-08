import { useEffect, useState } from "react";

export function useSetCityName(mapInfo) {
  const [cityName, setCityName] = useState(undefined);

  useEffect(() => {
    if (mapInfo) {
      setCityName(
        mapInfo.raw.address.town
          ? mapInfo.raw.address.town
          : mapInfo.raw.address.village
          ? mapInfo.raw.address.village
          : mapInfo.raw.address.city
      );
    }
  }, [mapInfo]);

  return [cityName];
}
