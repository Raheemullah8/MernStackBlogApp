import React from 'react';
import RecentPost from '../Components/RecentPost';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section-blog">
        <div className="hero-overlay-blog">
          <div className="hero-content-blog container text-center">
            <h1 className="hero-title-blog">Welcome to My Blogs</h1>
            <p className="hero-subtitle-blog">
              Dive into a world of ideas, experiences, and untold stories — one blog at a time.
            </p>
          </div>
        </div>
      </section>
      <div className='container-fluid p-5'>
         <RecentPost/>
      </div>


    </>
  );
}

export default Home;
