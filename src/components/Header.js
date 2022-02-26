import back_icon from "../media/icons/back.png";

function Header() {
  return (
    <header> <div className="trans"></div>
      <p>
          <span>
              <img src={back_icon} alt="back-icon" />
          </span>
          <span className="join">
              join group
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
