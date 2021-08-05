import React from "react";

import WhatElseLayout from "./WhatElseLayout";

const Lodgment = ({ tourData }) => {
  return (
    <>
      <WhatElseLayout category="숙박" tourData={tourData} />
    </>
  );
};

export default Lodgment;
