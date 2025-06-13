import "./index.css";
import Landing from "./pages/Landing";
import data from "/data";
import Modal from "./components/feedback/Modal";
import { useEffect, useState } from "react";
import Login from "./components/feedback/Login";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (clickedItem) => {
    console.log("Clicked item:", clickedItem);
    setSelectedItem(clickedItem);
    setShowModal(true);
  };

  const handleApplyCoupon = () => {
    setShowModal(false);
    setShowLogin(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
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
          isLoggedIn={isLoggedIn}
        />
      )}
      {showLogin && (
        <Login
          visible={true}
          onClose={() => setShowLogin(false)}
          onLoginSuccess={() => setIsLoggedIn(true)}
        />
      )}
      <div className="container">
        <Landing onClick={handleClick} />
      </div>
    </main>
  );
}

export default App;
