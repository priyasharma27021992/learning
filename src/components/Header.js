import image from '../images/logo.jpg';

export default Header = () => {
    return (
      <div>
        <img className="image" src={image} alt="Logo Image" width="500" height="600"/>
        <div>
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
          <div>Cart</div>
        </div>
      </div>
    );
  };
  