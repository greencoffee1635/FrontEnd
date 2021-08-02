import React from "react";

import WhatElseLayout from "./WhatElseLayout";

const TouristSpot = ({ data }) => {
  return (
    <>
      <WhatElseLayout category="음식" data={data} />
    </>
  );
};

export default TouristSpot;
