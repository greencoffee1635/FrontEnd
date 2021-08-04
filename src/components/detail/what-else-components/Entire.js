import React from "react";

import WhatElseLayout from "./WhatElseLayout";

const Entire = ({ tourData }) => {
  return (
    <>
      <WhatElseLayout category="이런 건 어때요?" tourData={tourData} />
    </>
  );
};

export default Entire;
