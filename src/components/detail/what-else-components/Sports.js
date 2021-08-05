import React from "react";

import WhatElseLayout from "./WhatElseLayout";

const Sports = ({ tourData }) => {
  return (
    <>
      <WhatElseLayout category="레포츠" tourData={tourData} />
    </>
  );
};

export default Sports;
