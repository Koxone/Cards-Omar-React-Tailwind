import React from "react";
import CouponCard from "../cards/CouponCard";
import CouponCardV3 from "../cards/CouponCardV3";
import WalletCard from "../cards/WalletCard";
import PromotionsBanner from "../cards/PromotionsBanner";
import RegionSelector from "../inputs/RegionSelector";
import data from "/data";

function CouponContainer() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="flex items-center justify-between w-full gap-10">
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
            details={item.details}
            categorie={item.categorie}
            validUntil={item.valid}
          />
        ))}
      </div>
    </div>
  );
}

export default CouponContainer;
