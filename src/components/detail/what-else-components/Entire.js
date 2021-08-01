import React from "react";

import WhatElseLayout from "./WhatElseLayout";

const Entire = ({ data }) => {
  return (
    <>
      <WhatElseLayout category="이런 건 어때요?" data={data} />
    </>
  );
};

export default Entire;
