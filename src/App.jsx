import "./index.css";
import data from "/data";
import Modal from "./components/feedback/Modal";
import { useEffect, useState } from "react";
import { useReservationContext } from "./context/ReservationContext";
import Login from "./components/feedback/Login";
import CouponContainer from "./components/containers/CouponContainer";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [region, setRegion] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const { isLoggedIn, setIsLoggedIn } = useReservationContext();

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleClick = (clickedItem) => {
    setSelectedItem(clickedItem);
    setShowModal(true);
  };

  const handleApplyCoupon = () => {
    setShowModal(false);
    setShowLogin(true);
  };

  return (
    <div className="mb-[50px] flex justify-center">
      <main className="flex justify-center">
        {showModal && selectedItem && !showLogin && (
          <Modal
            visible={true}
            onClose={() => setShowModal(false)}
            logo={selectedItem.logo}
            name={selectedItem.name}
            categorie={selectedItem.categorie}
            details={selectedItem.details}
            validUntil={selectedItem.valid}
            description={selectedItem.description}
            onApply={handleApplyCoupon}
            id={selectedItem.id}
          />
        )}
        {showLogin && (
          <Login visible={true} onClose={() => setShowLogin(false)} />
        )}
        <div className="container">
          <CouponContainer
            region={region}
            setRegion={setRegion}
            onClick={handleClick}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
