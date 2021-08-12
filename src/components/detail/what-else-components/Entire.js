import React from "react";

import WhatElseLayout from "./WhatElseLayout";

const Entire = ({ setOpenModal }) => {
  return (
    <>
      <WhatElseLayout category="이런 건 어때요?" setOpenModal={setOpenModal} />
    </>
  );
};

export default Entire;
