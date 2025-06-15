import CouponContainer from "../components/containers/CouponContainer";
import data from "/data";

function Landing({ onClick, region, setRegion }) {
  return (
    <div className="">
      <CouponContainer
        region={region}
        setRegion={setRegion}
        onClick={onClick}
      />
    </div>
  );
}

export default Landing;
