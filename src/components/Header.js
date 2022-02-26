import back_icon from "../media/icons/back.png";

import { useState } from "react";

function Header() {
  const [clicks, setClicks] = useState(0);
  return (
    <header>
      {" "}
      <div className="trans"></div>
      <p>
        <span>
          <img src={back_icon} alt="back-icon" />
        </span>
        <span
          className="join"
          onClick={() => {
            setClicks(clicks + 1);
          }}
        >
          {(clicks%2===0)? "join group" : "leave group"}
        </span>
      </p>
      <div className="topic">
        <h1>computer engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </header>
  );
}

export default Header;
