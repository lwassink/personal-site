import React from 'react';
import NavBar from './NavBar';
import CopyrightBar from './CopyrightBar';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="about-me center">
          <h1>Luke Wassink</h1>
          <section>
            I am a full-stack web developer.
            I work with Javascript, React, and Redux on the frontend.
            On the backend I use Ruby on Rails, Node.js, and Nginx.
            I also work with Scala.
          </section>
          <section>
            <label>resume:</label>
            <a href="/assets/luke-wassink-resume.pdf">pdf</a>
          </section>
          <section>
            <label>graduate thesis:</label>
            <a href="/assets/luke-wassink-thesis.pdf">pdf</a>
          </section>
          <section className="group">
            <label>school:</label>
            <ul>
              <li>
                B.S. in Physics and Mathematics
              </li>
              <li>
                Ph.D. in Mathematics
              </li>
              <li className="last">
                App Academy coding bootcamp
              </li>
            </ul>
          </section>
          <section>
            <label>skills:</label>
              <p>
                Ruby, Javascript, Scala, SQL, Rails, React, Redux
              </p>
          </section>
        </div>
        <CopyrightBar />
      </div>
    )
  }
}

export default AboutMe;
