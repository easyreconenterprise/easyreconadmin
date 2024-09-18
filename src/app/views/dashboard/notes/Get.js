// import React, { useEffect, useState } from 'react';
// import { EditText, EditTextarea } from 'react-edit-text';
// import 'react-edit-text/dist/index.css';

// const Get = () => {
//   const [one, setOne] = useState(localStorage.getItem('one') || '');
//   const [two, setTwo] = useState(localStorage.getItem('two') || '');
//   const [three, setThree] = useState(localStorage.getItem('three') || '');
//   const [four, setFour] = useState(localStorage.getItem('four') || '');
//   const [five, setFive] = useState(localStorage.getItem('five') || '');
//   const [six, setSix] = useState(localStorage.getItem('six') || '');
//   const [seven, setPrincipal] = useState(localStorage.getItem('seven') || '');
//   const [netCashFinancialActivities, setNetCashFinancialActivities] = useState(0);

//   useEffect(() => {
//     // Calculate the net cash generated from financial activities
//     const total =
//       parseFloat(one) +
//       parseFloat(two) +
//       parseFloat(three) +
//       parseFloat(four) +
//       parseFloat(five) +
//       parseFloat(six) +
//       parseFloat(seven);

//     // Update the netCashFinancialActivities state
//     setNetCashFinancialActivities(total);
//   }, [one, two, three, four, five, six, seven]);

//   return <div>{netCashFinancialActivities}</div>;
// };

// export default Get;
import React, { useEffect, useState } from 'react';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const Get = () => {
  const [one, setOne] = useState(localStorage.getItem('one') || '');
  const [two, setTwo] = useState(localStorage.getItem('two') || '');
  const [three, setThree] = useState(localStorage.getItem('three') || '');
  const [four, setFour] = useState(localStorage.getItem('four') || '');
  const [five, setFive] = useState(localStorage.getItem('five') || '');
  const [six, setSix] = useState(localStorage.getItem('six') || '');
  const [seven, setPrincipal] = useState(localStorage.getItem('seven') || '');

  // Update the netCashFinancialActivities whenever any of the state variables change
  useEffect(() => {
    const newTotal =
      parseFloat(one) +
      parseFloat(two) +
      parseFloat(three) +
      parseFloat(four) +
      parseFloat(five) +
      parseFloat(six) +
      parseFloat(seven);

    // Update the local storage values immediately
    localStorage.setItem('one', one);
    localStorage.setItem('two', two);
    localStorage.setItem('three', three);
    localStorage.setItem('four', four);
    localStorage.setItem('five', five);
    localStorage.setItem('six', six);
    localStorage.setItem('seven', seven);

    // Update the netCashFinancialActivities value
    setNetCashFinancialActivities(newTotal);
  }, [one, two, three, four, five, six, seven]);

  // State to hold the net cash value
  const [netCashFinancialActivities, setNetCashFinancialActivities] = useState(0);

  return <div>{netCashFinancialActivities}</div>;
};

export default Get;
