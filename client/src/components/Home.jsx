const Home = () => {
  return (
    <div className="page" id="home">

      <div className="header-page">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWRauMFHy0x0ilVOzjiBOfPw1kmalGnZPQHyJiEk7r611l_WjpJxmvKumE7Bk_iekCH2I&usqp=CAU "
          className="logo"
          alt="Emily's resturant"
        ></img>

        <div className="Navbar">
          <nav className="nav-bar">
            <ul>

              <li>
                <a href="#contacts">Contact</a>
              </li>
              <li>
                <a href="#form">Form</a>
              </li>
              <li>
                <a href="#ordermenu">Menu</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#home">Home</a>
              </li>

            </ul>
          </nav>
        </div>
      </div>

      <div className="header">
        <h1>🌟Emily's 🌟</h1>
        <h1>🌟Resturant and Bar🌟</h1>

        <div id="photo">
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/05/80/e2/6b/getlstd-property-photo.jpg"></img>
        </div>

        <p>
          Are you ready to take your order to the next level? Join us in savoring the extraordinary.
        </p>
        <p>where each dish is a celebration of flavor, and every moment
          is an opportunity to create cherished memories.</p>
        <p>
          Thank you for joining our resturant. We can't wait to share the best meal with you!
        </p>

        <p>
          Prepare to wow your friends and family with picture-perfect plates!
        </p>
        <p>Bon appétit!</p>
      </div>
      {/* type="submit" should only be in a form. You also have a button and a link, but you probably only want a link here */}
      <button type="submit" className="button">
        {/* I don't think the `value` attribute here is doing anything? */}
        <a  href="#ordermenu" value="ordermenu">Menu...</a>
      </button>
      {/* I think for the button above you're trying to use form attributes, but you don't need to because this isn't a form */}
      
    </div>
  );
};

export default Home;
