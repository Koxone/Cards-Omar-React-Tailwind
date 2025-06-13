import React, { useEffect, useState } from "react";
import CouponContainer from "../components/containers/CouponContainer";
import CouponCard from "../components/cards/CouponCard";
import data from "/data";

function Landing({ onClick }) {
  return (
    <div className="">
      {/* <Modal  /> */}
      <CouponContainer onClick={onClick} />
      {/* <CouponCard /> */}
    </div>
  );
}

export default Landing;
