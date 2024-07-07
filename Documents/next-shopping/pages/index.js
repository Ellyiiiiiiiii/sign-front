import React from 'react';

export default function Index() {
  React.useEffect(() => {
    // 引入 script.js
    const script = document.createElement('script');
    script.src = '/assets/js/script.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* 将 index.html 的内容转为 JSX 语法并放置在此 */}
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <a href="#">
              <img src="assets/images/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="header__nav">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="hero">
          <div className="hero__content">
            <h1>Welcome to Our Website</h1>
            <p>Your success is our priority</p>
            <a href="#" className="hero__cta">Get Started</a>
          </div>
        </section>
        <section className="features">
          <div className="feature">
            <h2>Feature One</h2>
            <p>Description of feature one.</p>
          </div>
          <div className="feature">
            <h2>Feature Two</h2>
            <p>Description of feature two.</p>
          </div>
          <div className="feature">
            <h2>Feature Three</h2>
            <p>Description of feature three.</p>
          </div>
        </section>
        <div className="l-banner__swiper">
          {/* 轮播图的内容 */}
        </div>
      </main>
      <footer className="footer">
        <div className="footer__container">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
