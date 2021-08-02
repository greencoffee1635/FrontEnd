import React from "react";

import WhatElseLayout from "./WhatElseLayout";

const TouristSpot = ({ data }) => {
  return (
    <>
      <WhatElseLayout category="액티비티" data={data} />
    </>
  );
};

export default TouristSpot;
