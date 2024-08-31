import { Button } from "@nextui-org/react";
import { useState } from "react";
import Modal from "../LoginPage/modal";
import Prediction from "./Prediction";

function Predictionbtn() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="text-center mb-14 bg-blue-50 hover:bg-blue-200 p-8 text-black relative">
      <p className="text-2xl font-bold">Predict Price of your dream home</p>
      <p>(It's a Machine Learning model which can predict the price of your dream home as per your requirement)</p>
      
      <Button
        color="danger"
        variant="ghost"
        className="border-1 border-white h-7 bg-pink-600 text-white font-semibold"
        onClick={() => setShowModal(true)}
      >
        Predict Price 
      </Button>

      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <Prediction />
      </Modal>
    </div>
  );
}

export default Predictionbtn;
