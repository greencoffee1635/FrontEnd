import React from "react";

// css
import "../css/detailHeader.scss";

function DetailHeader(props) {
  const { history } = props;

  return (
    <>
      <div className="detailHeader">
        <div
          className="header__logo"
          onClick={() => {
            history.replace("/");
          }}
        >
          내일 어디가?
        </div>
      </div>
    </>
  );
}

export default DetailHeader;
