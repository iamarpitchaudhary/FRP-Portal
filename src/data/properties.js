import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "15px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3>{property.name}</h3>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>BHK:</strong> {property.bhk}</p>
      <p><strong>Size:</strong> {property.sizeSqYd} sq. yd</p>
      <p><strong>Price:</strong> ₹{(property.priceLakhs/100).toFixed(2)} Cr</p>
      <p><strong>Possession:</strong> {property.possession}</p>
    </div>
  );
};

export default PropertyCard;
