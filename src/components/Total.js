import React from "react";
import { connect } from "react-redux";
const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  
  return {
    additionalPrice: state.car.additionalPrice,
    price: state.car.car.price,
    
  };
};

export default connect(
  mapStateToProps,
  {  }
)(Total);


