const Contact = () => {
  return (
    <div>
      <div className="contact" id="contacts">
        <h2>Contact</h2>
        <div className="info">
          <p>Facebook - Emily's Resturant And Bar</p>
          <br />
          <p>twitter - @emilysresturant123</p>
          <br />
          <p>Instagram - @emilysresturant123</p>
          <br />
          <p>Email Adress - emilysresturant123@gmail.com</p>
          <br />
          <p>
            For advertisement $ calls:
            <br />
            078 734 2335
            <br /> 083 589 4888
            <br />
          </p>
        </div>
      </div>
      <div class="upArrow">
        <button class="btn btn-outline-dark">
          <a href="#home" id="form" value="home">
            back to homepage
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
