import React from "react";
import CouponCard from "../cards/CouponCard";
import CouponCardV3 from "../cards/CouponCardV3";
import WalletCard from "../cards/WalletCard";
import data from "/data";

function CouponContainer() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      {data.map((item, index) => (
        <WalletCard
          key={index}
          name={item.name}
          validUntil={item.validUntil}
          promo={item.promo}
          logo={item.logo}
        />
      ))}
    </div>
  );
}

export default CouponContainer;
