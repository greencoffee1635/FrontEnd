import React from "react";

import WhatElseLayout from "./WhatElseLayout";

const RecommendedJCourse = ({ tourData }) => {
  return (
    <>
      <WhatElseLayout category="추천코스" tourData={tourData} />
    </>
  );
};

export default RecommendedJCourse;
