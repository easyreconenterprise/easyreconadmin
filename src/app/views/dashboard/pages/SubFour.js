import React, { useState } from 'react';
import Sub from './Sub';
import { Icon } from '@mui/material';

const SubFour = () => {
  const [showText, setShowText] = useState(false);

  const [showEquity, setShowEquity] = useState(false);
  const [showNonLiability, setShowNonLiability] = useState(false);
  const [showLiability, setShowLiability] = useState(false);

  const toggleEquity = () => {
    setShowEquity(!showEquity);
  };
  const toggleNonLiability = () => {
    setShowNonLiability(!showNonLiability);
  };
  const toggleLiability = () => {
    setShowLiability(!showLiability);
  };
  return (
    <>
      <div></div>
    </>
  );
};

export default SubFour;
