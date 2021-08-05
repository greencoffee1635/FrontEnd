import React from "react";

import WhatElseLayout from "./WhatElseLayout";

const Humanities = ({ tourData }) => {
  return (
    <>
      <WhatElseLayout category="인문" tourData={tourData} />
    </>
  );
};

export default Humanities;
