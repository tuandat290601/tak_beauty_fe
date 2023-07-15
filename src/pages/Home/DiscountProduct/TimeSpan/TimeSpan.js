import React from "react";
import { getStatus, toHhSs } from "../../../../helpers/DateTimeUtil";

import "./TimeSpan.sass";

const TimeSpan = (props) => {
  const { time, duration } = props;
  const status = getStatus(time, duration);
  return (
    <h5 className={`timespan ${status.bool === 0 ? "current" : ""}`}>
      <span>{toHhSs(time)}</span>
      <br />
      {status.string}
    </h5>
  );
};

export default TimeSpan;
