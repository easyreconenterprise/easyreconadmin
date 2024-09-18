import React, { useState } from 'react';
import Sub from './Sub';
import { Icon } from '@mui/material';

const Main = () => {
  const [showText, setShowText] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNonCurrent, setShowNonCurrent] = useState(false);
  const [showEquity, setShowEquity] = useState(false);
  const [showNonLiability, setShowNonLiability] = useState(false);
  const [showTrade, setShowTrade] = useState(false);
  const [showEqi, setShowEqi] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [showInv, setShowInv] = useState(false);

  const toggleCurrent = () => {
    setShowCurrent(!showCurrent);
  };

  const toggleNonCurrent = () => {
    setShowNonCurrent(!showNonCurrent);
  };
  const toggleEqi = () => {
    setShowEqi(!showEqi);
  };
  const toggleManage = () => {
    setShowManage(!showManage);
  };
  const toggleTrade = () => {
    setShowTrade(!showTrade);
  };
  const toggleInv = () => {
    setShowInv(!showInv);
  };

  return (
    <>
      <div>
        <button
          checked={showNonCurrent}
          value="noncur"
          onClick={toggleNonCurrent}
          style={{ color: 'black' }}
        >
          Non current
          <Icon style={{ verticalAlign: 'middle', color: 'black' }}>arrow_drop_down</Icon>
        </button>

        {showNonCurrent && <Sub />}
      </div>
      <div>
        <button
          checked={showCurrent}
          value="cur"
          onClick={toggleCurrent}
          style={{ color: 'black' }}
        >
          Current
          <Icon style={{ verticalAlign: 'middle', color: 'black' }}>arrow_drop_down</Icon>
        </button>
        {showCurrent && (
          <div>
            <div colSpan="5">
              <button
                type="button"
                name="accounting"
                id="accounting"
                clicked={showInv}
                onClick={toggleInv}
                style={{ color: 'black' }}
                value="inv"
              >
                Inventories
              </button>
            </div>

            {showInv && (
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
                clicked={showTrade}
                onClick={toggleTrade}
                style={{ color: 'black' }}
                value="trade"
              >
                Trade and other receivables
              </button>
            </div>

            {showTrade && (
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
                value="pre"
              >
                prepayment and advances
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
                clicked={showEqi}
                onClick={toggleEqi}
                style={{ color: 'black' }}
                value="cash"
              >
                Cash and cash equivalent
              </button>
            </div>

            {showEqi && (
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
        )}
      </div>
    </>
  );
};

export default Main;
