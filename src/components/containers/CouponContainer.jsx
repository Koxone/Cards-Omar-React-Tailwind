import React from "react";
import CouponCard from "../cards/CouponCard";
import CouponCardV3 from "../cards/CouponCardV3";
import PromotionsBanner from "../cards/PromotionsBanner";
import RegionSelector from "../inputs/RegionSelector";
import data from "/data";

function CouponContainer({ onClick }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="flex w-full items-center justify-between gap-10">
        <PromotionsBanner />
        <RegionSelector />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 p-4">
        {data.map((item, index) => (
          <CouponCardV3
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
          />
        ))}
      </div>
    </div>
  );
}

export default CouponContainer;
