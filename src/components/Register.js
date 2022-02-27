import cancel_icon from "../media/icons/cancel.png";
import facebook_icon from "../media/icons/facebook.png";
import google_icon from "../media/icons/google.png";

function Register() {
  const close_register_box = () => {
    var reg = document.querySelector(".register");
    reg.style.display = "none";
  };
  return (
    <div className="register"> <div className="trans"></div>
      <div className="head">
        <h3>Create Account</h3>
        <div className="cancel" onClick={() => close_register_box()}>
          <img src={cancel_icon} alt="cancle icon" />
        </div>
      </div>
      <form>
        <p className="name">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </p>
        <p>
          <input type="text" placeholder="Email" />
        </p>
        <p>
          <input type="text" placeholder="Password" />
        </p>
        <p>
          <input type="text" placeholder="Confirm Password" />
        </p>
        <p className="buttons">
          <button>Create Account</button>
          <a href="/">or,SignIn</a>
        </p>
      </form>
      <div className="socials">
        <p>
          <img src={facebook_icon} alt="facebook icon" /><span>Sign up with Facebook</span>
        </p>
        <p>
          <img src={google_icon} alt="google icon" /><span>Sign up with Google</span>
        </p>
      </div>
      <footer>
        By signing up, you agree to our Terms & <br />
        conditions, Privacy policy
      </footer>
    </div>
  );
}

export default Register;
