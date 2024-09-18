import React, { useState } from 'react';

const Sub = () => {
  const [showAccounting, setShowAccounting] = useState(false);
  const [showManagement, setShowManagement] = useState(false);
  const [showInvent, setShowInvent] = useState(false);
  const [showInvest, setShowInvest] = useState(false);
  const [showManagemen, setShowManagemen] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [showBio, setShowBio] = useState(false);

  const toggleAccounting = () => {
    setShowAccounting(!showAccounting);
  };

  const toggleManagement = () => {
    setShowManagement(!showManagement);
  };
  const toggleInvent = () => {
    setShowInvent(!showInvent);
  };
  const toggleInvest = () => {
    setShowInvest(!showInvest);
  };
  const toggleManagemen = () => {
    setShowManagemen(!showManagemen);
  };
  const toggleManage = () => {
    setShowManage(!showManage);
  };
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  return (
    <div>
      <div colSpan="5">
        <button
          type="button"
          name="accounting"
          id="accounting"
          clicked={showAccounting}
          onClick={toggleAccounting}
          style={{ color: 'black' }}
        >
          Property plant and equipment
        </button>
      </div>

      {showAccounting && (
        <tbody>
          <tr>
            <td>Australia</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Central America</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
        </tbody>
      )}

      <div colSpan="5">
        <button
          type="button"
          name="management"
          id="management"
          clicked={showManagement}
          onClick={toggleManagement}
          style={{ color: 'black' }}
        >
          Deferred tax assets
        </button>
      </div>

      {showManagement && (
        <tbody className="hide">
          <tr>
            <td>Australia</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Central America</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Europe</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Middle East</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
        </tbody>
      )}

      <div colSpan="5">
        <button
          type="button"
          name="management"
          id="management"
          clicked={showManage}
          onClick={toggleManage}
          style={{ color: 'black' }}
        >
          Investment
        </button>
      </div>

      {showManage && (
        <tbody className="hide">
          <tr>
            <td>Idia</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>London</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Europe</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Middle East</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
        </tbody>
      )}

      <div colSpan="5">
        <button
          type="button"
          name="management"
          id="management"
          clicked={showManagemen}
          onClick={toggleManagemen}
          style={{ color: 'black' }}
        >
          Other receivables
        </button>
      </div>

      {showManagemen && (
        <tbody className="hide">
          <tr>
            <td>Australia</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Central America</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Europe</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Middle East</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
        </tbody>
      )}
      <div colSpan="5">
        <button
          type="button"
          name="management"
          id="management"
          clicked={showInvent}
          onClick={toggleInvent}
          style={{ color: 'black' }}
        >
          Intangible assets and good will
        </button>
      </div>

      {showInvent && (
        <tbody className="hide">
          <tr>
            <td>Australia</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Central America</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Europe</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Middle East</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
        </tbody>
      )}
      <div colSpan="5">
        <button
          type="button"
          name="management"
          id="management"
          clicked={showBio}
          onClick={toggleBio}
          style={{ color: 'black' }}
        >
          Biological assets
        </button>
      </div>

      {showBio && (
        <tbody className="hide">
          <tr>
            <td>Australia</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Central America</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Europe</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Middle East</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
        </tbody>
      )}
      <div colSpan="5">
        <button
          type="button"
          name="management"
          id="management"
          clicked={showInvest}
          onClick={toggleInvest}
          style={{ color: 'black' }}
        >
          Investment property
        </button>
      </div>

      {showInvest && (
        <tbody className="hide">
          <tr>
            <td>Australia</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Central America</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Europe</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
          <tr>
            <td>Middle East</td>
            <td>$7,685.00</td>
            <td>$3,544.00</td>
            <td>$5,834.00</td>
            <td>$10,583.00</td>
          </tr>
        </tbody>
      )}
    </div>
    //   <table>
    //   <tbody>
    //     <tbody className="labels">
    //       <tr>
    //         <td colSpan="5">
    //           <button
    //             type="button"
    //             name="accounting"
    //             id="accounting"
    //             clicked={showAccounting}
    //             onClick={toggleAccounting}
    //             style={{ color: 'black' }}
    //           >
    //             Property plant and equipment
    //           </button>
    //         </td>
    //       </tr>
    //     </tbody>
    //     {showAccounting && (
    //       <tbody>
    //         <tr>
    //           <td>Australia</td>
    //           <td>$7,685.00</td>
    //           <td>$3,544.00</td>
    //           <td>$5,834.00</td>
    //           <td>$10,583.00</td>
    //         </tr>
    //         <tr>
    //           <td>Central America</td>
    //           <td>$7,685.00</td>
    //           <td>$3,544.00</td>
    //           <td>$5,834.00</td>
    //           <td>$10,583.00</td>
    //         </tr>
    //       </tbody>
    //     )}
    //     <tbody className="labels">
    //       <tr>
    //         <td colSpan="5">
    //           <button
    //             type="button"
    //             name="management"
    //             id="management"
    //             clicked={showManagement}
    //             onClick={toggleManagement}
    //             style={{ color: 'black' }}
    //           >
    //             Deferred tax asset
    //           </button>
    //         </td>
    //       </tr>
    //     </tbody>
    //     {showManagement && (
    //       <tbody className="hide">
    //         <tr>
    //           <td>Australia</td>
    //           <td>$7,685.00</td>
    //           <td>$3,544.00</td>
    //           <td>$5,834.00</td>
    //           <td>$10,583.00</td>
    //         </tr>
    //         <tr>
    //           <td>Central America</td>
    //           <td>$7,685.00</td>
    //           <td>$3,544.00</td>
    //           <td>$5,834.00</td>
    //           <td>$10,583.00</td>
    //         </tr>
    //         <tr>
    //           <td>Europe</td>
    //           <td>$7,685.00</td>
    //           <td>$3,544.00</td>
    //           <td>$5,834.00</td>
    //           <td>$10,583.00</td>
    //         </tr>
    //         <tr>
    //           <td>Middle East</td>
    //           <td>$7,685.00</td>
    //           <td>$3,544.00</td>
    //           <td>$5,834.00</td>
    //           <td>$10,583.00</td>
    //         </tr>
    //       </tbody>
    //     )}
    //     <tbody className="labels">
    //       <tr>
    //         <td colSpan="5">
    //           <button
    //             type="button"
    //             name="management"
    //             id="management"
    //             clicked={showManage}
    //             onClick={toggleManage}
    //             style={{ color: 'black' }}
    //           >
    //             Investment
    //           </button>
    //         </td>
    //       </tr>
    //     </tbody>
    //     {showManage && (
    //       <tbody className="hide">
    //         <tr>
    //           <td>Idia</td>
    //           <td>$7,685.00</td>
    //           <td>$3,544.00</td>
    //           <td>$5,834.00</td>
    //           <td>$10,583.00</td>
    //         </tr>
    //         <tr>
    //           <td>London</td>
    //           <td>$7,685.00</td>
    //           <td>$3,544.00</td>
    //           <td>$5,834.00</td>
    //           <td>$10,583.00</td>
    //         </tr>
    //         <tr>
    //           <td>Europe</td>
    //           <td>$7,685.00</td>
    //           <td>$3,544.00</td>
    //           <td>$5,834.00</td>
    //           <td>$10,583.00</td>
    //         </tr>
    //         <tr>
    //           <td>Middle East</td>
    //           <td>$7,685.00</td>
    //           <td>$3,544.00</td>
    //           <td>$5,834.00</td>
    //           <td>$10,583.00</td>
    //         </tr>
    //       </tbody>
    //     )}
    //     <tbody className="labels">
    //       <tr>
    //         <td colSpan="5">
    //           <button
    //             type="button"
    //             name="management"
    //             id="management"
    //             clicked={showManagemen}
    //             onClick={toggleManagemen}
    //             style={{ color: 'black' }}
    //           >
    //             Other receivables
    //           </button>
    //         </td>
    //       </tr>
    //     </tbody>
    //     {showManagemen && (
    //       <tbody className="hide">
    //         <tr>
    //           <td>Australia</td>
    //           <td>$7,685.00</td>
    //           <td>$3,544.00</td>
    //           <td>$5,834.00</td>
    //           <td>$10,583.00</td>
    //         </tr>
    //         <tr>
    //           <td>Central America</td>
    //           <td>$7,685.00</td>
    //           <td>$3,544.00</td>
    //           <td>$5,834.00</td>
    //           <td>$10,583.00</td>
    //         </tr>
    //         <tr>
    //           <td>Europe</td>
    //           <td>$7,685.00</td>
    //           <td>$3,544.00</td>
    //           <td>$5,834.00</td>
    //           <td>$10,583.00</td>
    //         </tr>
    //         <tr>
    //           <td>Middle East</td>
    //           <td>$7,685.00</td>
    //           <td>$3,544.00</td>
    //           <td>$5,834.00</td>
    //           <td>$10,583.00</td>
    //         </tr>
    //       </tbody>
    //     )}
    //   </tbody>
    // </table>
  );
};

export default Sub;
