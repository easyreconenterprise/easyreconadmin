import React, { useState } from "react";
import ResetMonth from "./ResetMonth"; // Import the modal component
import UnlockAct from "./UnlockAct";

const UnlockLayout = () => {
  const [openModal, setOpenModal] = useState(true); // Modal opens by default

  // Modal Handlers
  const handleOpenUnlockAccountModal = () => setOpenModal(false);

  return (
    <div>
      {/* Modal Component */}
      <UnlockAct
        open={openModal}
        onClose={handleOpenUnlockAccountModal}
        onSubmit={() => {
          handleOpenUnlockAccountModal();
        }}
      />
    </div>
  );
};

export default UnlockLayout;
