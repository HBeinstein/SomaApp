import React from 'react';
import '../assets/css/index.css';
import '../assets/css/home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-body-flex-container">
        <div className="home-body-text">
          <h2>
            Empowing people to embrace mindfullness in their everyday routines.
          </h2>
        </div>

        <div className="home-img">

        </div>
      </div>

      <div className="home-why-meditation">
        <h3>Why meditation?</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="/meditations"><button>Try it out!</button></a>
      </div>

      <div className="home-how-it-works">
        <h3>How it works</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit amet cursus. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Nulla aliquet porttitor lacus luctus accumsan tortor. Vestibulum lectus mauris ultrices eros in. Duis ut diam quam nulla porttitor.</p>
      </div>

      <div className="home-daily-routine">
        <h3>Bring mindfullness into your daily routine</h3>
        <p>Vitae semper quis lectus nulla. Purus sit amet luctus venenatis. Eget gravida cum sociis natoque penatibus et magnis dis. Ante metus dictum at tempor commodo. Cursus metus aliquam eleifend mi in. Id semper risus in hendrerit gravida rutrum quisque non tellus. Ante in nibh mauris cursus. Morbi tristique senectus et netus et malesuada fames. A diam sollicitudin tempor id eu. Odio facilisis mauris sit amet.</p>
      </div>
    </div> 
  );
}

export default Home;