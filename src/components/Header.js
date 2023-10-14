import { useState } from "react";
import image from "../images/logo.jpg";
import { Link } from "react-router-dom";

export default Header = () => {
  const [toggleLoginBtn, setToggleLoginBtn] = useState(true);
  console.log("toggleLoginBtn", toggleLoginBtn);

  return (
    <div className="header">
      <img
        className="image"
        src={image}
        alt="Logo Image"
        width="500"
        height="600"
      />
      <div className="links">
        <Link to="/" className="no-style-link">
          <div>Home</div>
        </Link>
        <Link to="/about" className="no-style-link">
          <div>About</div>
        </Link>
        <Link to="/contact" className="no-style-link">
          <div> Contact </div>
        </Link>
        <div>Cart</div>
        <button onClick={() => setToggleLoginBtn(!toggleLoginBtn)}>
          {toggleLoginBtn ? "Login" : "Logout"}
        </button>
      </div>
    </div>
  );
};
