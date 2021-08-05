import React from "react";

import WhatElseLayout from "./WhatElseLayout";

const TouristSpot = ({ data }) => {
  return (
    <>
      <WhatElseLayout category="관광지" data={data} />
    </>
  );
};

export default TouristSpot;
