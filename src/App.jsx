import "./index.css";
import Landing from "./pages/Landing";
import data from "/data";
import Modal from "./components/feedback/Modal";
import { useEffect, useState } from "react";
import Login from "./components/feedback/Login";
import Header from "./components/header/Header";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [region, setRegion] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [language, setLanguage] = useState("en");

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
    <main className="flex min-h-screen flex-col items-center justify-start">
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
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn", "true");
          }}
        />
      )}
      <Header />
      <div className="container">
        <Landing onClick={handleClick} region={region} setRegion={setRegion} />
      </div>
    </main>
  );
}

export default App;
