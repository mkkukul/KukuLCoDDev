/* Google Fonts - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
    background: #f0faff;
  }
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px 200px;
    background: #4a98f7;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  .nav,
.nav .nav-links {
  display: flex;
  align-items: center;
}
.nav {
    justify-content: space-between;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  .nav .logo {
    font-size: 22px;
    font-weight: 500;
  }