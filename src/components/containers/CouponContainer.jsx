import React, { useEffect, useState } from "react";
import CouponCardMobile from "../cards/CouponCardMobile";
import CouponCardDesktop from "../cards/CouponCardDesktop";
import PromotionsBanner from "../cards/PromotionsBanner";
import RegionSelector from "../inputs/RegionSelector";
import data from "/data";

function CouponContainer({ onClick, region, setRegion }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 408);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 408);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredData =
    region && region !== "all"
      ? data.filter(
          (item) => item.region.toLowerCase() === region.toLowerCase(),
        )
      : data;

  return (
    <div className="flex max-w-[1280px] flex-col justify-center gap-4 p-4 sm:items-start">
      <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row md:gap-10">
        <PromotionsBanner />
        <RegionSelector onChange={setRegion} />
      </div>

      <div className="grid w-full auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {isMobile
          ? filteredData.map((item, index) => (
              <CouponCardMobile
                key={index}
                promo={item.promo}
                name={item.name}
                logo={item.logo}
                service={item.service}
                conditions={item.conditions}
                categorie={item.categorie}
                validUntil={item.valid}
                onClick={onClick}
                description={item.description}
                region={item.region}
                id={item.id}
              />
            ))
          : filteredData.map((item, index) => (
              <CouponCardDesktop
                key={index}
                promo={item.promo}
                name={item.name}
                logo={item.logo}
                service={item.service}
                conditions={item.conditions}
                categorie={item.categorie}
                valid={item.valid}
                onClick={onClick}
                description={item.description}
                region={item.region}
                id={item.id}
              />
            ))}
      </div>
    </div>
  );
}

export default CouponContainer;
