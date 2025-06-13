import "./index.css";
import WalletCard from "./components/cards/WalletCard";
import CouponCard from "./components/cards/CouponCard";
import CouponCardV3 from "./components/cards/CouponCardV3";
import Landing from "./pages/Landing";
import data from "/data";
import Modal from "./components/feedback/Modal";
import { useEffect, useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (clickedItem) => {
    console.log("Clicked item:", clickedItem);
    setSelectedItem(clickedItem);
    setShowModal(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {showModal && selectedItem && (
        <Modal
          visible={true}
          onClose={() => setShowModal(false)}
          logo={selectedItem.logo}
          name={selectedItem.name}
          categorie={selectedItem.categorie}
          details={selectedItem.details}
          validUntil={selectedItem.valid}
          description={selectedItem.description}
        />
      )}
      <div className="container">
        <Landing onClick={handleClick} />
      </div>
    </main>
  );
}

export default App;
