import React from 'react';
import { NavBar } from './NavBar';
import { TotalSales } from './TotalSales';
import { SalesByCountry } from './SalesByCountry';
import { SalesByPerson } from './SalesByPerson';
import { SalesTable } from './SalesTable';
import { currentAsset } from './data/data';
import { groupBySum } from './util/util';
import './Fs.css';
export const Dashboard = () => {
  const sales = currentAsset;

  function totalSales() {
    const items = sales;
    const total = items.reduce((acc, sale) => (acc += sale.value), 0);
    return parseInt(total);
  }

  function chartData() {
    const items = sales;
    const groups = groupBySum(items, 'country', 'value');
    return groups;
  }

  function personSales() {
    const items = sales;
    const groups = groupBySum(items, 'soldBy', 'value');
    return groups;
  }

  function salesTableData() {
    return sales;
  }

  return (
    <div>
      <div>
        <div>
          {/*<TotalSales total={totalSales()} />
          <SalesByCountry salesData={chartData()} />
          <SalesByPerson salesData={personSales()} />*/}
          <SalesTable tableData={salesTableData()} />
        </div>
      </div>
    </div>
  );
};
