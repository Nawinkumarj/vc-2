import React from 'react'
import { FaWhatsapp} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";


const EnquireButton = () => {
  return (
    <div class="enquire-container">
  <div class="enquire-button-wrapper">
    <button class="enquire-button">Enquire</button>
    <div class="enquire-option">
      <a href="https://wa.me/+919840488033" target="_blank" class="enquiry-whatsapp">
        <FaWhatsapp />
      </a>
      <a href="tel:+91 9840488033" target="_blank" class="enquiry-call">
        <BsTelephone />
      </a>
    </div>
  </div>
</div>

  );
}

export default EnquireButton