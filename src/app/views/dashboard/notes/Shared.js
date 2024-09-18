import React from 'react';
import { Utils } from './Utils';

const Shared = ({ subcategory }) => {
  console.log(subcategory?.['Equity and Liability']?.['Equity']['Share capital']);

  const shareCapitalProperties = subcategory?.['Equity and Liability']?.['Equity']['Share capital'];
  const retainedEarningsProperties =
    subcategory?.['Equity and Liability']?.['Equity']['Retained earnings'];

  const shareCapitalUtils = Utils(shareCapitalProperties);
  const retainedEarningsUtils = Utils(retainedEarningsProperties);

  return (
    <div style={{ margin: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <tbody>
          <tr>
            <td style={{ textAlign: 'left', padding: '8px', fontWeight: 'bold' }}>
              Balance as at January 2021
            </td>

            <td style={{ textAlign: 'right', padding: '8px', fontWeight: 'bold' }}>
              {shareCapitalUtils.formattedTotalKmlValue}
            </td>
            <td style={{ textAlign: 'right', padding: '8px', fontWeight: 'bold' }}>
              {retainedEarningsUtils.formattedTotalKmlValue}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Shared;
