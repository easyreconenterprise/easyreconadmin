import React, { useState } from 'react';
import Sub from './Sub';
import Main from './Sudo';
import { Icon } from '@mui/material';
import SubThree from './Subthree';
import SubFour from './SubFour';

const Subtwo = () => {
  const [showText, setShowText] = useState(false);
  const [showAccounting, setShowAccounting] = useState(false);
  const [showAsset, setShowAsset] = useState(false);
  const [showEquity, setShowEquity] = useState(false);
  const [showIncome, setShowIncome] = useState(false);

  const toggleAsset = () => {
    setShowAsset(!showAsset);
  };
  const toggleEquity = () => {
    setShowEquity(!showEquity);
  };
  const toggleIncome = () => {
    setShowIncome(!showIncome);
  };
  return (
    <>
      <div style={{ color: 'black' }}>
        <button checked={showAsset} onClick={toggleAsset} style={{ color: 'black' }} value="asset">
          Asset
          <Icon style={{ verticalAlign: 'middle', color: 'black' }}>arrow_drop_down</Icon>
        </button>

        {showAsset && <Main />}
      </div>
      <div>
        <button
          checked={showEquity}
          onClick={toggleEquity}
          style={{ color: 'black' }}
          value="equity"
        >
          Equity and Liability
          <Icon style={{ verticalAlign: 'middle', color: 'black' }}>arrow_drop_down</Icon>
        </button>

        {showEquity && <SubThree />}
      </div>
      <div>
        <button
          checked={showIncome}
          onClick={toggleIncome}
          style={{ color: 'black' }}
          value="income"
        >
          Income Statement
          <Icon style={{ verticalAlign: 'middle', color: 'black' }}>arrow_drop_down</Icon>
        </button>

        {showIncome && <SubFour />}
      </div>
    </>
  );
};

export default Subtwo;
