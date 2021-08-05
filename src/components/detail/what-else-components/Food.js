import React from "react";

import WhatElseLayout from "./WhatElseLayout";

const Food = ({ tourData }) => {
  return (
    <>
      <WhatElseLayout category="음식" tourData={tourData} />
    </>
  );
};

export default Food;
