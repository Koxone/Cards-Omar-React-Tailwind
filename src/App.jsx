import "./index.css";
import WalletCard from "./components/cards/WalletCard";
import CouponCard from "./components/cards/CouponCard";
import CouponCardV3 from "./components/cards/CouponCardV3";
import Landing from "./components/test/Landing";
import data from "/data";
import UsoGPT03 from "./components/test/UsoGPT03";

function App() {
  return (
    <div className="flex h-screen flex-col items-center gap-3 overflow-x-hidden">
      {/* {data.map((item, index) => (
        <CouponCard
          key={index}
          promo={item.promo}
          logo={item.logo}
          name={item.name}
          validUntil={item.valid}
        />
      ))} */}

      {/* {data.map((item, index) => (
        <CouponCardV3
          key={index}
          promo={item.promo}
          logo={item.logo}
          categorie={item.categorie}
          validUntil={item.valid}
        />
      ))} */}

      {data.map((item, index) => (
        <WalletCard
          key={index}
          promo={item.promo}
          logo={item.logo}
          categorie={item.categorie}
          validUntil={item.valid}
        />
      ))}

      {/* <CouponCardV3 promo="25% off" categorie="Restaurant" /> */}
      {/* <WalletCard name="KFC" promo="25%" service="buy" /> */}
    </div>
  );
}

export default App;
