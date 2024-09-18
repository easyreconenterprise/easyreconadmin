/* eslint-disable react/prop-types */
const Property = ({ subcategory }) => {
  console.log(subcategory?.Asset?.['Non-current']['Property plant and equipment']);

  const properties = subcategory?.Asset?.['Non-current']['Property plant and equipment'];
  console.log(properties);

  const totalAmount = properties
    ?.reduce((sum, property) => {
      // Replace 'property.KML' with the value of the last column
      const lastColumnValue = property[Object.keys(property)[Object.keys(property).length - 1]];
      const kmlValue = parseFloat(lastColumnValue.replace(/[\s,]/g, ''));
      return isNaN(kmlValue) ? sum : sum + kmlValue;
    }, 0)
    .toFixed(2);
  console.log(totalAmount);

  // const totalAmount = properties
  //   ?.reduce((sum, property) => {
  //     const kmlValue = parseFloat(property.KML.replace(/[\s,]/g, ''));
  //     return isNaN(kmlValue) ? sum : sum + kmlValue;
  //   }, 0)
  //   .toFixed(2);
  // console.log(totalAmount);

  return (
    <>
      <div>
        <div>
          {properties?.map((property, index) => (
            <div key={index}>
              <div style={{ width: '100%', display: 'flex', marginLeft: '30px' }}>
                <p style={{ width: '100%' }}>{property.Description}</p>
                <p style={{ marginRight: '180px' }}>
                  {property[Object.keys(property)[Object.keys(property).length - 1]]}
                </p>
              </div>
            </div>
          ))}
          <h4 style={{ width: '100%', display: 'flex', marginLeft: '30px ' }}>
            <p style={{ fontWeight: 700, fontSize: '16px' }}>Total Property plant and equipment</p>
            <b>
              {' '}
              <p style={{ marginLeft: '430px', fontSize: '16px' }}>{totalAmount}</p>
            </b>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Property;
