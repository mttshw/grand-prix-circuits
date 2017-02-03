import React from "react";
import Flags from "react-flags";

const Flag = ({country, flag}) =>
  <Flags
    name={flag}
    format="png"
    pngSize={32}
    alt={country + ' Flag'} />

export default Flag;
