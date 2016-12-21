import React from 'react';

function Header(props) {
  return (
    <section className="hero is-bold is-fullheight">
      {/*<div className="hero-head">
        <header className="nav">
          <div className="container">
            <div className="nav-left">
              <a className="nav-item">
                <h1 className="title is-4">Tiffany Wu</h1>
              </a>
            </div>
            <div className="nav-center">
              <a className="nav-item" href="https://www.linkedin.com/in/tiffwu" title="LinkedIn">
                <span className="icon">
                  <i className="fa fa-linkedin"></i>
                </span>
              </a>
              <a className="nav-item" href="https://github.com/tiffwu" title="GitHub">
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
              </a>
              <a className="nav-item" href="https://www.facebook.com/tiffwuu" title="Facebook">
                <span className="icon">
                  <i className="fa fa-facebook-square"></i>
                </span>
              </a>
            </div>
          </div>
        </header>
      </div>*/}

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">
            Tiffany Wu
          </h1>
          <h2 className="subtitle is-5">
            New York City
          </h2>
        </div>
      </div>

      <div className="hero-foot">
        <header className="nav">
          <div className="container">
            <div className="nav-center">
              <a className="nav-item" href="https://www.linkedin.com/in/tiffwu" title="LinkedIn">
                <span className="icon is-medium">
                  <i className="fa fa-linkedin"></i>
                </span>
              </a>
              <a className="nav-item" href="https://github.com/tiffwu" title="GitHub">
                <span className="icon is-medium">
                  <i className="fa fa-github"></i>
                </span>
              </a>
              <a className="nav-item" href="https://www.facebook.com/tiffwuu" title="Facebook">
                <span className="icon is-medium">
                  <i className="fa fa-facebook-square"></i>
                </span>
              </a>
            </div>
          </div>
        </header>
      </div>

    </section>
  );
}

export default Header;
