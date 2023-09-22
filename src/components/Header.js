import image from '../images/logo.jpg';

export default Header = () => {
    return (
      <div className='header'>
        <img className="image" src={image} alt="Logo Image" width="500" height="600"/>
        <div className='links'>
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
          <div>Cart</div>
        </div>
      </div>
    );
  };
  