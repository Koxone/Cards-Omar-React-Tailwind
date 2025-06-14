import React, { useEffect, useState } from "react";

function CouponCardV3({
  name,
  valid,
  promo,
  categorie,
  conditions,
  description,
  logo,
  onClick,
}) {
  const [bgColor, setBgColor] = useState("");
  useEffect(() => {
    const color = window.getComputedStyle(document.body).backgroundColor;
    setBgColor(color);
  });
  return (
    <div>
      <div className="cards-items-omar">
        <div className="top">
          <h2>25% OFF</h2>
          <p>Fast food</p>
        </div>
        <div className="cards-items-omar-middle">
          <div className="cards-items-omar-middle-one"></div>
          <div className="cards-items-omar-middle-two"></div>
          <div className="cards-items-omar-middle-three"></div>
        </div>
        <div className="bottom">
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
}

export default CouponCardV3;
