import React, { useState } from "react";
import { connect } from "react-redux";

import { removeFeatures } from "../actions";

const AddedFeature = props => {
console.log(props)
  const removeFeature = e => {
    e.preventDefault();
    props.removeFeatures(props.feature);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeature}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};



export default connect(
  null,
  { removeFeatures }
)(AddedFeature);



