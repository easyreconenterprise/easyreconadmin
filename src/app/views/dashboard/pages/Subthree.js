import React, { useState } from 'react';
import Sub from './Sub';
import { Icon } from '@mui/material';

const SubThree = () => {
  const [showText, setShowText] = useState(false);

  const [showEquity, setShowEquity] = useState(false);
  const [showNonLiability, setShowNonLiability] = useState(false);
  const [showLiability, setShowLiability] = useState(false);
  const [showCap, setShowCap] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showRet, setShowRet] = useState(false);
  const [showRe, setShowRe] = useState(false);
  const [showDef, setShowDef] = useState(false);
  const [showPr, setShowPr] = useState(false);
  const [showPro, setShowPro] = useState(false);
  const [showLoan, setShowLoan] = useState(false);
  const [showTax, setShowTax] = useState(false);
  const [showRade, setShowRade] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [showCu, setShowCu] = useState(false);
  const [showIn, setShowIn] = useState(false);
  const [showBo, setShowBo] = useState(false);
  const [showOt, setShowOt] = useState(false);

  const toggleEquity = () => {
    setShowEquity(!showEquity);
  };
  const toggleLiability = () => {
    setShowLiability(!showLiability);
  };
  const toggleNonLiability = () => {
    setShowNonLiability(!showNonLiability);
  };
  const toggleCap = () => {
    setShowCap(!showCap);
  };
  const toggleShare = () => {
    setShowShare(!showShare);
  };
  const toggleRet = () => {
    setShowRet(!showRet);
  };
  const toggleRe = () => {
    setShowRe(!showRe);
  };
  const togglePr = () => {
    setShowPr(!showPr);
  };
  const toggleDef = () => {
    setShowDef(!showDef);
  };
  const togglePro = () => {
    setShowPro(!showPro);
  };
  const toggleTax = () => {
    setShowTax(!showTax);
  };
  const toggleRade = () => {
    setShowRade(!showRade);
  };
  const toggleLoan = () => {
    setShowLoan(!showLoan);
  };
  const toggleBank = () => {
    setShowBank(!showBank);
  };
  const toggleCu = () => {
    setShowCu(!showCu);
  };
  const toggleIn = () => {
    setShowIn(!showIn);
  };
  const toggleBo = () => {
    setShowBo(!showBo);
  };
  const toggleOt = () => {
    setShowOt(!showOt);
  };

  return (
    <>
      <div>
        <button
          checked={showEquity}
          value="newEq"
          onClick={toggleEquity}
          style={{ color: 'black' }}
        >
          Equity
          <Icon style={{ verticalAlign: 'middle', color: 'black' }}>arrow_drop_down</Icon>
        </button>
        {showEquity && (
          <div>
            <div colSpan="5">
              <button
                type="button"
                name="accounting"
                id="accounting"
                clicked={showCap}
                onClick={toggleCap}
                value="capi"
                style={{ color: 'black' }}
              >
                Capital and reserves
              </button>
            </div>

            {showCap && (
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
                clicked={showShare}
                onClick={toggleShare}
                style={{ color: 'black' }}
                value="share"
              >
                Share capital
              </button>
            </div>

            {showShare && (
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
                clicked={showRet}
                onClick={toggleRet}
                style={{ color: 'black' }}
                value="ret"
              >
                Retained earnings
              </button>
            </div>

            {showRet && (
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
                clicked={showRe}
                onClick={toggleRe}
                style={{ color: 'black' }}
                value="res"
              >
                Reserves
              </button>
            </div>

            {showRe && (
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
                clicked={showPr}
                onClick={togglePr}
                style={{ color: 'black' }}
                value="prem"
              >
                Share Premium
              </button>
            </div>

            {showPr && (
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
      <div>
        <button
          checked={showNonLiability}
          value="nli"
          onClick={toggleNonLiability}
          style={{ color: 'black' }}
        >
          Non-Current Liabilites
          <Icon style={{ verticalAlign: 'middle', color: 'black' }}>arrow_drop_down</Icon>
        </button>
        {showNonLiability && (
          <div>
            <div colSpan="5">
              <button
                type="button"
                name="accounting"
                id="accounting"
                clicked={showDef}
                onClick={toggleDef}
                style={{ color: 'black' }}
                value="defe"
              >
                Deferred Income
              </button>
            </div>

            {showDef && (
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
                clicked={showPro}
                onClick={togglePro}
                style={{ color: 'black' }}
                value="prov"
              >
                Provision
              </button>
            </div>

            {showPro && (
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
                clicked={showTax}
                onClick={toggleTax}
                style={{ color: 'black' }}
                value="tax"
              >
                Deferred tax liability
              </button>
            </div>

            {showTax && (
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
                clicked={showRade}
                onClick={toggleRade}
                style={{ color: 'black' }}
                value="other"
              >
                Trade and other payables
              </button>
            </div>

            {showRade && (
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
                clicked={showLoan}
                onClick={toggleLoan}
                style={{ color: 'black' }}
                value="loan"
              >
                Loans and borrowings
              </button>
            </div>

            {showLoan && (
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
      <div>
        <button
          checked={showLiability}
          value="curli"
          onClick={toggleLiability}
          style={{ color: 'black' }}
        >
          Current Liabilites
          <Icon style={{ verticalAlign: 'middle', color: 'black' }}>arrow_drop_down</Icon>
        </button>
        {showLiability && (
          <div>
            <div colSpan="5">
              <button
                type="button"
                name="accounting"
                id="accounting"
                clicked={showBank}
                onClick={toggleBank}
                style={{ color: 'black' }}
                value="over"
              >
                Bank Overdraft
              </button>
            </div>

            {showBank && (
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
                clicked={showCu}
                onClick={toggleCu}
                style={{ color: 'black' }}
                value="taxlia"
              >
                Current tax liabilities
              </button>
            </div>

            {showCu && (
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
                clicked={showIn}
                onClick={toggleIn}
                style={{ color: 'black' }}
                value="defin"
              >
                Deferred Incomes
              </button>
            </div>

            {showIn && (
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
                clicked={showBo}
                onClick={toggleBo}
                style={{ color: 'black' }}
                value="bor"
              >
                Loans and borrowing
              </button>
            </div>

            {showBo && (
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
                clicked={showOt}
                onClick={toggleOt}
                style={{ color: 'black' }}
                value="paya"
              >
                Trade and other payable
              </button>
            </div>

            {showOt && (
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

export default SubThree;
