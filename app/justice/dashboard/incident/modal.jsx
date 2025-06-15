import React, { useState } from "react";
import IncidentReport from "./incident-report/page";

const ConfirmStaff = ({ isOpen, onClose }) => {
  
  const [isUserRequestOpen, setUserRequestOpen] = useState(false);
  
  if (!isOpen) return null;

  const handleOpenUserRequest = () => {
    setUserRequestOpen(true);
  };

  const handleCloseUserRequest = () => {
    setUserRequestOpen(false);
  };

  const handleClose = () => {
    onClose(); 
    // window.location.reload();
  };

  return (
    <div className="modal">
      <div className="modal__overlay"></div>
      <div className="modal__added-notif">
        Is your staff registered to <br /> our platform
        <div>
          <button className="yes-btn" onClick={handleOpenUserRequest}>Yes</button>
          <button className="no-btn" onClick={handleClose}>No</button>

          <IncidentReport
            isOpen={isUserRequestOpen}
            onClose={handleCloseUserRequest}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmStaff;
