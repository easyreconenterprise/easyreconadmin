// utils.js
export const Utils = (properties) => {
  let totalKmlValue = 0;
  let totalKmlValues = 0;

  if (properties) {
    properties.forEach((property) => {
      const lastColumnValue = property[Object.keys(property)[Object.keys(property).length - 1]];
      const secondLastColumnValue =
        property[Object.keys(property)[Object.keys(property).length - 2]];
      const kmlValue = parseFloat(lastColumnValue.replace(/[\s,]/g, ''));
      const kmlValues = parseFloat(secondLastColumnValue.replace(/[\s,]/g, ''));

      if (!isNaN(kmlValue)) {
        totalKmlValue += kmlValue;
      }

      if (!isNaN(kmlValues)) {
        totalKmlValues += kmlValues;
      }
    });
  }

  const formattedTotalKmlValue = totalKmlValue.toFixed(2);
  const formattedTotalKmlValues = totalKmlValues.toFixed(2);

  return { formattedTotalKmlValue, formattedTotalKmlValues };
};
