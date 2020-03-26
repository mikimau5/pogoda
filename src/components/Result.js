import React from "react";
import MobileResult from "./MobileResult";
import DesktopResult from "./DesktopResult";

const Result = props => {
  return (
    <>
      <div className="result">
        <DesktopResult weather={props.weather}></DesktopResult>
        <MobileResult weather={props.weather}></MobileResult>
      </div>
    </>
  );
};

export default Result;
