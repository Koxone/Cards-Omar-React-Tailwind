import CouponContainer from "../components/containers/CouponContainer";
import data from "/data";

function Landing({ onClick }) {
  return (
    <div className="">
      <CouponContainer onClick={onClick} />
    </div>
  );
}

export default Landing;
