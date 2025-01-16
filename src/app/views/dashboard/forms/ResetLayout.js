// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import ResetMonth from "./ResetMonth";

// const ResetLayout = ({ children }) => {
//   const [openWorkingMonthModal, setOpenWorkingMonthModal] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Open the modal if the current path is `/dashboard/reset-month`
//   useEffect(() => {
//     if (location.pathname === "/dashboard/reset-month") {
//       setOpenWorkingMonthModal(true);
//     } else {
//       setOpenWorkingMonthModal(false);
//     }
//   }, [location.pathname]);

//   const handleCloseWorkingMonthModal = () => {
//     setOpenWorkingMonthModal(false);
//     navigate("/dashboard"); // Redirect to the main dashboard after closing
//   };

//   const handleSubmitWorkingModal = (formData) => {
//     console.log("Submitted form data:", formData);
//     handleCloseWorkingMonthModal(); // Close modal after submission
//   };

//   return (
//     <>
//       {children}

//       {openWorkingMonthModal && (
//         <ResetMonth
//           open={openWorkingMonthModal}
//           onClose={handleCloseWorkingMonthModal}
//           onSubmit={handleSubmitWorkingModal}
//         />
//       )}
//     </>
//   );
// };

// export default ResetLayout;

import React, { useState } from "react";
import ResetMonth from "./ResetMonth"; // Import the modal component

const ResetLayout = () => {
  const [openModal, setOpenModal] = useState(true); // Modal opens by default

  // Modal Handlers
  const handleCloseResetMonthModal = () => setOpenModal(false);

  return (
    <div>
      {/* Modal Component */}
      <ResetMonth
        open={openModal}
        onClose={handleCloseResetMonthModal}
        onSubmit={() => {
          alert("Working month reset!");
          handleCloseResetMonthModal();
        }}
      />
    </div>
  );
};

export default ResetLayout;
