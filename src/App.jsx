import "./index.css";
import WalletCard from "./components/cards/WalletCard";
import CouponCard from "./components/cards/CouponCard";
import CouponCardV3 from "./components/cards/CouponCardV3";
import data from "/data";

function App() {
  return (
    <div className="grid h-screen grid-cols-3 gap-3">
      <div className="flex flex-col gap-4">
        {data.map((item, index) => (
          <CouponCard
            key={index}
            promo={item.promo}
            logo={item.logo}
            name={item.name}
            validUntil={item.valid}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {data.map((item, index) => (
          <CouponCardV3
            key={index}
            promo={item.promo}
            logo={item.logo}
            categorie={item.categorie}
            validUntil={item.valid}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {data.map((item, index) => (
          <WalletCard
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

      {/* <CouponCardV3 promo="25% off" categorie="Restaurant" /> */}
      {/* <WalletCard name="KFC" promo="25%" service="buy" /> */}
    </div>
  );
}

export default App;
