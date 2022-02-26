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
    </header>
  );
}

export default Header;
